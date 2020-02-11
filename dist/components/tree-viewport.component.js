var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ElementRef, HostListener } from '@angular/core';
import { TreeVirtualScroll } from '../models/tree-virtual-scroll.model';
import { TREE_EVENTS } from '../constants/events';
import throttle from 'lodash/throttle';
var TreeViewportComponent = /** @class */ (function () {
    function TreeViewportComponent(elementRef, virtualScroll) {
        var _this = this;
        this.elementRef = elementRef;
        this.virtualScroll = virtualScroll;
        this.setViewport = throttle(function () {
            _this.virtualScroll.setViewport(_this.elementRef.nativeElement);
        }, 17);
    }
    TreeViewportComponent.prototype.ngOnInit = function () {
        this.virtualScroll.init();
    };
    TreeViewportComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.setViewport();
            _this.virtualScroll.fireEvent({ eventName: TREE_EVENTS.initialized });
        });
    };
    TreeViewportComponent.prototype.ngOnDestroy = function () {
        this.virtualScroll.clear();
    };
    TreeViewportComponent.prototype.getTotalHeight = function () {
        return this.virtualScroll.isEnabled() && this.virtualScroll.totalHeight + 'px' || 'auto';
    };
    TreeViewportComponent.prototype.onScroll = function (event) {
        this.setViewport();
    };
    __decorate([
        HostListener('scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], TreeViewportComponent.prototype, "onScroll", null);
    TreeViewportComponent = __decorate([
        Component({
            selector: 'tree-viewport',
            styles: [],
            providers: [TreeVirtualScroll],
            template: "\n    <ng-container *mobxAutorun=\"{dontDetach: true}\">\n      <div [style.height]=\"getTotalHeight()\">\n        <ng-content></ng-content>\n      </div>\n    </ng-container>\n  "
        }),
        __metadata("design:paramtypes", [ElementRef,
            TreeVirtualScroll])
    ], TreeViewportComponent);
    return TreeViewportComponent;
}());
export { TreeViewportComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS12aWV3cG9ydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9saWIvY29tcG9uZW50cy90cmVlLXZpZXdwb3J0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUFFLFVBQVUsRUFBcUIsWUFBWSxFQUN2RCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFbEQsT0FBTyxRQUFRLE1BQU0saUJBQWlCLENBQUM7QUFjdkM7SUFLRSwrQkFDVSxVQUFzQixFQUN2QixhQUFnQztRQUZ6QyxpQkFHQztRQUZTLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdkIsa0JBQWEsR0FBYixhQUFhLENBQW1CO1FBTnpDLGdCQUFXLEdBQUcsUUFBUSxDQUFDO1lBQ3JCLEtBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDaEUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBS1AsQ0FBQztJQUVELHdDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRCwrQ0FBZSxHQUFmO1FBQUEsaUJBS0M7UUFKQyxVQUFVLENBQUM7WUFDVCxLQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDbkIsS0FBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsRUFBRSxTQUFTLEVBQUUsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFDdkUsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsMkNBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVELDhDQUFjLEdBQWQ7UUFDRSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEdBQUcsSUFBSSxJQUFJLE1BQU0sQ0FBQztJQUMzRixDQUFDO0lBR0Qsd0NBQVEsR0FBUixVQUFTLEtBQVk7UUFDbkIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFGRDtRQURDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7eUNBQ25CLEtBQUs7O3lEQUVwQjtJQWhDVSxxQkFBcUI7UUFaakMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGVBQWU7WUFDekIsTUFBTSxFQUFFLEVBQUU7WUFDVixTQUFTLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztZQUM5QixRQUFRLEVBQUUscUxBTVQ7U0FDRixDQUFDO3lDQU9zQixVQUFVO1lBQ1IsaUJBQWlCO09BUDlCLHFCQUFxQixDQWlDakM7SUFBRCw0QkFBQztDQUFBLEFBakNELElBaUNDO1NBakNZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3RW5jYXBzdWxhdGlvbiwgSG9zdExpc3RlbmVyLCBBZnRlclZpZXdJbml0LCBPbkluaXQsIE9uRGVzdHJveVxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUcmVlVmlydHVhbFNjcm9sbCB9IGZyb20gJy4uL21vZGVscy90cmVlLXZpcnR1YWwtc2Nyb2xsLm1vZGVsJztcclxuaW1wb3J0IHsgVFJFRV9FVkVOVFMgfSBmcm9tICcuLi9jb25zdGFudHMvZXZlbnRzJztcclxuaW1wb3J0IHsgQ2FuY2VsYWJsZSB9IGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB0aHJvdHRsZSBmcm9tICdsb2Rhc2gvdGhyb3R0bGUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd0cmVlLXZpZXdwb3J0JyxcclxuICBzdHlsZXM6IFtdLFxyXG4gIHByb3ZpZGVyczogW1RyZWVWaXJ0dWFsU2Nyb2xsXSxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG5nLWNvbnRhaW5lciAqbW9ieEF1dG9ydW49XCJ7ZG9udERldGFjaDogdHJ1ZX1cIj5cclxuICAgICAgPGRpdiBbc3R5bGUuaGVpZ2h0XT1cImdldFRvdGFsSGVpZ2h0KClcIj5cclxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVHJlZVZpZXdwb3J0Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIHNldFZpZXdwb3J0ID0gdGhyb3R0bGUoKCkgPT4ge1xyXG4gICAgdGhpcy52aXJ0dWFsU2Nyb2xsLnNldFZpZXdwb3J0KHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcclxuICB9LCAxNyk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHVibGljIHZpcnR1YWxTY3JvbGw6IFRyZWVWaXJ0dWFsU2Nyb2xsKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMudmlydHVhbFNjcm9sbC5pbml0KCk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5zZXRWaWV3cG9ydCgpO1xyXG4gICAgICB0aGlzLnZpcnR1YWxTY3JvbGwuZmlyZUV2ZW50KHsgZXZlbnROYW1lOiBUUkVFX0VWRU5UUy5pbml0aWFsaXplZCB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLnZpcnR1YWxTY3JvbGwuY2xlYXIoKTtcclxuICB9XHJcblxyXG4gIGdldFRvdGFsSGVpZ2h0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMudmlydHVhbFNjcm9sbC5pc0VuYWJsZWQoKSAmJiB0aGlzLnZpcnR1YWxTY3JvbGwudG90YWxIZWlnaHQgKyAncHgnIHx8ICdhdXRvJztcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ3Njcm9sbCcsIFsnJGV2ZW50J10pXHJcbiAgb25TY3JvbGwoZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICB0aGlzLnNldFZpZXdwb3J0KCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==