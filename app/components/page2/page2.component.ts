import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";


@Component({
    selector: "page2",
    templateUrl: "./components/page2/page2.component.html",
})
export class Page2Component {

    public fullName: string;

    public constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute) {
        this.activatedRoute.params.subscribe((param) => {
            this.fullName = param['name'];
        });
    }

    public onNavBtnTap() {
        this.router.navigate(["page1"]);

    }
}
