import { Injectable } from "@angular/core";
import { CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "./auth.service";
import "rxjs/add/operator/map";

@Injectable({
  providedIn: "root"
})
export class AuthGuardService implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route, state: RouterStateSnapshot) {
    return this.authService.user$.map(user => {
      if (user) {
        return true;
      } else {
        this.router.navigate(["/"], {
          queryParams: { returnUrl: state.url }
        });
        return false;
      }
    });
  }
}
