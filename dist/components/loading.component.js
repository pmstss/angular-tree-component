var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, TemplateRef, ViewEncapsulation } from '@angular/core';
import { TreeNode } from '../models/tree-node.model';
var LoadingComponent = /** @class */ (function () {
    function LoadingComponent() {
    }
    __decorate([
        Input(),
        __metadata("design:type", TemplateRef)
    ], LoadingComponent.prototype, "template", void 0);
    __decorate([
        Input(),
        __metadata("design:type", TreeNode)
    ], LoadingComponent.prototype, "node", void 0);
    LoadingComponent = __decorate([
        Component({
            encapsulation: ViewEncapsulation.None,
            selector: 'tree-loading-component',
            template: "\n    <span *ngIf=\"!template\">loading...</span>\n    <ng-container\n      [ngTemplateOutlet]=\"template\"\n      [ngTemplateOutletContext]=\"{ $implicit: node }\">\n    </ng-container>\n  ",
        })
    ], LoadingComponent);
    return LoadingComponent;
}());
export { LoadingComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9saWIvY29tcG9uZW50cy9sb2FkaW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakYsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBYXJEO0lBQUE7SUFHQSxDQUFDO0lBRlU7UUFBUixLQUFLLEVBQUU7a0NBQVcsV0FBVztzREFBTTtJQUMzQjtRQUFSLEtBQUssRUFBRTtrQ0FBTyxRQUFRO2tEQUFDO0lBRmIsZ0JBQWdCO1FBWDVCLFNBQVMsQ0FBQztZQUNULGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO1lBQ3JDLFFBQVEsRUFBRSx3QkFBd0I7WUFDbEMsUUFBUSxFQUFFLGdNQU1UO1NBQ0YsQ0FBQztPQUNXLGdCQUFnQixDQUc1QjtJQUFELHVCQUFDO0NBQUEsQUFIRCxJQUdDO1NBSFksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVGVtcGxhdGVSZWYsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRyZWVOb2RlIH0gZnJvbSAnLi4vbW9kZWxzL3RyZWUtbm9kZS5tb2RlbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHNlbGVjdG9yOiAndHJlZS1sb2FkaW5nLWNvbXBvbmVudCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxzcGFuICpuZ0lmPVwiIXRlbXBsYXRlXCI+bG9hZGluZy4uLjwvc3Bhbj5cclxuICAgIDxuZy1jb250YWluZXJcclxuICAgICAgW25nVGVtcGxhdGVPdXRsZXRdPVwidGVtcGxhdGVcIlxyXG4gICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyAkaW1wbGljaXQ6IG5vZGUgfVwiPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgYCxcclxufSlcclxuZXhwb3J0IGNsYXNzIExvYWRpbmdDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gIEBJbnB1dCgpIG5vZGU6IFRyZWVOb2RlO1xyXG59XHJcbiJdfQ==