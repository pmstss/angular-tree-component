var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ViewEncapsulation, TemplateRef } from '@angular/core';
import { TreeNode } from '../models/tree-node.model';
var TreeNodeContent = /** @class */ (function () {
    function TreeNodeContent() {
    }
    __decorate([
        Input(),
        __metadata("design:type", TreeNode)
    ], TreeNodeContent.prototype, "node", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], TreeNodeContent.prototype, "index", void 0);
    __decorate([
        Input(),
        __metadata("design:type", TemplateRef)
    ], TreeNodeContent.prototype, "template", void 0);
    TreeNodeContent = __decorate([
        Component({
            selector: 'tree-node-content',
            encapsulation: ViewEncapsulation.None,
            template: "\n  <span *ngIf=\"!template\">{{ node.displayField }}</span>\n  <ng-container\n    [ngTemplateOutlet]=\"template\"\n    [ngTemplateOutletContext]=\"{ $implicit: node, node: node, index: index }\">\n  </ng-container>",
        })
    ], TreeNodeContent);
    return TreeNodeContent;
}());
export { TreeNodeContent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1ub2RlLWNvbnRlbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbGliL2NvbXBvbmVudHMvdHJlZS1ub2RlLWNvbnRlbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFZckQ7SUFBQTtJQUlBLENBQUM7SUFIVTtRQUFSLEtBQUssRUFBRTtrQ0FBTyxRQUFRO2lEQUFDO0lBQ2Y7UUFBUixLQUFLLEVBQUU7O2tEQUFlO0lBQ2Q7UUFBUixLQUFLLEVBQUU7a0NBQVcsV0FBVztxREFBTTtJQUh6QixlQUFlO1FBVjNCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7WUFDckMsUUFBUSxFQUFFLHlOQUtNO1NBQ2pCLENBQUM7T0FDVyxlQUFlLENBSTNCO0lBQUQsc0JBQUM7Q0FBQSxBQUpELElBSUM7U0FKWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24sIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRyZWVOb2RlIH0gZnJvbSAnLi4vbW9kZWxzL3RyZWUtbm9kZS5tb2RlbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3RyZWUtbm9kZS1jb250ZW50JyxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgPHNwYW4gKm5nSWY9XCIhdGVtcGxhdGVcIj57eyBub2RlLmRpc3BsYXlGaWVsZCB9fTwvc3Bhbj5cclxuICA8bmctY29udGFpbmVyXHJcbiAgICBbbmdUZW1wbGF0ZU91dGxldF09XCJ0ZW1wbGF0ZVwiXHJcbiAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyAkaW1wbGljaXQ6IG5vZGUsIG5vZGU6IG5vZGUsIGluZGV4OiBpbmRleCB9XCI+XHJcbiAgPC9uZy1jb250YWluZXI+YCxcclxufSlcclxuZXhwb3J0IGNsYXNzIFRyZWVOb2RlQ29udGVudCB7XHJcbiAgQElucHV0KCkgbm9kZTogVHJlZU5vZGU7XHJcbiAgQElucHV0KCkgaW5kZXg6IG51bWJlcjtcclxuICBASW5wdXQoKSB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcclxufVxyXG4iXX0=