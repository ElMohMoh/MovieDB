import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppComponents, AppRoutes} from "./app.routing";
import { NativeScriptRouterModule} from "nativescript-angular/router";
import { AppComponent } from "./app.component";

@NgModule({
    declarations: [AppComponent,...AppComponents],
    bootstrap: [AppComponent],
    imports: [
        NativeScriptModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(AppRoutes)
        ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
