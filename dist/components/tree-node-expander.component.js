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
var TreeNodeExpanderComponent = /** @class */ (function () {
    function TreeNodeExpanderComponent() {
    }
    __decorate([
        Input(),
        __metadata("design:type", TreeNode)
    ], TreeNodeExpanderComponent.prototype, "node", void 0);
    TreeNodeExpanderComponent = __decorate([
        Component({
            selector: 'tree-node-expander',
            encapsulation: ViewEncapsulation.None,
            styles: [],
            template: "\n    <ng-container *mobxAutorun=\"{dontDetach: true}\">\n      <span\n        *ngIf=\"node.hasChildren\"\n        [class.toggle-children-wrapper-expanded]=\"node.isExpanded\"\n        [class.toggle-children-wrapper-collapsed]=\"node.isCollapsed\"\n        class=\"toggle-children-wrapper\"\n        (click)=\"node.mouseAction('expanderClick', $event)\">\n\n        <span class=\"toggle-children\"></span>\n      </span>\n      <span\n        *ngIf=\"!node.hasChildren\"\n        class=\"toggle-children-placeholder\">\n      </span>\n    </ng-container>\n  "
        })
    ], TreeNodeExpanderComponent);
    return TreeNodeExpanderComponent;
}());
export { TreeNodeExpanderComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1ub2RlLWV4cGFuZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9jb21wb25lbnRzL3RyZWUtbm9kZS1leHBhbmRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBd0JyRDtJQUFBO0lBRUEsQ0FBQztJQURVO1FBQVIsS0FBSyxFQUFFO2tDQUFPLFFBQVE7MkRBQUM7SUFEYix5QkFBeUI7UUF0QnJDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7WUFDckMsTUFBTSxFQUFFLEVBQUU7WUFDVixRQUFRLEVBQUUsZ2pCQWdCVDtTQUNGLENBQUM7T0FDVyx5QkFBeUIsQ0FFckM7SUFBRCxnQ0FBQztDQUFBLEFBRkQsSUFFQztTQUZZLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRyZWVOb2RlIH0gZnJvbSAnLi4vbW9kZWxzL3RyZWUtbm9kZS5tb2RlbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3RyZWUtbm9kZS1leHBhbmRlcicsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBzdHlsZXM6IFtdLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bmctY29udGFpbmVyICptb2J4QXV0b3J1bj1cIntkb250RGV0YWNoOiB0cnVlfVwiPlxyXG4gICAgICA8c3BhblxyXG4gICAgICAgICpuZ0lmPVwibm9kZS5oYXNDaGlsZHJlblwiXHJcbiAgICAgICAgW2NsYXNzLnRvZ2dsZS1jaGlsZHJlbi13cmFwcGVyLWV4cGFuZGVkXT1cIm5vZGUuaXNFeHBhbmRlZFwiXHJcbiAgICAgICAgW2NsYXNzLnRvZ2dsZS1jaGlsZHJlbi13cmFwcGVyLWNvbGxhcHNlZF09XCJub2RlLmlzQ29sbGFwc2VkXCJcclxuICAgICAgICBjbGFzcz1cInRvZ2dsZS1jaGlsZHJlbi13cmFwcGVyXCJcclxuICAgICAgICAoY2xpY2spPVwibm9kZS5tb3VzZUFjdGlvbignZXhwYW5kZXJDbGljaycsICRldmVudClcIj5cclxuXHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJ0b2dnbGUtY2hpbGRyZW5cIj48L3NwYW4+XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgICAgPHNwYW5cclxuICAgICAgICAqbmdJZj1cIiFub2RlLmhhc0NoaWxkcmVuXCJcclxuICAgICAgICBjbGFzcz1cInRvZ2dsZS1jaGlsZHJlbi1wbGFjZWhvbGRlclwiPlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUcmVlTm9kZUV4cGFuZGVyQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBub2RlOiBUcmVlTm9kZTtcclxufVxyXG4iXX0=