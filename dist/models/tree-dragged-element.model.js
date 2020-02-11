var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
var TreeDraggedElement = /** @class */ (function () {
    function TreeDraggedElement() {
        this._draggedElement = null;
    }
    TreeDraggedElement.prototype.set = function (draggedElement) {
        this._draggedElement = draggedElement;
    };
    TreeDraggedElement.prototype.get = function () {
        return this._draggedElement;
    };
    TreeDraggedElement.prototype.isDragging = function () {
        return !!this.get();
    };
    TreeDraggedElement = __decorate([
        Injectable()
    ], TreeDraggedElement);
    return TreeDraggedElement;
}());
export { TreeDraggedElement };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1kcmFnZ2VkLWVsZW1lbnQubW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9saWIvbW9kZWxzL3RyZWUtZHJhZ2dlZC1lbGVtZW50Lm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0M7SUFEQTtRQUVFLG9CQUFlLEdBQVEsSUFBSSxDQUFDO0lBYTlCLENBQUM7SUFYQyxnQ0FBRyxHQUFILFVBQUksY0FBbUI7UUFDckIsSUFBSSxDQUFDLGVBQWUsR0FBRyxjQUFjLENBQUM7SUFDeEMsQ0FBQztJQUVELGdDQUFHLEdBQUg7UUFDRSxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDOUIsQ0FBQztJQUVELHVDQUFVLEdBQVY7UUFDRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQWJVLGtCQUFrQjtRQUQ5QixVQUFVLEVBQUU7T0FDQSxrQkFBa0IsQ0FjOUI7SUFBRCx5QkFBQztDQUFBLEFBZEQsSUFjQztTQWRZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFRyZWVEcmFnZ2VkRWxlbWVudCB7XHJcbiAgX2RyYWdnZWRFbGVtZW50OiBhbnkgPSBudWxsO1xyXG5cclxuICBzZXQoZHJhZ2dlZEVsZW1lbnQ6IGFueSkge1xyXG4gICAgdGhpcy5fZHJhZ2dlZEVsZW1lbnQgPSBkcmFnZ2VkRWxlbWVudDtcclxuICB9XHJcblxyXG4gIGdldCgpOiBhbnkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RyYWdnZWRFbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgaXNEcmFnZ2luZygpIHtcclxuICAgIHJldHVybiAhIXRoaXMuZ2V0KCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==