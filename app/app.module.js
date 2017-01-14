"use strict";
var platform_1 = require("nativescript-angular/platform");
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var app_component_1 = require("./app.component");
var app_routing_1 = require('./app.routing');
var home_module_1 = require("./home/home.module");
var details_module_1 = require("./details/details.module");
var data_source_service_1 = require("./shared/data_source.service");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            providers: [data_source_service_1.DataSourceService],
            declarations: [app_component_1.AppComponent],
            bootstrap: [app_component_1.AppComponent],
            imports: [
                platform_1.NativeScriptModule,
                router_1.NativeScriptRouterModule,
                router_1.NativeScriptRouterModule.forRoot(app_routing_1.AppRoutes),
                home_module_1.HomeModule,
                details_module_1.DetailsModule
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHlCQUFtQywrQkFBK0IsQ0FBQyxDQUFBO0FBQ25FLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6Qyx1QkFBeUMsNkJBQTZCLENBQUMsQ0FBQTtBQUV2RSw4QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUUvQyw0QkFBMEIsZUFBZSxDQUFDLENBQUE7QUFDMUMsNEJBQTJCLG9CQUFvQixDQUFDLENBQUE7QUFDaEQsK0JBQThCLDBCQUEwQixDQUFDLENBQUE7QUFFekQsb0NBQWtDLDhCQUE4QixDQUFDLENBQUE7QUFjakU7SUFBQTtJQUF5QixDQUFDO0lBWjFCO1FBQUMsZUFBUSxDQUFDO1lBQ04sU0FBUyxFQUFFLENBQUMsdUNBQWlCLENBQUM7WUFDOUIsWUFBWSxFQUFFLENBQUMsNEJBQVksQ0FBQztZQUM1QixTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1lBQ3pCLE9BQU8sRUFBRTtnQkFDTCw2QkFBa0I7Z0JBQ2xCLGlDQUF3QjtnQkFDeEIsaUNBQXdCLENBQUMsT0FBTyxDQUFDLHVCQUFTLENBQUM7Z0JBQzNDLHdCQUFVO2dCQUNWLDhCQUFhO2FBQ2hCO1NBQ0osQ0FBQzs7aUJBQUE7SUFDdUIsZ0JBQUM7QUFBRCxDQUFDLEFBQTFCLElBQTBCO0FBQWIsaUJBQVMsWUFBSSxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3BsYXRmb3JtXCI7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcblxuaW1wb3J0IHsgQXBwUm91dGVzIH0gZnJvbSAnLi9hcHAucm91dGluZyc7XG5pbXBvcnQgeyBIb21lTW9kdWxlIH0gZnJvbSBcIi4vaG9tZS9ob21lLm1vZHVsZVwiO1xuaW1wb3J0IHsgRGV0YWlsc01vZHVsZSB9IGZyb20gXCIuL2RldGFpbHMvZGV0YWlscy5tb2R1bGVcIjtcblxuaW1wb3J0IHsgRGF0YVNvdXJjZVNlcnZpY2UgfSBmcm9tIFwiLi9zaGFyZWQvZGF0YV9zb3VyY2Uuc2VydmljZVwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIHByb3ZpZGVyczogW0RhdGFTb3VyY2VTZXJ2aWNlXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtBcHBDb21wb25lbnRdLFxuICAgIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3QoQXBwUm91dGVzKSxcbiAgICAgICAgSG9tZU1vZHVsZSxcbiAgICAgICAgRGV0YWlsc01vZHVsZVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuIl19