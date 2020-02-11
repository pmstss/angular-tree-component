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
var TreeNodeComponent = /** @class */ (function () {
    function TreeNodeComponent() {
    }
    __decorate([
        Input(),
        __metadata("design:type", TreeNode)
    ], TreeNodeComponent.prototype, "node", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], TreeNodeComponent.prototype, "index", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], TreeNodeComponent.prototype, "templates", void 0);
    TreeNodeComponent = __decorate([
        Component({
            selector: 'TreeNode, tree-node',
            encapsulation: ViewEncapsulation.None,
            styles: [],
            template: "\n    <ng-container *mobxAutorun=\"{dontDetach: true}\">\n      <div\n        *ngIf=\"!templates.treeNodeFullTemplate\"\n        [class]=\"node.getClass()\"\n        [class.tree-node]=\"true\"\n        [class.tree-node-expanded]=\"node.isExpanded && node.hasChildren\"\n        [class.tree-node-collapsed]=\"node.isCollapsed && node.hasChildren\"\n        [class.tree-node-leaf]=\"node.isLeaf\"\n        [class.tree-node-active]=\"node.isActive\"\n        [class.tree-node-focused]=\"node.isFocused\"\n        >\n\n        <tree-node-drop-slot *ngIf=\"index === 0\" [dropIndex]=\"node.index\" [node]=\"node.parent\"></tree-node-drop-slot>\n\n        <tree-node-wrapper [node]=\"node\" [index]=\"index\" [templates]=\"templates\"></tree-node-wrapper>\n\n        <tree-node-children [node]=\"node\" [templates]=\"templates\"></tree-node-children>\n        <tree-node-drop-slot [dropIndex]=\"node.index + 1\" [node]=\"node.parent\"></tree-node-drop-slot>\n      </div>\n      <ng-container\n        [ngTemplateOutlet]=\"templates.treeNodeFullTemplate\"\n        [ngTemplateOutletContext]=\"{ $implicit: node, node: node, index: index, templates: templates }\">\n      </ng-container>\n    </ng-container>"
        })
    ], TreeNodeComponent);
    return TreeNodeComponent;
}());
export { TreeNodeComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1ub2RlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9jb21wb25lbnRzL3RyZWUtbm9kZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQWUsTUFBTSxlQUFlLENBQUM7QUFDakYsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBaUNyRDtJQUFBO0lBSUEsQ0FBQztJQUhVO1FBQVIsS0FBSyxFQUFFO2tDQUFPLFFBQVE7bURBQUM7SUFDZjtRQUFSLEtBQUssRUFBRTs7b0RBQWU7SUFDZDtRQUFSLEtBQUssRUFBRTs7d0RBQWdCO0lBSGIsaUJBQWlCO1FBL0I3QixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUscUJBQXFCO1lBQy9CLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO1lBQ3JDLE1BQU0sRUFBRSxFQUFFO1lBQ1YsUUFBUSxFQUFFLG1yQ0F3QlE7U0FDbkIsQ0FBQztPQUVXLGlCQUFpQixDQUk3QjtJQUFELHdCQUFDO0NBQUEsQUFKRCxJQUlDO1NBSlksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24sIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRyZWVOb2RlIH0gZnJvbSAnLi4vbW9kZWxzL3RyZWUtbm9kZS5tb2RlbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ1RyZWVOb2RlLCB0cmVlLW5vZGUnLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgc3R5bGVzOiBbXSxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG5nLWNvbnRhaW5lciAqbW9ieEF1dG9ydW49XCJ7ZG9udERldGFjaDogdHJ1ZX1cIj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgICpuZ0lmPVwiIXRlbXBsYXRlcy50cmVlTm9kZUZ1bGxUZW1wbGF0ZVwiXHJcbiAgICAgICAgW2NsYXNzXT1cIm5vZGUuZ2V0Q2xhc3MoKVwiXHJcbiAgICAgICAgW2NsYXNzLnRyZWUtbm9kZV09XCJ0cnVlXCJcclxuICAgICAgICBbY2xhc3MudHJlZS1ub2RlLWV4cGFuZGVkXT1cIm5vZGUuaXNFeHBhbmRlZCAmJiBub2RlLmhhc0NoaWxkcmVuXCJcclxuICAgICAgICBbY2xhc3MudHJlZS1ub2RlLWNvbGxhcHNlZF09XCJub2RlLmlzQ29sbGFwc2VkICYmIG5vZGUuaGFzQ2hpbGRyZW5cIlxyXG4gICAgICAgIFtjbGFzcy50cmVlLW5vZGUtbGVhZl09XCJub2RlLmlzTGVhZlwiXHJcbiAgICAgICAgW2NsYXNzLnRyZWUtbm9kZS1hY3RpdmVdPVwibm9kZS5pc0FjdGl2ZVwiXHJcbiAgICAgICAgW2NsYXNzLnRyZWUtbm9kZS1mb2N1c2VkXT1cIm5vZGUuaXNGb2N1c2VkXCJcclxuICAgICAgICA+XHJcblxyXG4gICAgICAgIDx0cmVlLW5vZGUtZHJvcC1zbG90ICpuZ0lmPVwiaW5kZXggPT09IDBcIiBbZHJvcEluZGV4XT1cIm5vZGUuaW5kZXhcIiBbbm9kZV09XCJub2RlLnBhcmVudFwiPjwvdHJlZS1ub2RlLWRyb3Atc2xvdD5cclxuXHJcbiAgICAgICAgPHRyZWUtbm9kZS13cmFwcGVyIFtub2RlXT1cIm5vZGVcIiBbaW5kZXhdPVwiaW5kZXhcIiBbdGVtcGxhdGVzXT1cInRlbXBsYXRlc1wiPjwvdHJlZS1ub2RlLXdyYXBwZXI+XHJcblxyXG4gICAgICAgIDx0cmVlLW5vZGUtY2hpbGRyZW4gW25vZGVdPVwibm9kZVwiIFt0ZW1wbGF0ZXNdPVwidGVtcGxhdGVzXCI+PC90cmVlLW5vZGUtY2hpbGRyZW4+XHJcbiAgICAgICAgPHRyZWUtbm9kZS1kcm9wLXNsb3QgW2Ryb3BJbmRleF09XCJub2RlLmluZGV4ICsgMVwiIFtub2RlXT1cIm5vZGUucGFyZW50XCI+PC90cmVlLW5vZGUtZHJvcC1zbG90PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPG5nLWNvbnRhaW5lclxyXG4gICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInRlbXBsYXRlcy50cmVlTm9kZUZ1bGxUZW1wbGF0ZVwiXHJcbiAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiBub2RlLCBub2RlOiBub2RlLCBpbmRleDogaW5kZXgsIHRlbXBsYXRlczogdGVtcGxhdGVzIH1cIj5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5gXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgVHJlZU5vZGVDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIG5vZGU6IFRyZWVOb2RlO1xyXG4gIEBJbnB1dCgpIGluZGV4OiBudW1iZXI7XHJcbiAgQElucHV0KCkgdGVtcGxhdGVzOiBhbnk7XHJcbn1cclxuIl19