import { Component, OnInit } from "@angular/core";
import { AppUser } from "../../../models/app-user";
import { AuthService } from "../../../services/auth.service";

@Component({
  selector: "app-user-sidebar",
  templateUrl: "./user-sidebar.component.html",
  styleUrls: ["./user-sidebar.component.css"]
})
export class UserSidebarComponent implements OnInit {
  appUser: AppUser;

  constructor(public authService: AuthService) {
    authService.appUser$.subscribe(appUser => (this.appUser = appUser));
  }

  ngOnInit() {}

  onLogout() {
    this.authService.logout();
  }
}
