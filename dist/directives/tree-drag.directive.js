var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, ElementRef, HostListener, Input, NgZone, Renderer2 } from '@angular/core';
import { TreeDraggedElement } from '../models/tree-dragged-element.model';
var DRAG_OVER_CLASS = 'is-dragging-over';
var TreeDragDirective = /** @class */ (function () {
    function TreeDragDirective(el, renderer, treeDraggedElement, ngZone) {
        this.el = el;
        this.renderer = renderer;
        this.treeDraggedElement = treeDraggedElement;
        this.ngZone = ngZone;
        this.dragEventHandler = this.onDrag.bind(this);
    }
    TreeDragDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        var el = this.el.nativeElement;
        this.ngZone.runOutsideAngular(function () {
            el.addEventListener('drag', _this.dragEventHandler);
        });
    };
    TreeDragDirective.prototype.ngDoCheck = function () {
        this.renderer.setAttribute(this.el.nativeElement, 'draggable', this.treeDragEnabled ? 'true' : 'false');
    };
    TreeDragDirective.prototype.ngOnDestroy = function () {
        var el = this.el.nativeElement;
        el.removeEventListener('drag', this.dragEventHandler);
    };
    TreeDragDirective.prototype.onDragStart = function (ev) {
        // setting the data is required by firefox
        ev.dataTransfer.setData('text', ev.target.id);
        this.treeDraggedElement.set(this.draggedElement);
        if (this.draggedElement.mouseAction) {
            this.draggedElement.mouseAction('dragStart', ev);
        }
    };
    TreeDragDirective.prototype.onDrag = function (ev) {
        if (this.draggedElement.mouseAction) {
            this.draggedElement.mouseAction('drag', ev);
        }
    };
    TreeDragDirective.prototype.onDragEnd = function () {
        if (this.draggedElement.mouseAction) {
            this.draggedElement.mouseAction('dragEnd');
        }
        this.treeDraggedElement.set(null);
    };
    __decorate([
        Input('treeDrag'),
        __metadata("design:type", Object)
    ], TreeDragDirective.prototype, "draggedElement", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], TreeDragDirective.prototype, "treeDragEnabled", void 0);
    __decorate([
        HostListener('dragstart', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], TreeDragDirective.prototype, "onDragStart", null);
    __decorate([
        HostListener('dragend'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TreeDragDirective.prototype, "onDragEnd", null);
    TreeDragDirective = __decorate([
        Directive({
            selector: '[treeDrag]'
        }),
        __metadata("design:paramtypes", [ElementRef, Renderer2, TreeDraggedElement, NgZone])
    ], TreeDragDirective);
    return TreeDragDirective;
}());
export { TreeDragDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1kcmFnLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9kaXJlY3RpdmVzL3RyZWUtZHJhZy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFpQixTQUFTLEVBQVcsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFhLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqSSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUUxRSxJQUFNLGVBQWUsR0FBRyxrQkFBa0IsQ0FBQztBQUszQztJQUtFLDJCQUFvQixFQUFjLEVBQVUsUUFBbUIsRUFBVSxrQkFBc0MsRUFBVSxNQUFjO1FBQW5ILE9BQUUsR0FBRixFQUFFLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQVUsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDckksSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCwyQ0FBZSxHQUFmO1FBQUEsaUJBS0M7UUFKQyxJQUFJLEVBQUUsR0FBZ0IsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUM7UUFDNUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQztZQUM1QixFQUFFLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3JELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHFDQUFTLEdBQVQ7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMxRyxDQUFDO0lBRUQsdUNBQVcsR0FBWDtRQUNFLElBQUksRUFBRSxHQUFnQixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQztRQUM1QyxFQUFFLENBQUMsbUJBQW1CLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFc0MsdUNBQVcsR0FBWCxVQUFZLEVBQUU7UUFDbkQsMENBQTBDO1FBQzFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ2pELElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUU7WUFDbkMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQ2xEO0lBQ0gsQ0FBQztJQUVELGtDQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ1AsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRTtZQUNuQyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDN0M7SUFDSCxDQUFDO0lBRXdCLHFDQUFTLEdBQVQ7UUFDdkIsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRTtZQUNuQyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUM1QztRQUNELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQTVDa0I7UUFBbEIsS0FBSyxDQUFDLFVBQVUsQ0FBQzs7NkRBQWdCO0lBQ3pCO1FBQVIsS0FBSyxFQUFFOzs4REFBaUI7SUF1QmM7UUFBdEMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDOzs7O3dEQU9yQztJQVF3QjtRQUF4QixZQUFZLENBQUMsU0FBUyxDQUFDOzs7O3NEQUt2QjtJQTdDVSxpQkFBaUI7UUFIN0IsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFlBQVk7U0FDdkIsQ0FBQzt5Q0FNd0IsVUFBVSxFQUFvQixTQUFTLEVBQThCLGtCQUFrQixFQUFrQixNQUFNO09BTDVILGlCQUFpQixDQThDN0I7SUFBRCx3QkFBQztDQUFBLEFBOUNELElBOENDO1NBOUNZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIERpcmVjdGl2ZSwgRG9DaGVjaywgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBJbnB1dCwgTmdab25lLCBPbkRlc3Ryb3ksIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUcmVlRHJhZ2dlZEVsZW1lbnQgfSBmcm9tICcuLi9tb2RlbHMvdHJlZS1kcmFnZ2VkLWVsZW1lbnQubW9kZWwnO1xyXG5cclxuY29uc3QgRFJBR19PVkVSX0NMQVNTID0gJ2lzLWRyYWdnaW5nLW92ZXInO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbdHJlZURyYWddJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVHJlZURyYWdEaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBEb0NoZWNrLCBPbkRlc3Ryb3kge1xyXG4gIEBJbnB1dCgndHJlZURyYWcnKSBkcmFnZ2VkRWxlbWVudDtcclxuICBASW5wdXQoKSB0cmVlRHJhZ0VuYWJsZWQ7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBkcmFnRXZlbnRIYW5kbGVyOiAoZXY6IERyYWdFdmVudCkgPT4gdm9pZDtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIHRyZWVEcmFnZ2VkRWxlbWVudDogVHJlZURyYWdnZWRFbGVtZW50LCBwcml2YXRlIG5nWm9uZTogTmdab25lKSB7XHJcbiAgICB0aGlzLmRyYWdFdmVudEhhbmRsZXIgPSB0aGlzLm9uRHJhZy5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgbGV0IGVsOiBIVE1MRWxlbWVudCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudDtcclxuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcclxuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignZHJhZycsIHRoaXMuZHJhZ0V2ZW50SGFuZGxlcik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nRG9DaGVjaygpIHtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ2RyYWdnYWJsZScsIHRoaXMudHJlZURyYWdFbmFibGVkID8gJ3RydWUnIDogJ2ZhbHNlJyk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIGxldCBlbDogSFRNTEVsZW1lbnQgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnJywgdGhpcy5kcmFnRXZlbnRIYW5kbGVyKTtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2RyYWdzdGFydCcsIFsnJGV2ZW50J10pIG9uRHJhZ1N0YXJ0KGV2KSB7XHJcbiAgICAvLyBzZXR0aW5nIHRoZSBkYXRhIGlzIHJlcXVpcmVkIGJ5IGZpcmVmb3hcclxuICAgIGV2LmRhdGFUcmFuc2Zlci5zZXREYXRhKCd0ZXh0JywgZXYudGFyZ2V0LmlkKTtcclxuICAgIHRoaXMudHJlZURyYWdnZWRFbGVtZW50LnNldCh0aGlzLmRyYWdnZWRFbGVtZW50KTtcclxuICAgIGlmICh0aGlzLmRyYWdnZWRFbGVtZW50Lm1vdXNlQWN0aW9uKSB7XHJcbiAgICAgIHRoaXMuZHJhZ2dlZEVsZW1lbnQubW91c2VBY3Rpb24oJ2RyYWdTdGFydCcsIGV2KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uRHJhZyhldikge1xyXG4gICAgaWYgKHRoaXMuZHJhZ2dlZEVsZW1lbnQubW91c2VBY3Rpb24pIHtcclxuICAgICAgdGhpcy5kcmFnZ2VkRWxlbWVudC5tb3VzZUFjdGlvbignZHJhZycsIGV2KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2RyYWdlbmQnKSBvbkRyYWdFbmQoKSB7XHJcbiAgICBpZiAodGhpcy5kcmFnZ2VkRWxlbWVudC5tb3VzZUFjdGlvbikge1xyXG4gICAgICB0aGlzLmRyYWdnZWRFbGVtZW50Lm1vdXNlQWN0aW9uKCdkcmFnRW5kJyk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnRyZWVEcmFnZ2VkRWxlbWVudC5zZXQobnVsbCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==