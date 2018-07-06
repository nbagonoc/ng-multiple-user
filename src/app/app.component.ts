import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "./services/auth.service";
import { UserService } from "./services/user.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router
  ) {
    // redirect from the page after signin(depending on what page you came from)
    authService.user$.subscribe(user => {
      if (!user) return;
      // if user signs-in, save him at database.
      userService.save(user);

      let returnUrl = localStorage.getItem("returnUrl");

      if (!returnUrl) return;

      localStorage.removeItem("returnUrl");
      router.navigateByUrl(returnUrl);
    });
  }
}
