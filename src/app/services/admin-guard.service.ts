import { Injectable } from "@angular/core";
import { CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Rx";
import { AuthService } from "./auth.service";
import { UserService } from "./user.service";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/map";

@Injectable({
  providedIn: "root"
})
export class AdminGuardService implements CanActivate {
  constructor(
    private authService: AuthService,
    private userService: UserService
  ) {}

  canActivate(): Observable<boolean> {
    return this.authService.appUser$.map((appUser: any) => appUser.isAdmin);
  }
}
