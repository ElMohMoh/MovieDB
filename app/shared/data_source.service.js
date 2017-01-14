"use strict";
var core_1 = require("@angular/core");
var DataSourceService = (function () {
    function DataSourceService() {
        this.data = ["Austria",
            "Belgium", "Bulgaria", "Croatia", "Cyprus", "Czech Republic",
            "Denmark", "Estonia", "Finland", "France", "Germany", "Greece", "Hungary", "Ireland", "Italy",
            "Latvia", "Lithuania", "Luxembourg", "Malta", "Netherlands", "Poland", "Portugal", "Romania", "Slovakia",
            "Slovenia", "Spain", "Sweden", "United Kingdom"];
    }
    DataSourceService.prototype.get_all_data = function () {
        return this.data;
    };
    DataSourceService.prototype.get_data = function (index) {
        return this.data[index];
    };
    DataSourceService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], DataSourceService);
    return DataSourceService;
}());
exports.DataSourceService = DataSourceService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YV9zb3VyY2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhdGFfc291cmNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUszQztJQUdFO1FBQ0UsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLFNBQVM7WUFDcEIsU0FBUyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLGdCQUFnQjtZQUM1RCxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUMsU0FBUyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE9BQU87WUFDNUYsUUFBUSxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBQyxRQUFRLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxVQUFVO1lBQ3ZHLFVBQVUsRUFBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUdELHdDQUFZLEdBQVo7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztJQUNuQixDQUFDO0lBRUQsb0NBQVEsR0FBUixVQUFTLEtBQVk7UUFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQW5CSDtRQUFDLGlCQUFVLEVBQUU7O3lCQUFBO0lBd0JiLHdCQUFDO0FBQUQsQ0FBQyxBQXZCRCxJQXVCQztBQXZCWSx5QkFBaUIsb0JBdUI3QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIERhdGFTb3VyY2VTZXJ2aWNlIHtcclxuICBwcml2YXRlIGRhdGE6QXJyYXk8c3RyaW5nPjtcclxuXHJcbiAgY29uc3RydWN0b3IoKXtcclxuICAgIHRoaXMuZGF0YSA9IFtcIkF1c3RyaWFcIixcclxuICAgICAgXCJCZWxnaXVtXCIsIFwiQnVsZ2FyaWFcIiwgXCJDcm9hdGlhXCIsIFwiQ3lwcnVzXCIsIFwiQ3plY2ggUmVwdWJsaWNcIixcclxuICAgICAgXCJEZW5tYXJrXCIsIFwiRXN0b25pYVwiLCBcIkZpbmxhbmRcIiwgXCJGcmFuY2VcIixcIkdlcm1hbnlcIiwgXCJHcmVlY2VcIiwgXCJIdW5nYXJ5XCIsIFwiSXJlbGFuZFwiLCBcIkl0YWx5XCIsXHJcbiAgICAgIFwiTGF0dmlhXCIsIFwiTGl0aHVhbmlhXCIsIFwiTHV4ZW1ib3VyZ1wiLCBcIk1hbHRhXCIsIFwiTmV0aGVybGFuZHNcIixcIlBvbGFuZFwiLCBcIlBvcnR1Z2FsXCIsIFwiUm9tYW5pYVwiLCBcIlNsb3Zha2lhXCIsXHJcbiAgICAgIFwiU2xvdmVuaWFcIixcIlNwYWluXCIsIFwiU3dlZGVuXCIsIFwiVW5pdGVkIEtpbmdkb21cIl07XHJcbiAgfVxyXG5cclxuXHJcbiAgZ2V0X2FsbF9kYXRhKCk6QXJyYXk8c3RyaW5nPntcclxuICAgIHJldHVybiB0aGlzLmRhdGE7XHJcbiAgfVxyXG5cclxuICBnZXRfZGF0YShpbmRleDpudW1iZXIpOnN0cmluZ3tcclxuICAgIHJldHVybiB0aGlzLmRhdGFbaW5kZXhdO1xyXG4gIH1cclxuXHJcblxyXG5cclxuXHJcbn0iXX0=