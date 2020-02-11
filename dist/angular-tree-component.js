var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobxAngularModule } from 'mobx-angular';
import { TREE_ACTIONS } from './models/tree-options.model';
import { KEYS } from './constants/keys';
import { TreeModel } from './models/tree.model';
import { TreeNode } from './models/tree-node.model';
import { TreeDraggedElement } from './models/tree-dragged-element.model';
import { TreeVirtualScroll } from './models/tree-virtual-scroll.model';
import { LoadingComponent } from './components/loading.component';
import { TreeComponent } from './components/tree.component';
import { TreeNodeComponent } from './components/tree-node.component';
import { TreeNodeContent } from './components/tree-node-content.component';
import { TreeNodeDropSlot } from './components/tree-node-drop-slot.component';
import { TreeNodeExpanderComponent } from './components/tree-node-expander.component';
import { TreeNodeChildrenComponent } from './components/tree-node-children.component';
import { TreeNodeCollectionComponent } from './components/tree-node-collection.component';
import { TreeNodeWrapperComponent } from './components/tree-node-wrapper.component';
import { TreeViewportComponent } from './components/tree-viewport.component';
import { TreeNodeCheckboxComponent } from './components/tree-node-checkbox.component';
import { TreeDropDirective } from './directives/tree-drop.directive';
import { TreeDragDirective } from './directives/tree-drag.directive';
import { TreeAnimateOpenDirective } from './directives/tree-animate-open.directive';
import './polyfills';
var TreeModule = /** @class */ (function () {
    function TreeModule() {
    }
    TreeModule_1 = TreeModule;
    TreeModule.forRoot = function () {
        return {
            ngModule: TreeModule_1,
            providers: [TreeDraggedElement]
        };
    };
    var TreeModule_1;
    TreeModule = TreeModule_1 = __decorate([
        NgModule({
            declarations: [
                TreeComponent,
                TreeNodeComponent,
                TreeNodeContent,
                LoadingComponent,
                TreeDropDirective,
                TreeDragDirective,
                TreeNodeExpanderComponent,
                TreeNodeChildrenComponent,
                TreeNodeDropSlot,
                TreeNodeCollectionComponent,
                TreeViewportComponent,
                TreeNodeWrapperComponent,
                TreeNodeCheckboxComponent,
                TreeAnimateOpenDirective
            ],
            exports: [
                TreeComponent,
                TreeNodeComponent,
                TreeNodeContent,
                LoadingComponent,
                TreeDropDirective,
                TreeDragDirective,
                TreeNodeExpanderComponent,
                TreeNodeChildrenComponent,
                TreeNodeDropSlot,
                TreeNodeCollectionComponent,
                TreeViewportComponent,
                TreeNodeWrapperComponent,
                TreeNodeCheckboxComponent,
                TreeAnimateOpenDirective
            ],
            imports: [
                CommonModule,
                MobxAngularModule
            ],
            providers: []
        })
    ], TreeModule);
    return TreeModule;
}());
export { TreeModule };
export { TreeModel, TreeNode, TreeDraggedElement, TreeVirtualScroll, TREE_ACTIONS, KEYS, LoadingComponent, TreeAnimateOpenDirective, TreeComponent, TreeNodeComponent, TreeNodeWrapperComponent, TreeNodeContent, TreeDropDirective, TreeDragDirective, TreeNodeExpanderComponent, TreeNodeChildrenComponent, TreeNodeDropSlot, TreeNodeCollectionComponent, TreeViewportComponent, TreeNodeCheckboxComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci10cmVlLWNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2xpYi9hbmd1bGFyLXRyZWUtY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFFakQsT0FBTyxFQUFrQyxZQUFZLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUUzRixPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDeEMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUN6RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNsRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDckUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQzlFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQzFGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBRXBGLE9BQU8sYUFBYSxDQUFDO0FBeUNyQjtJQUFBO0lBT0EsQ0FBQzttQkFQWSxVQUFVO0lBQ2Qsa0JBQU8sR0FBZDtRQUNFLE9BQU87WUFDTCxRQUFRLEVBQUUsWUFBVTtZQUNwQixTQUFTLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztTQUNoQyxDQUFDO0lBQ0osQ0FBQzs7SUFOVSxVQUFVO1FBdkN0QixRQUFRLENBQUM7WUFDUixZQUFZLEVBQUU7Z0JBQ1osYUFBYTtnQkFDYixpQkFBaUI7Z0JBQ2pCLGVBQWU7Z0JBQ2YsZ0JBQWdCO2dCQUNoQixpQkFBaUI7Z0JBQ2pCLGlCQUFpQjtnQkFDakIseUJBQXlCO2dCQUN6Qix5QkFBeUI7Z0JBQ3pCLGdCQUFnQjtnQkFDaEIsMkJBQTJCO2dCQUMzQixxQkFBcUI7Z0JBQ3JCLHdCQUF3QjtnQkFDeEIseUJBQXlCO2dCQUN6Qix3QkFBd0I7YUFDekI7WUFDRCxPQUFPLEVBQUU7Z0JBQ1AsYUFBYTtnQkFDYixpQkFBaUI7Z0JBQ2pCLGVBQWU7Z0JBQ2YsZ0JBQWdCO2dCQUNoQixpQkFBaUI7Z0JBQ2pCLGlCQUFpQjtnQkFDakIseUJBQXlCO2dCQUN6Qix5QkFBeUI7Z0JBQ3pCLGdCQUFnQjtnQkFDaEIsMkJBQTJCO2dCQUMzQixxQkFBcUI7Z0JBQ3JCLHdCQUF3QjtnQkFDeEIseUJBQXlCO2dCQUN6Qix3QkFBd0I7YUFDekI7WUFDRCxPQUFPLEVBQUU7Z0JBQ1AsWUFBWTtnQkFDWixpQkFBaUI7YUFDbEI7WUFDRCxTQUFTLEVBQUUsRUFBRTtTQUNkLENBQUM7T0FDVyxVQUFVLENBT3RCO0lBQUQsaUJBQUM7Q0FBQSxBQVBELElBT0M7U0FQWSxVQUFVO0FBU3ZCLE9BQU8sRUFDTCxTQUFTLEVBQ1QsUUFBUSxFQUNSLGtCQUFrQixFQUNsQixpQkFBaUIsRUFFakIsWUFBWSxFQUNaLElBQUksRUFLSixnQkFBZ0IsRUFDaEIsd0JBQXdCLEVBQ3hCLGFBQWEsRUFDYixpQkFBaUIsRUFDakIsd0JBQXdCLEVBQ3hCLGVBQWUsRUFDZixpQkFBaUIsRUFDakIsaUJBQWlCLEVBQ2pCLHlCQUF5QixFQUN6Qix5QkFBeUIsRUFDekIsZ0JBQWdCLEVBQ2hCLDJCQUEyQixFQUMzQixxQkFBcUIsRUFDckIseUJBQXlCLEVBRTFCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBNb2J4QW5ndWxhck1vZHVsZSB9IGZyb20gJ21vYngtYW5ndWxhcic7XHJcblxyXG5pbXBvcnQgeyBJQWN0aW9uSGFuZGxlciwgSUFjdGlvbk1hcHBpbmcsIFRSRUVfQUNUSU9OUyB9IGZyb20gJy4vbW9kZWxzL3RyZWUtb3B0aW9ucy5tb2RlbCc7XHJcbmltcG9ydCB7IElBbGxvd0RyYWdGbiwgSUFsbG93RHJvcEZuLCBJVHJlZU9wdGlvbnMsIElUcmVlU3RhdGUgfSBmcm9tICcuL2RlZnMvYXBpJztcclxuaW1wb3J0IHsgS0VZUyB9IGZyb20gJy4vY29uc3RhbnRzL2tleXMnO1xyXG5pbXBvcnQgeyBUcmVlTW9kZWwgfSBmcm9tICcuL21vZGVscy90cmVlLm1vZGVsJztcclxuaW1wb3J0IHsgVHJlZU5vZGUgfSBmcm9tICcuL21vZGVscy90cmVlLW5vZGUubW9kZWwnO1xyXG5pbXBvcnQgeyBUcmVlRHJhZ2dlZEVsZW1lbnQgfSBmcm9tICcuL21vZGVscy90cmVlLWRyYWdnZWQtZWxlbWVudC5tb2RlbCc7XHJcbmltcG9ydCB7IFRyZWVWaXJ0dWFsU2Nyb2xsIH0gZnJvbSAnLi9tb2RlbHMvdHJlZS12aXJ0dWFsLXNjcm9sbC5tb2RlbCc7XHJcbmltcG9ydCB7IExvYWRpbmdDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbG9hZGluZy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUcmVlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RyZWUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVHJlZU5vZGVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdHJlZS1ub2RlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRyZWVOb2RlQ29udGVudCB9IGZyb20gJy4vY29tcG9uZW50cy90cmVlLW5vZGUtY29udGVudC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUcmVlTm9kZURyb3BTbG90IH0gZnJvbSAnLi9jb21wb25lbnRzL3RyZWUtbm9kZS1kcm9wLXNsb3QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVHJlZU5vZGVFeHBhbmRlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90cmVlLW5vZGUtZXhwYW5kZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVHJlZU5vZGVDaGlsZHJlbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90cmVlLW5vZGUtY2hpbGRyZW4uY29tcG9uZW50JztcclxuaW1wb3J0IHsgVHJlZU5vZGVDb2xsZWN0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RyZWUtbm9kZS1jb2xsZWN0aW9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRyZWVOb2RlV3JhcHBlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90cmVlLW5vZGUtd3JhcHBlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUcmVlVmlld3BvcnRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdHJlZS12aWV3cG9ydC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUcmVlTm9kZUNoZWNrYm94Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RyZWUtbm9kZS1jaGVja2JveC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUcmVlRHJvcERpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy90cmVlLWRyb3AuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgVHJlZURyYWdEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvdHJlZS1kcmFnLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IFRyZWVBbmltYXRlT3BlbkRpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy90cmVlLWFuaW1hdGUtb3Blbi5kaXJlY3RpdmUnO1xyXG5cclxuaW1wb3J0ICcuL3BvbHlmaWxscyc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgVHJlZUNvbXBvbmVudCxcclxuICAgIFRyZWVOb2RlQ29tcG9uZW50LFxyXG4gICAgVHJlZU5vZGVDb250ZW50LFxyXG4gICAgTG9hZGluZ0NvbXBvbmVudCxcclxuICAgIFRyZWVEcm9wRGlyZWN0aXZlLFxyXG4gICAgVHJlZURyYWdEaXJlY3RpdmUsXHJcbiAgICBUcmVlTm9kZUV4cGFuZGVyQ29tcG9uZW50LFxyXG4gICAgVHJlZU5vZGVDaGlsZHJlbkNvbXBvbmVudCxcclxuICAgIFRyZWVOb2RlRHJvcFNsb3QsXHJcbiAgICBUcmVlTm9kZUNvbGxlY3Rpb25Db21wb25lbnQsXHJcbiAgICBUcmVlVmlld3BvcnRDb21wb25lbnQsXHJcbiAgICBUcmVlTm9kZVdyYXBwZXJDb21wb25lbnQsXHJcbiAgICBUcmVlTm9kZUNoZWNrYm94Q29tcG9uZW50LFxyXG4gICAgVHJlZUFuaW1hdGVPcGVuRGlyZWN0aXZlXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBUcmVlQ29tcG9uZW50LFxyXG4gICAgVHJlZU5vZGVDb21wb25lbnQsXHJcbiAgICBUcmVlTm9kZUNvbnRlbnQsXHJcbiAgICBMb2FkaW5nQ29tcG9uZW50LFxyXG4gICAgVHJlZURyb3BEaXJlY3RpdmUsXHJcbiAgICBUcmVlRHJhZ0RpcmVjdGl2ZSxcclxuICAgIFRyZWVOb2RlRXhwYW5kZXJDb21wb25lbnQsXHJcbiAgICBUcmVlTm9kZUNoaWxkcmVuQ29tcG9uZW50LFxyXG4gICAgVHJlZU5vZGVEcm9wU2xvdCxcclxuICAgIFRyZWVOb2RlQ29sbGVjdGlvbkNvbXBvbmVudCxcclxuICAgIFRyZWVWaWV3cG9ydENvbXBvbmVudCxcclxuICAgIFRyZWVOb2RlV3JhcHBlckNvbXBvbmVudCxcclxuICAgIFRyZWVOb2RlQ2hlY2tib3hDb21wb25lbnQsXHJcbiAgICBUcmVlQW5pbWF0ZU9wZW5EaXJlY3RpdmVcclxuICBdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIE1vYnhBbmd1bGFyTW9kdWxlXHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUcmVlTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBUcmVlTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtUcmVlRHJhZ2dlZEVsZW1lbnRdXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHtcclxuICBUcmVlTW9kZWwsXHJcbiAgVHJlZU5vZGUsXHJcbiAgVHJlZURyYWdnZWRFbGVtZW50LFxyXG4gIFRyZWVWaXJ0dWFsU2Nyb2xsLFxyXG4gIElUcmVlT3B0aW9ucyxcclxuICBUUkVFX0FDVElPTlMsXHJcbiAgS0VZUyxcclxuICBJQWN0aW9uTWFwcGluZyxcclxuICBJQWN0aW9uSGFuZGxlcixcclxuICBJQWxsb3dEcm9wRm4sXHJcbiAgSUFsbG93RHJhZ0ZuLFxyXG4gIExvYWRpbmdDb21wb25lbnQsXHJcbiAgVHJlZUFuaW1hdGVPcGVuRGlyZWN0aXZlLFxyXG4gIFRyZWVDb21wb25lbnQsXHJcbiAgVHJlZU5vZGVDb21wb25lbnQsXHJcbiAgVHJlZU5vZGVXcmFwcGVyQ29tcG9uZW50LFxyXG4gIFRyZWVOb2RlQ29udGVudCxcclxuICBUcmVlRHJvcERpcmVjdGl2ZSxcclxuICBUcmVlRHJhZ0RpcmVjdGl2ZSxcclxuICBUcmVlTm9kZUV4cGFuZGVyQ29tcG9uZW50LFxyXG4gIFRyZWVOb2RlQ2hpbGRyZW5Db21wb25lbnQsXHJcbiAgVHJlZU5vZGVEcm9wU2xvdCxcclxuICBUcmVlTm9kZUNvbGxlY3Rpb25Db21wb25lbnQsXHJcbiAgVHJlZVZpZXdwb3J0Q29tcG9uZW50LFxyXG4gIFRyZWVOb2RlQ2hlY2tib3hDb21wb25lbnQsXHJcbiAgSVRyZWVTdGF0ZVxyXG59O1xyXG4iXX0=