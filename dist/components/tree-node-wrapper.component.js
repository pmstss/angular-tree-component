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
import { TreeNode } from '../models/tree-node.model';
var TreeNodeWrapperComponent = /** @class */ (function () {
    function TreeNodeWrapperComponent() {
    }
    __decorate([
        Input(),
        __metadata("design:type", TreeNode)
    ], TreeNodeWrapperComponent.prototype, "node", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], TreeNodeWrapperComponent.prototype, "index", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], TreeNodeWrapperComponent.prototype, "templates", void 0);
    TreeNodeWrapperComponent = __decorate([
        Component({
            selector: 'tree-node-wrapper',
            encapsulation: ViewEncapsulation.None,
            styles: [],
            template: "\n      <div *ngIf=\"!templates.treeNodeWrapperTemplate\" class=\"node-wrapper\" [style.padding-left]=\"node.getNodePadding()\">\n          <tree-node-checkbox *ngIf=\"node.options.useCheckbox\" [node]=\"node\"></tree-node-checkbox>\n          <tree-node-expander [node]=\"node\"></tree-node-expander>\n          <div class=\"node-content-wrapper\"\n               [class.node-content-wrapper-active]=\"node.isActive\"\n               [class.node-content-wrapper-focused]=\"node.isFocused\"\n               (click)=\"node.mouseAction('click', $event)\"\n               (dblclick)=\"node.mouseAction('dblClick', $event)\"\n               (mouseover)=\"node.mouseAction('mouseOver', $event)\"\n               (mouseout)=\"node.mouseAction('mouseOut', $event)\"\n               (contextmenu)=\"node.mouseAction('contextMenu', $event)\"\n               (treeDrop)=\"node.onDrop($event)\"\n               (treeDropDragOver)=\"node.mouseAction('dragOver', $event)\"\n               (treeDropDragLeave)=\"node.mouseAction('dragLeave', $event)\"\n               (treeDropDragEnter)=\"node.mouseAction('dragEnter', $event)\"\n               [treeAllowDrop]=\"node.allowDrop\"\n               [allowDragoverStyling]=\"node.allowDragoverStyling()\"\n               [treeDrag]=\"node\"\n               [treeDragEnabled]=\"node.allowDrag()\">\n\n              <tree-node-content [node]=\"node\" [index]=\"index\" [template]=\"templates.treeNodeTemplate\">\n              </tree-node-content>\n          </div>\n      </div>\n      <ng-container\n              [ngTemplateOutlet]=\"templates.treeNodeWrapperTemplate\"\n              [ngTemplateOutletContext]=\"{ $implicit: node, node: node, index: index, templates: templates }\">\n      </ng-container>\n  "
        }),
        __metadata("design:paramtypes", [])
    ], TreeNodeWrapperComponent);
    return TreeNodeWrapperComponent;
}());
export { TreeNodeWrapperComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1ub2RlLXdyYXBwZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbGliL2NvbXBvbmVudHMvdHJlZS1ub2RlLXdyYXBwZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUcsS0FBSyxFQUFHLGlCQUFpQixFQUFnQixNQUFNLGVBQWUsQ0FBQztBQUNwRixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFzQ3JEO0lBTUU7SUFDQSxDQUFDO0lBTFE7UUFBUixLQUFLLEVBQUU7a0NBQU8sUUFBUTswREFBQztJQUNmO1FBQVIsS0FBSyxFQUFFOzsyREFBZTtJQUNkO1FBQVIsS0FBSyxFQUFFOzsrREFBZ0I7SUFKYix3QkFBd0I7UUFwQ3BDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7WUFDckMsTUFBTSxFQUFFLEVBQUU7WUFDVixRQUFRLEVBQUUsa3REQTZCVDtTQUNGLENBQUM7O09BRVcsd0JBQXdCLENBU3BDO0lBQUQsK0JBQUM7Q0FBQSxBQVRELElBU0M7U0FUWSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgLCBJbnB1dCAsIFZpZXdFbmNhcHN1bGF0aW9uICwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVHJlZU5vZGUgfSBmcm9tICcuLi9tb2RlbHMvdHJlZS1ub2RlLm1vZGVsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndHJlZS1ub2RlLXdyYXBwZXInICxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lICxcclxuICBzdHlsZXM6IFtdICxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgICA8ZGl2ICpuZ0lmPVwiIXRlbXBsYXRlcy50cmVlTm9kZVdyYXBwZXJUZW1wbGF0ZVwiIGNsYXNzPVwibm9kZS13cmFwcGVyXCIgW3N0eWxlLnBhZGRpbmctbGVmdF09XCJub2RlLmdldE5vZGVQYWRkaW5nKClcIj5cclxuICAgICAgICAgIDx0cmVlLW5vZGUtY2hlY2tib3ggKm5nSWY9XCJub2RlLm9wdGlvbnMudXNlQ2hlY2tib3hcIiBbbm9kZV09XCJub2RlXCI+PC90cmVlLW5vZGUtY2hlY2tib3g+XHJcbiAgICAgICAgICA8dHJlZS1ub2RlLWV4cGFuZGVyIFtub2RlXT1cIm5vZGVcIj48L3RyZWUtbm9kZS1leHBhbmRlcj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJub2RlLWNvbnRlbnQtd3JhcHBlclwiXHJcbiAgICAgICAgICAgICAgIFtjbGFzcy5ub2RlLWNvbnRlbnQtd3JhcHBlci1hY3RpdmVdPVwibm9kZS5pc0FjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgIFtjbGFzcy5ub2RlLWNvbnRlbnQtd3JhcHBlci1mb2N1c2VkXT1cIm5vZGUuaXNGb2N1c2VkXCJcclxuICAgICAgICAgICAgICAgKGNsaWNrKT1cIm5vZGUubW91c2VBY3Rpb24oJ2NsaWNrJywgJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgIChkYmxjbGljayk9XCJub2RlLm1vdXNlQWN0aW9uKCdkYmxDbGljaycsICRldmVudClcIlxyXG4gICAgICAgICAgICAgICAobW91c2VvdmVyKT1cIm5vZGUubW91c2VBY3Rpb24oJ21vdXNlT3ZlcicsICRldmVudClcIlxyXG4gICAgICAgICAgICAgICAobW91c2VvdXQpPVwibm9kZS5tb3VzZUFjdGlvbignbW91c2VPdXQnLCAkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgKGNvbnRleHRtZW51KT1cIm5vZGUubW91c2VBY3Rpb24oJ2NvbnRleHRNZW51JywgJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICh0cmVlRHJvcCk9XCJub2RlLm9uRHJvcCgkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgKHRyZWVEcm9wRHJhZ092ZXIpPVwibm9kZS5tb3VzZUFjdGlvbignZHJhZ092ZXInLCAkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgKHRyZWVEcm9wRHJhZ0xlYXZlKT1cIm5vZGUubW91c2VBY3Rpb24oJ2RyYWdMZWF2ZScsICRldmVudClcIlxyXG4gICAgICAgICAgICAgICAodHJlZURyb3BEcmFnRW50ZXIpPVwibm9kZS5tb3VzZUFjdGlvbignZHJhZ0VudGVyJywgJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgIFt0cmVlQWxsb3dEcm9wXT1cIm5vZGUuYWxsb3dEcm9wXCJcclxuICAgICAgICAgICAgICAgW2FsbG93RHJhZ292ZXJTdHlsaW5nXT1cIm5vZGUuYWxsb3dEcmFnb3ZlclN0eWxpbmcoKVwiXHJcbiAgICAgICAgICAgICAgIFt0cmVlRHJhZ109XCJub2RlXCJcclxuICAgICAgICAgICAgICAgW3RyZWVEcmFnRW5hYmxlZF09XCJub2RlLmFsbG93RHJhZygpXCI+XHJcblxyXG4gICAgICAgICAgICAgIDx0cmVlLW5vZGUtY29udGVudCBbbm9kZV09XCJub2RlXCIgW2luZGV4XT1cImluZGV4XCIgW3RlbXBsYXRlXT1cInRlbXBsYXRlcy50cmVlTm9kZVRlbXBsYXRlXCI+XHJcbiAgICAgICAgICAgICAgPC90cmVlLW5vZGUtY29udGVudD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPG5nLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInRlbXBsYXRlcy50cmVlTm9kZVdyYXBwZXJUZW1wbGF0ZVwiXHJcbiAgICAgICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiBub2RlLCBub2RlOiBub2RlLCBpbmRleDogaW5kZXgsIHRlbXBsYXRlczogdGVtcGxhdGVzIH1cIj5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgYFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFRyZWVOb2RlV3JhcHBlckNvbXBvbmVudCB7XHJcblxyXG4gIEBJbnB1dCgpIG5vZGU6IFRyZWVOb2RlO1xyXG4gIEBJbnB1dCgpIGluZGV4OiBudW1iZXI7XHJcbiAgQElucHV0KCkgdGVtcGxhdGVzOiBhbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gIH1cclxuXHJcbn1cclxuIl19