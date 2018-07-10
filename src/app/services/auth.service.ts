import { Injectable } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs/Rx";
import { AngularFireAuth } from "angularfire2/auth";
import { AppUser } from "../models/app-user";
import * as firebase from "firebase";
import { UserService } from "./user.service";
import "rxjs/add/observable/of";
import "rxjs/add/operator/switchMap";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  user$: Observable<firebase.User>;

  constructor(
    private userService: UserService,
    private afAuth: AngularFireAuth,
    private route: ActivatedRoute
  ) {
    this.user$ = afAuth.authState;
  }

  login() {
    let returnUrl =
      this.route.snapshot.queryParamMap.get("returnUrl") || "/user/dashboard";
    localStorage.setItem("returnUrl", returnUrl);

    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  get appUser$(): Observable<AppUser> {
    return this.user$.switchMap(user => {
      if (user) {
        return this.userService.get(user.uid);
      } else {
        return Observable.of(null);
      }
    });
  }
}
