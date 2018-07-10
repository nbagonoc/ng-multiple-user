import { Component, OnInit } from "@angular/core";
import { AppUser } from "../../../models/app-user";
import { AuthService } from "../../../services/auth.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  appUser: AppUser;

  constructor(private authService: AuthService) {
    authService.appUser$.subscribe(appUser => (this.appUser = appUser));
  }

  ngOnInit() {}
}
