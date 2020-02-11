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
var TreeNodeCheckboxComponent = /** @class */ (function () {
    function TreeNodeCheckboxComponent() {
    }
    __decorate([
        Input(),
        __metadata("design:type", TreeNode)
    ], TreeNodeCheckboxComponent.prototype, "node", void 0);
    TreeNodeCheckboxComponent = __decorate([
        Component({
            selector: 'tree-node-checkbox',
            encapsulation: ViewEncapsulation.None,
            styles: [],
            template: "\n    <ng-container *mobxAutorun=\"{dontDetach: true}\">\n      <input\n        class=\"tree-node-checkbox\"\n        type=\"checkbox\"\n        (click)=\"node.mouseAction('checkboxClick', $event)\"\n        [checked]=\"node.isSelected\"\n        [indeterminate]=\"node.isPartiallySelected\"/>\n    </ng-container>\n  "
        })
    ], TreeNodeCheckboxComponent);
    return TreeNodeCheckboxComponent;
}());
export { TreeNodeCheckboxComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1ub2RlLWNoZWNrYm94LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9jb21wb25lbnRzL3RyZWUtbm9kZS1jaGVja2JveC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBaUJyRDtJQUFBO0lBRUEsQ0FBQztJQURVO1FBQVIsS0FBSyxFQUFFO2tDQUFPLFFBQVE7MkRBQUM7SUFEYix5QkFBeUI7UUFmckMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLG9CQUFvQjtZQUM5QixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtZQUNyQyxNQUFNLEVBQUUsRUFBRTtZQUNWLFFBQVEsRUFBRSxnVUFTVDtTQUNGLENBQUM7T0FDVyx5QkFBeUIsQ0FFckM7SUFBRCxnQ0FBQztDQUFBLEFBRkQsSUFFQztTQUZZLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRyZWVOb2RlIH0gZnJvbSAnLi4vbW9kZWxzL3RyZWUtbm9kZS5tb2RlbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3RyZWUtbm9kZS1jaGVja2JveCcsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBzdHlsZXM6IFtdLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bmctY29udGFpbmVyICptb2J4QXV0b3J1bj1cIntkb250RGV0YWNoOiB0cnVlfVwiPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICBjbGFzcz1cInRyZWUtbm9kZS1jaGVja2JveFwiXHJcbiAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAoY2xpY2spPVwibm9kZS5tb3VzZUFjdGlvbignY2hlY2tib3hDbGljaycsICRldmVudClcIlxyXG4gICAgICAgIFtjaGVja2VkXT1cIm5vZGUuaXNTZWxlY3RlZFwiXHJcbiAgICAgICAgW2luZGV0ZXJtaW5hdGVdPVwibm9kZS5pc1BhcnRpYWxseVNlbGVjdGVkXCIvPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVHJlZU5vZGVDaGVja2JveENvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgbm9kZTogVHJlZU5vZGU7XHJcbn1cclxuIl19