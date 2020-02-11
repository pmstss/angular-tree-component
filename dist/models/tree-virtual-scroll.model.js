var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { observable, computed, action, autorun, reaction } from 'mobx';
import { TreeModel } from './tree.model';
import { TREE_EVENTS } from '../constants/events';
var Y_OFFSET = 500; // Extra pixels outside the viewport, in each direction, to render nodes in
var Y_EPSILON = 150; // Minimum pixel change required to recalculate the rendered nodes
var TreeVirtualScroll = /** @class */ (function () {
    function TreeVirtualScroll(treeModel) {
        var _this = this;
        this.treeModel = treeModel;
        this.yBlocks = 0;
        this.x = 0;
        this.viewportHeight = null;
        this.viewport = null;
        treeModel.virtualScroll = this;
        this._dispose = [autorun(function () { return _this.fixScroll(); })];
    }
    Object.defineProperty(TreeVirtualScroll.prototype, "y", {
        get: function () {
            return this.yBlocks * Y_EPSILON;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeVirtualScroll.prototype, "totalHeight", {
        get: function () {
            return this.treeModel.virtualRoot ? this.treeModel.virtualRoot.height : 0;
        },
        enumerable: true,
        configurable: true
    });
    TreeVirtualScroll.prototype.fireEvent = function (event) {
        this.treeModel.fireEvent(event);
    };
    TreeVirtualScroll.prototype.init = function () {
        var _this = this;
        var fn = this.recalcPositions.bind(this);
        fn();
        this._dispose = this._dispose.concat([
            reaction(function () { return _this.treeModel.roots; }, fn),
            reaction(function () { return _this.treeModel.expandedNodeIds; }, fn),
            reaction(function () { return _this.treeModel.hiddenNodeIds; }, fn)
        ]);
        this.treeModel.subscribe(TREE_EVENTS.loadNodeChildren, fn);
    };
    TreeVirtualScroll.prototype.isEnabled = function () {
        return this.treeModel.options.useVirtualScroll;
    };
    TreeVirtualScroll.prototype._setYBlocks = function (value) {
        this.yBlocks = value;
    };
    TreeVirtualScroll.prototype.recalcPositions = function () {
        this.treeModel.virtualRoot.height = this._getPositionAfter(this.treeModel.getVisibleRoots(), 0);
    };
    TreeVirtualScroll.prototype._getPositionAfter = function (nodes, startPos) {
        var _this = this;
        var position = startPos;
        nodes.forEach(function (node) {
            node.position = position;
            position = _this._getPositionAfterNode(node, position);
        });
        return position;
    };
    TreeVirtualScroll.prototype._getPositionAfterNode = function (node, startPos) {
        var position = node.getSelfHeight() + startPos;
        if (node.children && node.isExpanded) { // TBD: consider loading component as well
            position = this._getPositionAfter(node.visibleChildren, position);
        }
        node.height = position - startPos;
        return position;
    };
    TreeVirtualScroll.prototype.clear = function () {
        this._dispose.forEach(function (d) { return d(); });
    };
    TreeVirtualScroll.prototype.setViewport = function (viewport) {
        Object.assign(this, {
            viewport: viewport,
            x: viewport.scrollLeft,
            yBlocks: Math.round(viewport.scrollTop / Y_EPSILON),
            viewportHeight: viewport.getBoundingClientRect ? viewport.getBoundingClientRect().height : 0
        });
    };
    TreeVirtualScroll.prototype.scrollIntoView = function (node, force, scrollToMiddle) {
        if (scrollToMiddle === void 0) { scrollToMiddle = true; }
        if (node.options.scrollContainer) {
            var scrollContainer = node.options.scrollContainer;
            var scrollContainerHeight = scrollContainer.getBoundingClientRect().height;
            var scrollContainerTop = scrollContainer.getBoundingClientRect().top;
            var nodeTop = this.viewport.getBoundingClientRect().top + node.position - scrollContainerTop;
            if (force || // force scroll to node
                nodeTop < scrollContainer.scrollTop || // node is above scroll container
                nodeTop + node.getSelfHeight() > scrollContainer.scrollTop + scrollContainerHeight) { // node is below container
                scrollContainer.scrollTop = scrollToMiddle ?
                    nodeTop - scrollContainerHeight / 2 : // scroll to middle
                    nodeTop; // scroll to start
            }
        }
        else {
            if (force || // force scroll to node
                node.position < this.y || // node is above viewport
                node.position + node.getSelfHeight() > this.y + this.viewportHeight) { // node is below viewport
                if (this.viewport) {
                    this.viewport.scrollTop = scrollToMiddle ?
                        node.position - this.viewportHeight / 2 : // scroll to middle
                        node.position; // scroll to start
                    this._setYBlocks(Math.floor(this.viewport.scrollTop / Y_EPSILON));
                }
            }
        }
    };
    TreeVirtualScroll.prototype.getViewportNodes = function (nodes) {
        var _this = this;
        if (!nodes)
            return [];
        var visibleNodes = nodes.filter(function (node) { return !node.isHidden; });
        if (!this.isEnabled())
            return visibleNodes;
        if (!this.viewportHeight || !visibleNodes.length)
            return [];
        // Search for first node in the viewport using binary search
        // Look for first node that starts after the beginning of the viewport (with buffer)
        // Or that ends after the beginning of the viewport
        var firstIndex = binarySearch(visibleNodes, function (node) {
            return (node.position + Y_OFFSET > _this.y) ||
                (node.position + node.height > _this.y);
        });
        // Search for last node in the viewport using binary search
        // Look for first node that starts after the end of the viewport (with buffer)
        var lastIndex = binarySearch(visibleNodes, function (node) {
            return node.position - Y_OFFSET > _this.y + _this.viewportHeight;
        }, firstIndex);
        var viewportNodes = [];
        // Loading async top nodes' children is too long.
        // It happens when first node is visible withing viewport range (including Y_OFFSET).
        // In that case firstIndex == 0 and lastIndex == visibleNodes.length - 1 (e.g. 1000),
        // which means that it loops through every visibleNodes item and push them into viewportNodes array.
        // lastIndex should not equal visibleNodes.length - 1, but something around 50-100 (depending on the viewport)
        var nodeHeight = visibleNodes[0].treeModel.options.options.nodeHeight;
        var renderedNodesMaxLength = (Y_OFFSET * 2 + this.viewportHeight) / nodeHeight;
        // Something is probably wrong, prevent nodes from being pushed to an array.
        if (lastIndex - firstIndex > renderedNodesMaxLength) {
            return [];
        }
        for (var i = firstIndex; i <= lastIndex; i++) {
            viewportNodes.push(visibleNodes[i]);
        }
        return viewportNodes;
    };
    TreeVirtualScroll.prototype.fixScroll = function () {
        var maxY = Math.max(0, this.totalHeight - this.viewportHeight);
        if (this.y < 0)
            this._setYBlocks(0);
        if (this.y > maxY)
            this._setYBlocks(maxY / Y_EPSILON);
    };
    __decorate([
        observable,
        __metadata("design:type", Object)
    ], TreeVirtualScroll.prototype, "yBlocks", void 0);
    __decorate([
        observable,
        __metadata("design:type", Object)
    ], TreeVirtualScroll.prototype, "x", void 0);
    __decorate([
        observable,
        __metadata("design:type", Object)
    ], TreeVirtualScroll.prototype, "viewportHeight", void 0);
    __decorate([
        computed,
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], TreeVirtualScroll.prototype, "y", null);
    __decorate([
        computed,
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], TreeVirtualScroll.prototype, "totalHeight", null);
    __decorate([
        action,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], TreeVirtualScroll.prototype, "_setYBlocks", null);
    __decorate([
        action,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TreeVirtualScroll.prototype, "recalcPositions", null);
    __decorate([
        action,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], TreeVirtualScroll.prototype, "setViewport", null);
    __decorate([
        action,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], TreeVirtualScroll.prototype, "scrollIntoView", null);
    TreeVirtualScroll = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [TreeModel])
    ], TreeVirtualScroll);
    return TreeVirtualScroll;
}());
export { TreeVirtualScroll };
function binarySearch(nodes, condition, firstIndex) {
    if (firstIndex === void 0) { firstIndex = 0; }
    var index = firstIndex;
    var toIndex = nodes.length - 1;
    while (index !== toIndex) {
        var midIndex = Math.floor((index + toIndex) / 2);
        if (condition(nodes[midIndex])) {
            toIndex = midIndex;
        }
        else {
            if (index === midIndex)
                index = toIndex;
            else
                index = midIndex;
        }
    }
    return index;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS12aXJ0dWFsLXNjcm9sbC5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9tb2RlbHMvdHJlZS12aXJ0dWFsLXNjcm9sbC5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRWxELElBQU0sUUFBUSxHQUFHLEdBQUcsQ0FBQyxDQUFDLDJFQUEyRTtBQUNqRyxJQUFNLFNBQVMsR0FBRyxHQUFHLENBQUMsQ0FBQyxrRUFBa0U7QUFHekY7SUFnQkUsMkJBQW9CLFNBQW9CO1FBQXhDLGlCQUdDO1FBSG1CLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFiNUIsWUFBTyxHQUFHLENBQUMsQ0FBQztRQUNaLE1BQUMsR0FBRyxDQUFDLENBQUM7UUFDTixtQkFBYyxHQUFHLElBQUksQ0FBQztRQUNsQyxhQUFRLEdBQUcsSUFBSSxDQUFDO1FBV2QsU0FBUyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFDL0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLE9BQU8sQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLFNBQVMsRUFBRSxFQUFoQixDQUFnQixDQUFDLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBWFMsc0JBQUksZ0NBQUM7YUFBTDtZQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUM7UUFDbEMsQ0FBQzs7O09BQUE7SUFFUyxzQkFBSSwwQ0FBVzthQUFmO1lBQ1IsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FB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R0FBRyxPQUFPLENBQUM7O2dCQUNuQyxLQUFLLEdBQUcsUUFBUSxDQUFDO1NBQ3ZCO0tBQ0Y7SUFDRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IG9ic2VydmFibGUsIGNvbXB1dGVkLCBhY3Rpb24sIGF1dG9ydW4sIHJlYWN0aW9uIH0gZnJvbSAnbW9ieCc7XHJcbmltcG9ydCB7IFRyZWVNb2RlbCB9IGZyb20gJy4vdHJlZS5tb2RlbCc7XHJcbmltcG9ydCB7IFRSRUVfRVZFTlRTIH0gZnJvbSAnLi4vY29uc3RhbnRzL2V2ZW50cyc7XHJcblxyXG5jb25zdCBZX09GRlNFVCA9IDUwMDsgLy8gRXh0cmEgcGl4ZWxzIG91dHNpZGUgdGhlIHZpZXdwb3J0LCBpbiBlYWNoIGRpcmVjdGlvbiwgdG8gcmVuZGVyIG5vZGVzIGluXHJcbmNvbnN0IFlfRVBTSUxPTiA9IDE1MDsgLy8gTWluaW11bSBwaXhlbCBjaGFuZ2UgcmVxdWlyZWQgdG8gcmVjYWxjdWxhdGUgdGhlIHJlbmRlcmVkIG5vZGVzXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBUcmVlVmlydHVhbFNjcm9sbCB7XHJcbiAgcHJpdmF0ZSBfZGlzcG9zZTogYW55O1xyXG5cclxuICBAb2JzZXJ2YWJsZSB5QmxvY2tzID0gMDtcclxuICBAb2JzZXJ2YWJsZSB4ID0gMDtcclxuICBAb2JzZXJ2YWJsZSB2aWV3cG9ydEhlaWdodCA9IG51bGw7XHJcbiAgdmlld3BvcnQgPSBudWxsO1xyXG5cclxuICBAY29tcHV0ZWQgZ2V0IHkoKSB7XHJcbiAgICByZXR1cm4gdGhpcy55QmxvY2tzICogWV9FUFNJTE9OO1xyXG4gIH1cclxuXHJcbiAgQGNvbXB1dGVkIGdldCB0b3RhbEhlaWdodCgpIHtcclxuICAgIHJldHVybiB0aGlzLnRyZWVNb2RlbC52aXJ0dWFsUm9vdCA/IHRoaXMudHJlZU1vZGVsLnZpcnR1YWxSb290LmhlaWdodCA6IDA7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRyZWVNb2RlbDogVHJlZU1vZGVsKSB7XHJcbiAgICB0cmVlTW9kZWwudmlydHVhbFNjcm9sbCA9IHRoaXM7XHJcbiAgICB0aGlzLl9kaXNwb3NlID0gW2F1dG9ydW4oKCkgPT4gdGhpcy5maXhTY3JvbGwoKSldO1xyXG4gIH1cclxuXHJcbiAgZmlyZUV2ZW50KGV2ZW50KSB7XHJcbiAgICB0aGlzLnRyZWVNb2RlbC5maXJlRXZlbnQoZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIGNvbnN0IGZuID0gdGhpcy5yZWNhbGNQb3NpdGlvbnMuYmluZCh0aGlzKTtcclxuXHJcbiAgICBmbigpO1xyXG4gICAgdGhpcy5fZGlzcG9zZSA9IFtcclxuICAgICAgLi4udGhpcy5fZGlzcG9zZSxcclxuICAgICAgcmVhY3Rpb24oKCkgPT4gdGhpcy50cmVlTW9kZWwucm9vdHMsIGZuKSxcclxuICAgICAgcmVhY3Rpb24oKCkgPT4gdGhpcy50cmVlTW9kZWwuZXhwYW5kZWROb2RlSWRzLCBmbiksXHJcbiAgICAgIHJlYWN0aW9uKCgpID0+IHRoaXMudHJlZU1vZGVsLmhpZGRlbk5vZGVJZHMsIGZuKVxyXG4gICAgXTtcclxuICAgIHRoaXMudHJlZU1vZGVsLnN1YnNjcmliZShUUkVFX0VWRU5UUy5sb2FkTm9kZUNoaWxkcmVuLCBmbik7XHJcbiAgfVxyXG5cclxuICBpc0VuYWJsZWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy50cmVlTW9kZWwub3B0aW9ucy51c2VWaXJ0dWFsU2Nyb2xsO1xyXG4gIH1cclxuXHJcbiAgQGFjdGlvbiBwcml2YXRlIF9zZXRZQmxvY2tzKHZhbHVlKSB7XHJcbiAgICB0aGlzLnlCbG9ja3MgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIEBhY3Rpb24gcmVjYWxjUG9zaXRpb25zKCkge1xyXG4gICAgdGhpcy50cmVlTW9kZWwudmlydHVhbFJvb3QuaGVpZ2h0ID0gdGhpcy5fZ2V0UG9zaXRpb25BZnRlcih0aGlzLnRyZWVNb2RlbC5nZXRWaXNpYmxlUm9vdHMoKSwgMCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9nZXRQb3NpdGlvbkFmdGVyKG5vZGVzLCBzdGFydFBvcykge1xyXG4gICAgbGV0IHBvc2l0aW9uID0gc3RhcnRQb3M7XHJcblxyXG4gICAgbm9kZXMuZm9yRWFjaCgobm9kZSkgPT4ge1xyXG4gICAgICBub2RlLnBvc2l0aW9uID0gcG9zaXRpb247XHJcbiAgICAgIHBvc2l0aW9uID0gdGhpcy5fZ2V0UG9zaXRpb25BZnRlck5vZGUobm9kZSwgcG9zaXRpb24pO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcG9zaXRpb247XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9nZXRQb3NpdGlvbkFmdGVyTm9kZShub2RlLCBzdGFydFBvcykge1xyXG4gICAgbGV0IHBvc2l0aW9uID0gbm9kZS5nZXRTZWxmSGVpZ2h0KCkgKyBzdGFydFBvcztcclxuXHJcbiAgICBpZiAobm9kZS5jaGlsZHJlbiAmJiBub2RlLmlzRXhwYW5kZWQpIHsgLy8gVEJEOiBjb25zaWRlciBsb2FkaW5nIGNvbXBvbmVudCBhcyB3ZWxsXHJcbiAgICAgIHBvc2l0aW9uID0gdGhpcy5fZ2V0UG9zaXRpb25BZnRlcihub2RlLnZpc2libGVDaGlsZHJlbiwgcG9zaXRpb24pO1xyXG4gICAgfVxyXG4gICAgbm9kZS5oZWlnaHQgPSBwb3NpdGlvbiAtIHN0YXJ0UG9zO1xyXG4gICAgcmV0dXJuIHBvc2l0aW9uO1xyXG4gIH1cclxuXHJcblxyXG4gIGNsZWFyKCkge1xyXG4gICAgdGhpcy5fZGlzcG9zZS5mb3JFYWNoKChkKSA9PiBkKCkpO1xyXG4gIH1cclxuXHJcbiAgQGFjdGlvbiBzZXRWaWV3cG9ydCh2aWV3cG9ydCkge1xyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCB7XHJcbiAgICAgIHZpZXdwb3J0LFxyXG4gICAgICB4OiB2aWV3cG9ydC5zY3JvbGxMZWZ0LFxyXG4gICAgICB5QmxvY2tzOiBNYXRoLnJvdW5kKHZpZXdwb3J0LnNjcm9sbFRvcCAvIFlfRVBTSUxPTiksXHJcbiAgICAgIHZpZXdwb3J0SGVpZ2h0OiB2aWV3cG9ydC5nZXRCb3VuZGluZ0NsaWVudFJlY3QgPyB2aWV3cG9ydC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQgOiAwXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIEBhY3Rpb24gc2Nyb2xsSW50b1ZpZXcobm9kZSwgZm9yY2UsIHNjcm9sbFRvTWlkZGxlID0gdHJ1ZSkge1xyXG4gICAgaWYgKG5vZGUub3B0aW9ucy5zY3JvbGxDb250YWluZXIpIHtcclxuICAgICAgY29uc3Qgc2Nyb2xsQ29udGFpbmVyID0gbm9kZS5vcHRpb25zLnNjcm9sbENvbnRhaW5lcjtcclxuICAgICAgY29uc3Qgc2Nyb2xsQ29udGFpbmVySGVpZ2h0ID0gc2Nyb2xsQ29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcclxuICAgICAgY29uc3Qgc2Nyb2xsQ29udGFpbmVyVG9wID0gc2Nyb2xsQ29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcclxuICAgICAgY29uc3Qgbm9kZVRvcCA9IHRoaXMudmlld3BvcnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgbm9kZS5wb3NpdGlvbiAtIHNjcm9sbENvbnRhaW5lclRvcDtcclxuXHJcbiAgICAgIGlmIChmb3JjZSB8fCAvLyBmb3JjZSBzY3JvbGwgdG8gbm9kZVxyXG4gICAgICAgIG5vZGVUb3AgPCBzY3JvbGxDb250YWluZXIuc2Nyb2xsVG9wIHx8IC8vIG5vZGUgaXMgYWJvdmUgc2Nyb2xsIGNvbnRhaW5lclxyXG4gICAgICAgIG5vZGVUb3AgKyBub2RlLmdldFNlbGZIZWlnaHQoKSA+IHNjcm9sbENvbnRhaW5lci5zY3JvbGxUb3AgKyBzY3JvbGxDb250YWluZXJIZWlnaHQpIHsgLy8gbm9kZSBpcyBiZWxvdyBjb250YWluZXJcclxuICAgICAgICBzY3JvbGxDb250YWluZXIuc2Nyb2xsVG9wID0gc2Nyb2xsVG9NaWRkbGUgP1xyXG4gICAgICAgICAgbm9kZVRvcCAtIHNjcm9sbENvbnRhaW5lckhlaWdodCAvIDIgOiAvLyBzY3JvbGwgdG8gbWlkZGxlXHJcbiAgICAgICAgICBub2RlVG9wOyAvLyBzY3JvbGwgdG8gc3RhcnRcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKGZvcmNlIHx8IC8vIGZvcmNlIHNjcm9sbCB0byBub2RlXHJcbiAgICAgICAgbm9kZS5wb3NpdGlvbiA8IHRoaXMueSB8fCAvLyBub2RlIGlzIGFib3ZlIHZpZXdwb3J0XHJcbiAgICAgICAgbm9kZS5wb3NpdGlvbiArIG5vZGUuZ2V0U2VsZkhlaWdodCgpID4gdGhpcy55ICsgdGhpcy52aWV3cG9ydEhlaWdodCkgeyAvLyBub2RlIGlzIGJlbG93IHZpZXdwb3J0XHJcbiAgICAgICAgaWYgKHRoaXMudmlld3BvcnQpIHtcclxuICAgICAgICAgIHRoaXMudmlld3BvcnQuc2Nyb2xsVG9wID0gc2Nyb2xsVG9NaWRkbGUgP1xyXG4gICAgICAgICAgbm9kZS5wb3NpdGlvbiAtIHRoaXMudmlld3BvcnRIZWlnaHQgLyAyIDogLy8gc2Nyb2xsIHRvIG1pZGRsZVxyXG4gICAgICAgICAgbm9kZS5wb3NpdGlvbjsgLy8gc2Nyb2xsIHRvIHN0YXJ0XHJcblxyXG4gICAgICAgICAgdGhpcy5fc2V0WUJsb2NrcyhNYXRoLmZsb29yKHRoaXMudmlld3BvcnQuc2Nyb2xsVG9wIC8gWV9FUFNJTE9OKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRWaWV3cG9ydE5vZGVzKG5vZGVzKSB7XHJcbiAgICBpZiAoIW5vZGVzKSByZXR1cm4gW107XHJcblxyXG4gICAgY29uc3QgdmlzaWJsZU5vZGVzID0gbm9kZXMuZmlsdGVyKChub2RlKSA9PiAhbm9kZS5pc0hpZGRlbik7XHJcblxyXG4gICAgaWYgKCF0aGlzLmlzRW5hYmxlZCgpKSByZXR1cm4gdmlzaWJsZU5vZGVzO1xyXG5cclxuICAgIGlmICghdGhpcy52aWV3cG9ydEhlaWdodCB8fCAhdmlzaWJsZU5vZGVzLmxlbmd0aCkgcmV0dXJuIFtdO1xyXG5cclxuICAgIC8vIFNlYXJjaCBmb3IgZmlyc3Qgbm9kZSBpbiB0aGUgdmlld3BvcnQgdXNpbmcgYmluYXJ5IHNlYXJjaFxyXG4gICAgLy8gTG9vayBmb3IgZmlyc3Qgbm9kZSB0aGF0IHN0YXJ0cyBhZnRlciB0aGUgYmVnaW5uaW5nIG9mIHRoZSB2aWV3cG9ydCAod2l0aCBidWZmZXIpXHJcbiAgICAvLyBPciB0aGF0IGVuZHMgYWZ0ZXIgdGhlIGJlZ2lubmluZyBvZiB0aGUgdmlld3BvcnRcclxuICAgIGNvbnN0IGZpcnN0SW5kZXggPSBiaW5hcnlTZWFyY2godmlzaWJsZU5vZGVzLCAobm9kZSkgPT4ge1xyXG4gICAgICByZXR1cm4gKG5vZGUucG9zaXRpb24gKyBZX09GRlNFVCA+IHRoaXMueSkgfHxcclxuICAgICAgICAgICAgIChub2RlLnBvc2l0aW9uICsgbm9kZS5oZWlnaHQgPiB0aGlzLnkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gU2VhcmNoIGZvciBsYXN0IG5vZGUgaW4gdGhlIHZpZXdwb3J0IHVzaW5nIGJpbmFyeSBzZWFyY2hcclxuICAgIC8vIExvb2sgZm9yIGZpcnN0IG5vZGUgdGhhdCBzdGFydHMgYWZ0ZXIgdGhlIGVuZCBvZiB0aGUgdmlld3BvcnQgKHdpdGggYnVmZmVyKVxyXG4gICAgY29uc3QgbGFzdEluZGV4ID0gYmluYXJ5U2VhcmNoKHZpc2libGVOb2RlcywgKG5vZGUpID0+IHtcclxuICAgICAgcmV0dXJuIG5vZGUucG9zaXRpb24gLSBZX09GRlNFVCA+IHRoaXMueSArIHRoaXMudmlld3BvcnRIZWlnaHQ7XHJcbiAgICB9LCBmaXJzdEluZGV4KTtcclxuXHJcbiAgICBjb25zdCB2aWV3cG9ydE5vZGVzID0gW107XHJcblxyXG4gICAgLy8gTG9hZGluZyBhc3luYyB0b3Agbm9kZXMnIGNoaWxkcmVuIGlzIHRvbyBsb25nLlxyXG4gICAgLy8gSXQgaGFwcGVucyB3aGVuIGZpcnN0IG5vZGUgaXMgdmlzaWJsZSB3aXRoaW5nIHZpZXdwb3J0IHJhbmdlIChpbmNsdWRpbmcgWV9PRkZTRVQpLlxyXG4gICAgLy8gSW4gdGhhdCBjYXNlIGZpcnN0SW5kZXggPT0gMCBhbmQgbGFzdEluZGV4ID09IHZpc2libGVOb2Rlcy5sZW5ndGggLSAxIChlLmcuIDEwMDApLFxyXG4gICAgLy8gd2hpY2ggbWVhbnMgdGhhdCBpdCBsb29wcyB0aHJvdWdoIGV2ZXJ5IHZpc2libGVOb2RlcyBpdGVtIGFuZCBwdXNoIHRoZW0gaW50byB2aWV3cG9ydE5vZGVzIGFycmF5LlxyXG4gICAgLy8gbGFzdEluZGV4IHNob3VsZCBub3QgZXF1YWwgdmlzaWJsZU5vZGVzLmxlbmd0aCAtIDEsIGJ1dCBzb21ldGhpbmcgYXJvdW5kIDUwLTEwMCAoZGVwZW5kaW5nIG9uIHRoZSB2aWV3cG9ydClcclxuICAgIGNvbnN0IG5vZGVIZWlnaHQgPSB2aXNpYmxlTm9kZXNbMF0udHJlZU1vZGVsLm9wdGlvbnMub3B0aW9ucy5ub2RlSGVpZ2h0O1xyXG4gICAgY29uc3QgcmVuZGVyZWROb2Rlc01heExlbmd0aCA9IChZX09GRlNFVCAqIDIgKyB0aGlzLnZpZXdwb3J0SGVpZ2h0KSAvIG5vZGVIZWlnaHQ7XHJcblxyXG4gICAgLy8gU29tZXRoaW5nIGlzIHByb2JhYmx5IHdyb25nLCBwcmV2ZW50IG5vZGVzIGZyb20gYmVpbmcgcHVzaGVkIHRvIGFuIGFycmF5LlxyXG4gICAgaWYgKGxhc3RJbmRleCAtIGZpcnN0SW5kZXggPiByZW5kZXJlZE5vZGVzTWF4TGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGxldCBpID0gZmlyc3RJbmRleDsgaSA8PSBsYXN0SW5kZXg7IGkrKykge1xyXG4gICAgICB2aWV3cG9ydE5vZGVzLnB1c2godmlzaWJsZU5vZGVzW2ldKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdmlld3BvcnROb2RlcztcclxuICB9XHJcblxyXG4gIGZpeFNjcm9sbCgpIHtcclxuICAgIGNvbnN0IG1heFkgPSBNYXRoLm1heCgwLCB0aGlzLnRvdGFsSGVpZ2h0IC0gdGhpcy52aWV3cG9ydEhlaWdodCk7XHJcblxyXG4gICAgaWYgKHRoaXMueSA8IDApIHRoaXMuX3NldFlCbG9ja3MoMCk7XHJcbiAgICBpZiAodGhpcy55ID4gbWF4WSkgdGhpcy5fc2V0WUJsb2NrcyhtYXhZIC8gWV9FUFNJTE9OKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJpbmFyeVNlYXJjaChub2RlcywgY29uZGl0aW9uLCBmaXJzdEluZGV4ID0gMCkge1xyXG4gIGxldCBpbmRleCA9IGZpcnN0SW5kZXg7XHJcbiAgbGV0IHRvSW5kZXggPSBub2Rlcy5sZW5ndGggLSAxO1xyXG5cclxuICB3aGlsZSAoaW5kZXggIT09IHRvSW5kZXgpIHtcclxuICAgIGxldCBtaWRJbmRleCA9IE1hdGguZmxvb3IoKGluZGV4ICsgdG9JbmRleCkgLyAyKTtcclxuXHJcbiAgICBpZiAoY29uZGl0aW9uKG5vZGVzW21pZEluZGV4XSkpIHtcclxuICAgICAgdG9JbmRleCA9IG1pZEluZGV4O1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIGlmIChpbmRleCA9PT0gbWlkSW5kZXgpIGluZGV4ID0gdG9JbmRleDtcclxuICAgICAgZWxzZSBpbmRleCA9IG1pZEluZGV4O1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gaW5kZXg7XHJcbn1cclxuIl19