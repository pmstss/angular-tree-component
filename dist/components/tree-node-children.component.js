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
var TreeNodeChildrenComponent = /** @class */ (function () {
    function TreeNodeChildrenComponent() {
    }
    __decorate([
        Input(),
        __metadata("design:type", TreeNode)
    ], TreeNodeChildrenComponent.prototype, "node", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], TreeNodeChildrenComponent.prototype, "templates", void 0);
    TreeNodeChildrenComponent = __decorate([
        Component({
            selector: 'tree-node-children',
            encapsulation: ViewEncapsulation.None,
            styles: [],
            template: "\n    <ng-container *mobxAutorun=\"{dontDetach: true}\">\n      <div [class.tree-children]=\"true\"\n          [class.tree-children-no-padding]=\"node.options.levelPadding\"\n          *treeAnimateOpen=\"\n            node.isExpanded;\n            speed:node.options.animateSpeed;\n            acceleration:node.options.animateAcceleration;\n            enabled:node.options.animateExpand\">\n        <tree-node-collection\n          *ngIf=\"node.children\"\n          [nodes]=\"node.children\"\n          [templates]=\"templates\"\n          [treeModel]=\"node.treeModel\">\n        </tree-node-collection>\n        <tree-loading-component\n          [style.padding-left]=\"node.getNodePadding()\"\n          class=\"tree-node-loading\"\n          *ngIf=\"!node.children\"\n          [template]=\"templates.loadingTemplate\"\n          [node]=\"node\"\n        ></tree-loading-component>\n      </div>\n    </ng-container>\n  "
        })
    ], TreeNodeChildrenComponent);
    return TreeNodeChildrenComponent;
}());
export { TreeNodeChildrenComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1ub2RlLWNoaWxkcmVuLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9jb21wb25lbnRzL3RyZWUtbm9kZS1jaGlsZHJlbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBZ0NyRDtJQUFBO0lBR0EsQ0FBQztJQUZVO1FBQVIsS0FBSyxFQUFFO2tDQUFPLFFBQVE7MkRBQUM7SUFDZjtRQUFSLEtBQUssRUFBRTs7Z0VBQWdCO0lBRmIseUJBQXlCO1FBOUJyQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsb0JBQW9CO1lBQzlCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO1lBQ3JDLE1BQU0sRUFBRSxFQUFFO1lBQ1YsUUFBUSxFQUFFLGk2QkF3QlQ7U0FDRixDQUFDO09BQ1cseUJBQXlCLENBR3JDO0lBQUQsZ0NBQUM7Q0FBQSxBQUhELElBR0M7U0FIWSx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUcmVlTm9kZSB9IGZyb20gJy4uL21vZGVscy90cmVlLW5vZGUubW9kZWwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd0cmVlLW5vZGUtY2hpbGRyZW4nLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgc3R5bGVzOiBbXSxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG5nLWNvbnRhaW5lciAqbW9ieEF1dG9ydW49XCJ7ZG9udERldGFjaDogdHJ1ZX1cIj5cclxuICAgICAgPGRpdiBbY2xhc3MudHJlZS1jaGlsZHJlbl09XCJ0cnVlXCJcclxuICAgICAgICAgIFtjbGFzcy50cmVlLWNoaWxkcmVuLW5vLXBhZGRpbmddPVwibm9kZS5vcHRpb25zLmxldmVsUGFkZGluZ1wiXHJcbiAgICAgICAgICAqdHJlZUFuaW1hdGVPcGVuPVwiXHJcbiAgICAgICAgICAgIG5vZGUuaXNFeHBhbmRlZDtcclxuICAgICAgICAgICAgc3BlZWQ6bm9kZS5vcHRpb25zLmFuaW1hdGVTcGVlZDtcclxuICAgICAgICAgICAgYWNjZWxlcmF0aW9uOm5vZGUub3B0aW9ucy5hbmltYXRlQWNjZWxlcmF0aW9uO1xyXG4gICAgICAgICAgICBlbmFibGVkOm5vZGUub3B0aW9ucy5hbmltYXRlRXhwYW5kXCI+XHJcbiAgICAgICAgPHRyZWUtbm9kZS1jb2xsZWN0aW9uXHJcbiAgICAgICAgICAqbmdJZj1cIm5vZGUuY2hpbGRyZW5cIlxyXG4gICAgICAgICAgW25vZGVzXT1cIm5vZGUuY2hpbGRyZW5cIlxyXG4gICAgICAgICAgW3RlbXBsYXRlc109XCJ0ZW1wbGF0ZXNcIlxyXG4gICAgICAgICAgW3RyZWVNb2RlbF09XCJub2RlLnRyZWVNb2RlbFwiPlxyXG4gICAgICAgIDwvdHJlZS1ub2RlLWNvbGxlY3Rpb24+XHJcbiAgICAgICAgPHRyZWUtbG9hZGluZy1jb21wb25lbnRcclxuICAgICAgICAgIFtzdHlsZS5wYWRkaW5nLWxlZnRdPVwibm9kZS5nZXROb2RlUGFkZGluZygpXCJcclxuICAgICAgICAgIGNsYXNzPVwidHJlZS1ub2RlLWxvYWRpbmdcIlxyXG4gICAgICAgICAgKm5nSWY9XCIhbm9kZS5jaGlsZHJlblwiXHJcbiAgICAgICAgICBbdGVtcGxhdGVdPVwidGVtcGxhdGVzLmxvYWRpbmdUZW1wbGF0ZVwiXHJcbiAgICAgICAgICBbbm9kZV09XCJub2RlXCJcclxuICAgICAgICA+PC90cmVlLWxvYWRpbmctY29tcG9uZW50PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIFRyZWVOb2RlQ2hpbGRyZW5Db21wb25lbnQge1xyXG4gIEBJbnB1dCgpIG5vZGU6IFRyZWVOb2RlO1xyXG4gIEBJbnB1dCgpIHRlbXBsYXRlczogYW55O1xyXG59XHJcbiJdfQ==