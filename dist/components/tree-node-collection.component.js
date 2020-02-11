var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { reaction } from 'mobx';
import { observable, computed, action } from 'mobx-angular';
import { TreeModel } from '../models/tree.model';
var TreeNodeCollectionComponent = /** @class */ (function () {
    function TreeNodeCollectionComponent() {
        this._dispose = [];
    }
    Object.defineProperty(TreeNodeCollectionComponent.prototype, "nodes", {
        get: function () { return this._nodes; },
        set: function (nodes) { this.setNodes(nodes); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeNodeCollectionComponent.prototype, "marginTop", {
        get: function () {
            var firstNode = this.viewportNodes && this.viewportNodes.length && this.viewportNodes[0];
            var relativePosition = (firstNode && firstNode.parent)
                ? firstNode.position - firstNode.parent.position - firstNode.parent.getSelfHeight()
                : 0;
            return relativePosition + "px";
        },
        enumerable: true,
        configurable: true
    });
    TreeNodeCollectionComponent.prototype.setNodes = function (nodes) {
        this._nodes = nodes;
    };
    TreeNodeCollectionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.virtualScroll = this.treeModel.virtualScroll;
        this._dispose = [
            // return node indexes so we can compare structurally,
            reaction(function () {
                return _this.virtualScroll.getViewportNodes(_this.nodes).map(function (n) { return n.index; });
            }, function (nodeIndexes) {
                _this.viewportNodes = nodeIndexes.map(function (i) { return _this.nodes[i]; });
            }, { compareStructural: true, fireImmediately: true }),
            reaction(function () { return _this.nodes; }, function (nodes) {
                _this.viewportNodes = _this.virtualScroll.getViewportNodes(nodes);
            })
        ];
    };
    TreeNodeCollectionComponent.prototype.ngOnDestroy = function () {
        this._dispose.forEach(function (d) { return d(); });
    };
    TreeNodeCollectionComponent.prototype.trackNode = function (index, node) {
        return node.id;
    };
    __decorate([
        Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], TreeNodeCollectionComponent.prototype, "nodes", null);
    __decorate([
        Input(),
        __metadata("design:type", TreeModel)
    ], TreeNodeCollectionComponent.prototype, "treeModel", void 0);
    __decorate([
        observable,
        __metadata("design:type", Object)
    ], TreeNodeCollectionComponent.prototype, "_nodes", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], TreeNodeCollectionComponent.prototype, "templates", void 0);
    __decorate([
        observable,
        __metadata("design:type", Array)
    ], TreeNodeCollectionComponent.prototype, "viewportNodes", void 0);
    __decorate([
        computed,
        __metadata("design:type", String),
        __metadata("design:paramtypes", [])
    ], TreeNodeCollectionComponent.prototype, "marginTop", null);
    __decorate([
        action,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], TreeNodeCollectionComponent.prototype, "setNodes", null);
    TreeNodeCollectionComponent = __decorate([
        Component({
            selector: 'tree-node-collection',
            encapsulation: ViewEncapsulation.None,
            template: "\n    <ng-container *mobxAutorun=\"{dontDetach: true}\">\n      <div\n        [style.margin-top]=\"marginTop\">\n        <tree-node\n          *ngFor=\"let node of viewportNodes; let i = index; trackBy: trackNode\"\n          [node]=\"node\"\n          [index]=\"i\"\n          [templates]=\"templates\">\n        </tree-node>\n      </div>\n    </ng-container>\n  "
        })
    ], TreeNodeCollectionComponent);
    return TreeNodeCollectionComponent;
}());
export { TreeNodeCollectionComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1ub2RlLWNvbGxlY3Rpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbGliL2NvbXBvbmVudHMvdHJlZS1ub2RlLWNvbGxlY3Rpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUNwQyxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2hDLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUc1RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFtQmpEO0lBakJBO1FBd0NFLGFBQVEsR0FBRyxFQUFFLENBQUM7SUE4QmhCLENBQUM7SUFuREMsc0JBQUksOENBQUs7YUFBVCxjQUFjLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7YUFDbkMsVUFBVSxLQUFLLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7OztPQURQO0lBV3pCLHNCQUFJLGtEQUFTO2FBQWI7WUFDUixJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0YsSUFBTSxnQkFBZ0IsR0FDcEIsQ0FBQyxTQUFTLElBQUksU0FBUyxDQUFDLE1BQU0sQ0FBQztnQkFDL0IsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUU7Z0JBQ25GLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFTixPQUFVLGdCQUFnQixPQUFJLENBQUM7UUFDakMsQ0FBQzs7O09BQUE7SUFJTyw4Q0FBUSxHQUFSLFVBQVMsS0FBSztRQUNwQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBRUQsOENBQVEsR0FBUjtRQUFBLGlCQWNDO1FBYkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQztRQUNsRCxJQUFJLENBQUMsUUFBUSxHQUFHO1lBQ2Qsc0RBQXNEO1lBQ3RELFFBQVEsQ0FBQztnQkFDUCxPQUFPLEtBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxLQUFLLEVBQVAsQ0FBTyxDQUFDLENBQUM7WUFDM0UsQ0FBQyxFQUFFLFVBQUMsV0FBVztnQkFDWCxLQUFJLENBQUMsYUFBYSxHQUFHLFdBQVcsQ0FBQyxHQUFHLENBQUMsVUFBQyxDQUFDLElBQUssT0FBQSxLQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFiLENBQWEsQ0FBQyxDQUFDO1lBQzdELENBQUMsRUFBRSxFQUFFLGlCQUFpQixFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsSUFBSSxFQUFTLENBQzdEO1lBQ0QsUUFBUSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsS0FBSyxFQUFWLENBQVUsRUFBRSxVQUFDLEtBQUs7Z0JBQy9CLEtBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNsRSxDQUFDLENBQUM7U0FDSCxDQUFDO0lBQ0osQ0FBQztJQUVELGlEQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsRUFBRSxFQUFILENBQUcsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRCwrQ0FBUyxHQUFULFVBQVUsS0FBSyxFQUFFLElBQUk7UUFDbkIsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFqREQ7UUFEQyxLQUFLLEVBQUU7Ozs0REFDMkI7SUFHMUI7UUFBUixLQUFLLEVBQUU7a0NBQVksU0FBUztrRUFBQztJQUVsQjtRQUFYLFVBQVU7OytEQUFRO0lBRVY7UUFBUixLQUFLLEVBQUU7O2tFQUFXO0lBRVA7UUFBWCxVQUFVOztzRUFBMkI7SUFFNUI7UUFBVCxRQUFROzs7Z0VBUVI7SUFJTztRQUFQLE1BQU07Ozs7K0RBRU47SUEzQlUsMkJBQTJCO1FBakJ2QyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsc0JBQXNCO1lBQ2hDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO1lBQ3JDLFFBQVEsRUFBRSwrV0FZVDtTQUNGLENBQUM7T0FDVywyQkFBMkIsQ0FxRHZDO0lBQUQsa0NBQUM7Q0FBQSxBQXJERCxJQXFEQztTQXJEWSwyQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBPbkluaXQsIE9uRGVzdHJveVxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyByZWFjdGlvbiB9IGZyb20gJ21vYngnO1xyXG5pbXBvcnQgeyBvYnNlcnZhYmxlLCBjb21wdXRlZCwgYWN0aW9uIH0gZnJvbSAnbW9ieC1hbmd1bGFyJztcclxuaW1wb3J0IHsgVHJlZVZpcnR1YWxTY3JvbGwgfSBmcm9tICcuLi9tb2RlbHMvdHJlZS12aXJ0dWFsLXNjcm9sbC5tb2RlbCc7XHJcbmltcG9ydCB7IFRyZWVOb2RlIH0gZnJvbSAnLi4vbW9kZWxzL3RyZWUtbm9kZS5tb2RlbCc7XHJcbmltcG9ydCB7IFRyZWVNb2RlbCB9IGZyb20gJy4uL21vZGVscy90cmVlLm1vZGVsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndHJlZS1ub2RlLWNvbGxlY3Rpb24nLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuZy1jb250YWluZXIgKm1vYnhBdXRvcnVuPVwie2RvbnREZXRhY2g6IHRydWV9XCI+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBbc3R5bGUubWFyZ2luLXRvcF09XCJtYXJnaW5Ub3BcIj5cclxuICAgICAgICA8dHJlZS1ub2RlXHJcbiAgICAgICAgICAqbmdGb3I9XCJsZXQgbm9kZSBvZiB2aWV3cG9ydE5vZGVzOyBsZXQgaSA9IGluZGV4OyB0cmFja0J5OiB0cmFja05vZGVcIlxyXG4gICAgICAgICAgW25vZGVdPVwibm9kZVwiXHJcbiAgICAgICAgICBbaW5kZXhdPVwiaVwiXHJcbiAgICAgICAgICBbdGVtcGxhdGVzXT1cInRlbXBsYXRlc1wiPlxyXG4gICAgICAgIDwvdHJlZS1ub2RlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIFRyZWVOb2RlQ29sbGVjdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBASW5wdXQoKVxyXG4gIGdldCBub2RlcygpIHsgcmV0dXJuIHRoaXMuX25vZGVzOyB9XHJcbiAgc2V0IG5vZGVzKG5vZGVzKSB7IHRoaXMuc2V0Tm9kZXMobm9kZXMpOyB9XHJcblxyXG4gIEBJbnB1dCgpIHRyZWVNb2RlbDogVHJlZU1vZGVsO1xyXG5cclxuICBAb2JzZXJ2YWJsZSBfbm9kZXM7XHJcbiAgcHJpdmF0ZSB2aXJ0dWFsU2Nyb2xsOiBUcmVlVmlydHVhbFNjcm9sbDsgLy8gQ2Fubm90IGluamVjdCB0aGlzLCBiZWNhdXNlIHdlIG1pZ2h0IGJlIGluc2lkZSB0cmVlTm9kZVRlbXBsYXRlRnVsbFxyXG4gIEBJbnB1dCgpIHRlbXBsYXRlcztcclxuXHJcbiAgQG9ic2VydmFibGUgdmlld3BvcnROb2RlczogVHJlZU5vZGVbXTtcclxuXHJcbiAgQGNvbXB1dGVkIGdldCBtYXJnaW5Ub3AoKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IGZpcnN0Tm9kZSA9IHRoaXMudmlld3BvcnROb2RlcyAmJiB0aGlzLnZpZXdwb3J0Tm9kZXMubGVuZ3RoICYmIHRoaXMudmlld3BvcnROb2Rlc1swXTtcclxuICAgIGNvbnN0IHJlbGF0aXZlUG9zaXRpb24gPVxyXG4gICAgICAoZmlyc3ROb2RlICYmIGZpcnN0Tm9kZS5wYXJlbnQpXHJcbiAgICAgID8gZmlyc3ROb2RlLnBvc2l0aW9uIC0gZmlyc3ROb2RlLnBhcmVudC5wb3NpdGlvbiAtIGZpcnN0Tm9kZS5wYXJlbnQuZ2V0U2VsZkhlaWdodCgpXHJcbiAgICAgIDogMDtcclxuXHJcbiAgICByZXR1cm4gYCR7cmVsYXRpdmVQb3NpdGlvbn1weGA7XHJcbiAgfVxyXG5cclxuICBfZGlzcG9zZSA9IFtdO1xyXG5cclxuICBAYWN0aW9uIHNldE5vZGVzKG5vZGVzKSB7XHJcbiAgICB0aGlzLl9ub2RlcyA9IG5vZGVzO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnZpcnR1YWxTY3JvbGwgPSB0aGlzLnRyZWVNb2RlbC52aXJ0dWFsU2Nyb2xsO1xyXG4gICAgdGhpcy5fZGlzcG9zZSA9IFtcclxuICAgICAgLy8gcmV0dXJuIG5vZGUgaW5kZXhlcyBzbyB3ZSBjYW4gY29tcGFyZSBzdHJ1Y3R1cmFsbHksXHJcbiAgICAgIHJlYWN0aW9uKCgpID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy52aXJ0dWFsU2Nyb2xsLmdldFZpZXdwb3J0Tm9kZXModGhpcy5ub2RlcykubWFwKG4gPT4gbi5pbmRleCk7XHJcbiAgICAgIH0sIChub2RlSW5kZXhlcykgPT4ge1xyXG4gICAgICAgICAgdGhpcy52aWV3cG9ydE5vZGVzID0gbm9kZUluZGV4ZXMubWFwKChpKSA9PiB0aGlzLm5vZGVzW2ldKTtcclxuICAgICAgICB9LCB7IGNvbXBhcmVTdHJ1Y3R1cmFsOiB0cnVlLCBmaXJlSW1tZWRpYXRlbHk6IHRydWUgfSBhcyBhbnlcclxuICAgICAgKSxcclxuICAgICAgcmVhY3Rpb24oKCkgPT4gdGhpcy5ub2RlcywgKG5vZGVzKSA9PiB7XHJcbiAgICAgICAgdGhpcy52aWV3cG9ydE5vZGVzID0gdGhpcy52aXJ0dWFsU2Nyb2xsLmdldFZpZXdwb3J0Tm9kZXMobm9kZXMpO1xyXG4gICAgICB9KVxyXG4gICAgXTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5fZGlzcG9zZS5mb3JFYWNoKGQgPT4gZCgpKTtcclxuICB9XHJcblxyXG4gIHRyYWNrTm9kZShpbmRleCwgbm9kZSkge1xyXG4gICAgcmV0dXJuIG5vZGUuaWQ7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=