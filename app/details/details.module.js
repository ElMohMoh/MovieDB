"use strict";
var platform_1 = require("nativescript-angular/platform");
var forms_1 = require("nativescript-angular/forms");
var core_1 = require("@angular/core");
var details_routing_1 = require("./details.routing");
var details_component_1 = require("./details.component");
var DetailsModule = (function () {
    function DetailsModule() {
    }
    DetailsModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_1.NativeScriptModule,
                forms_1.NativeScriptFormsModule,
                details_routing_1.detailsRouting
            ],
            declarations: [
                details_component_1.DetailsComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], DetailsModule);
    return DetailsModule;
}());
exports.DetailsModule = DetailsModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlscy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkZXRhaWxzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEseUJBQW1DLCtCQUErQixDQUFDLENBQUE7QUFDbkUsc0JBQXdDLDRCQUE0QixDQUFDLENBQUE7QUFDckUscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBRXpDLGdDQUErQixtQkFBbUIsQ0FBQyxDQUFBO0FBQ25ELGtDQUFpQyxxQkFBcUIsQ0FBQyxDQUFBO0FBWXZEO0lBQUE7SUFBNkIsQ0FBQztJQVY5QjtRQUFDLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCw2QkFBa0I7Z0JBQ2xCLCtCQUF1QjtnQkFDdkIsZ0NBQWM7YUFDZjtZQUNELFlBQVksRUFBRTtnQkFDWixvQ0FBZ0I7YUFDakI7U0FDRixDQUFDOztxQkFBQTtJQUMyQixvQkFBQztBQUFELENBQUMsQUFBOUIsSUFBOEI7QUFBakIscUJBQWEsZ0JBQUksQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9wbGF0Zm9ybVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5pbXBvcnQgeyBkZXRhaWxzUm91dGluZyB9IGZyb20gXCIuL2RldGFpbHMucm91dGluZ1wiO1xyXG5pbXBvcnQgeyBEZXRhaWxzQ29tcG9uZW50IH0gZnJvbSBcIi4vZGV0YWlscy5jb21wb25lbnRcIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxyXG4gICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXHJcbiAgICBkZXRhaWxzUm91dGluZ1xyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBEZXRhaWxzQ29tcG9uZW50XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGV0YWlsc01vZHVsZSB7IH0iXX0=