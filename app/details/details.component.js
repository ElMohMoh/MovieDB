"use strict";
var core_1 = require("@angular/core");
var router_1 = require('@angular/router');
var data_source_service_1 = require("../shared/data_source.service");
var DetailsComponent = (function () {
    function DetailsComponent(route, data_source) {
        this.route = route;
        this.data_source = data_source;
    }
    DetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.item_id = params['id'];
            _this.country = _this.data_source.get_data(_this.item_id);
        });
    };
    DetailsComponent = __decorate([
        core_1.Component({
            selector: "app-details",
            templateUrl: "details/details.component.html",
            styleUrls: ["details/details.component.css"],
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, data_source_service_1.DataSourceService])
    ], DetailsComponent);
    return DetailsComponent;
}());
exports.DetailsComponent = DetailsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlscy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkZXRhaWxzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBRWxELHVCQUE2QixpQkFDN0IsQ0FBQyxDQUQ2QztBQUM5QyxvQ0FBZ0MsK0JBQStCLENBQUMsQ0FBQTtBQVNoRTtJQUtFLDBCQUNZLEtBQW9CLEVBQ3BCLFdBQTZCO1FBRDdCLFVBQUssR0FBTCxLQUFLLENBQWU7UUFDcEIsZ0JBQVcsR0FBWCxXQUFXLENBQWtCO0lBR3pDLENBQUM7SUFFRCxtQ0FBUSxHQUFSO1FBQUEsaUJBT0M7UUFMQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQ2hDLEtBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzVCLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3pELENBQUMsQ0FBQyxDQUFBO0lBRUosQ0FBQztJQXpCSDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsYUFBYTtZQUN2QixXQUFXLEVBQUUsZ0NBQWdDO1lBQzdDLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO1NBQzdDLENBQUM7O3dCQUFBO0lBc0JGLHVCQUFDO0FBQUQsQ0FBQyxBQXBCRCxJQW9CQztBQXBCWSx3QkFBZ0IsbUJBb0I1QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCAgT25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZX0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJ1xyXG5pbXBvcnQge0RhdGFTb3VyY2VTZXJ2aWNlfSBmcm9tIFwiLi4vc2hhcmVkL2RhdGFfc291cmNlLnNlcnZpY2VcIjtcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJhcHAtZGV0YWlsc1wiLFxyXG4gIHRlbXBsYXRlVXJsOiBcImRldGFpbHMvZGV0YWlscy5jb21wb25lbnQuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wiZGV0YWlscy9kZXRhaWxzLmNvbXBvbmVudC5jc3NcIl0sXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRGV0YWlsc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIGl0ZW1faWQ6bnVtYmVyO1xyXG4gIGNvdW50cnk6c3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgICAgcHJpdmF0ZSByb3V0ZTpBY3RpdmF0ZWRSb3V0ZSxcclxuICAgICAgcHJpdmF0ZSBkYXRhX3NvdXJjZTpEYXRhU291cmNlU2VydmljZVxyXG4gICl7XHJcblxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKXtcclxuXHJcbiAgICB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcclxuICAgICAgdGhpcy5pdGVtX2lkID0gcGFyYW1zWydpZCddO1xyXG4gICAgICB0aGlzLmNvdW50cnkgPSB0aGlzLmRhdGFfc291cmNlLmdldF9kYXRhKHRoaXMuaXRlbV9pZCk7XHJcbiAgICB9KVxyXG5cclxuICB9XHJcbn0iXX0=