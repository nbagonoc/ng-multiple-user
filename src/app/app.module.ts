import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireAuthModule } from "angularfire2/auth";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CustomFormsModule } from "ng2-validation";
import { DataTableModule } from "angular5-data-table";

// SERIVECES
import { AuthService } from "./services/auth.service";
import { UserService } from "./services/user.service";
import { AuthGuardService } from "./services/auth-guard.service";
import { AdminGuardService } from "./services/admin-guard.service";

// COMPONENTS
import { AppComponent } from "./app.component";
import { environment } from "../environments/environment";
import { NavComponent } from "./components/nav/nav.component";
import { HomeComponent } from "./components/home/home.component";
import { UserSidebarComponent } from "./components/user/user-sidebar/user-sidebar.component";
import { DashboardComponent } from "./components/user/dashboard/dashboard.component";
import { ManageUsersComponent } from "./components/user/manage-users/manage-users.component";
import { BannerComponent } from "./components/banner/banner.component";
import { FeaturedComponent } from "./components/featured/featured.component";

// ROUTES
const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "user/dashboard",
    component: DashboardComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "user/manage-users",
    component: ManageUsersComponent,
    canActivate: [AuthGuardService, AdminGuardService]
  },
  { path: "**", component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    UserSidebarComponent,
    DashboardComponent,
    ManageUsersComponent,
    BannerComponent,
    FeaturedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CustomFormsModule,
    DataTableModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [AuthService, UserService, AuthGuardService, AdminGuardService],
  bootstrap: [AppComponent]
})
export class AppModule {}
