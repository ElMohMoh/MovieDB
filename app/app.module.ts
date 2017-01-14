import { NativeScriptModule } from "nativescript-angular/platform";
import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { AppComponent } from "./app.component";

import { AppRoutes } from './app.routing';
import { HomeModule } from "./home/home.module";
import { DetailsModule } from "./details/details.module";

import { DataSourceService } from "./shared/data_source.service";

@NgModule({
    providers: [DataSourceService],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    imports: [
        NativeScriptModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(AppRoutes),
        HomeModule,
        DetailsModule
    ]
})
export class AppModule { }
