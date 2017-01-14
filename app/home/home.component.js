"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var data_source_service_1 = require("../shared/data_source.service");
var HomeComponent = (function () {
    function HomeComponent(router, data_source) {
        this.router = router;
        this.data_source = data_source;
    }
    HomeComponent.prototype.showDetails = function (e) {
        this.router.navigate(["details", e.index]);
    };
    HomeComponent.prototype.ngOnInit = function () {
        this.countries = this.data_source.get_all_data();
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "app-home",
            templateUrl: "home/home.component.html",
            styleUrls: ["home/home.component.css"],
        }), 
        __metadata('design:paramtypes', [router_1.Router, data_source_service_1.DataSourceService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBQ2xELHVCQUF1QixpQkFBaUIsQ0FBQyxDQUFBO0FBQ3pDLG9DQUFrQywrQkFBK0IsQ0FBQyxDQUFBO0FBU2xFO0lBSUUsdUJBQ1ksTUFBYyxFQUNkLFdBQTZCO1FBRDdCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxnQkFBVyxHQUFYLFdBQVcsQ0FBa0I7SUFHekMsQ0FBQztJQUVELG1DQUFXLEdBQVgsVUFBWSxDQUFDO1FBQ1gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUE7SUFDNUMsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDbkQsQ0FBQztJQXZCSDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsVUFBVTtZQUNwQixXQUFXLEVBQUUsMEJBQTBCO1lBQ3ZDLFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO1NBQ3ZDLENBQUM7O3FCQUFBO0lBb0JGLG9CQUFDO0FBQUQsQ0FBQyxBQWxCRCxJQWtCQztBQWxCWSxxQkFBYSxnQkFrQnpCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRGF0YVNvdXJjZVNlcnZpY2UgfSBmcm9tIFwiLi4vc2hhcmVkL2RhdGFfc291cmNlLnNlcnZpY2VcIjtcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJhcHAtaG9tZVwiLFxyXG4gIHRlbXBsYXRlVXJsOiBcImhvbWUvaG9tZS5jb21wb25lbnQuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wiaG9tZS9ob21lLmNvbXBvbmVudC5jc3NcIl0sXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIGNvdW50cmllczpBcnJheTxzdHJpbmc+O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgICAgcHJpdmF0ZSBkYXRhX3NvdXJjZTpEYXRhU291cmNlU2VydmljZVxyXG4gICl7XHJcblxyXG4gIH1cclxuXHJcbiAgc2hvd0RldGFpbHMoZSl7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJkZXRhaWxzXCIsIGUuaW5kZXhdKVxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKXtcclxuICAgIHRoaXMuY291bnRyaWVzID0gdGhpcy5kYXRhX3NvdXJjZS5nZXRfYWxsX2RhdGEoKTtcclxuICB9XHJcbn0iXX0=