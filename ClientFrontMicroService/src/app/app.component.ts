import {AfterViewInit, Component, ElementRef} from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AuthenticationService } from "./services/authentication.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements AfterViewInit {


  title = "ClientFrontMicroService";
  login = {};

  constructor(
    private elementRef: ElementRef,
    private http: HttpClient,
    private authService: AuthenticationService,
    private router: Router
  ) {
    //  http.get("login").subscribe((data) => (this.login = data));
  }
  ngOnInit(): void {}

  onSelectedVirement() {
    this.router.navigateByUrl("/virement");
  }
  onSelectedComptes() {
    this.router.navigateByUrl("/home");
  }

  ngAfterViewInit(){
    //this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#cccccc';
  }
}




