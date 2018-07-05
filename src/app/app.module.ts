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
import { ProductService } from "./services/product.service";
import { AuthGuardService } from "./services/auth-guard.service";
import { AdminGuardService } from "./services/admin-guard.service";

// COMPONENTS
import { AppComponent } from "./app.component";
import { environment } from "../environments/environment";
import { NavComponent } from "./components/nav/nav.component";
import { HomeComponent } from "./components/home/home.component";
import { ProductsComponent } from "./components/products/products.component";
import { ShoppingCartComponent } from "./components/shopping-cart/shopping-cart.component";
import { CheckOutComponent } from "./components/check-out/check-out.component";
import { OrderSuccessComponent } from "./components/order-success/order-success.component";
import { MyOrdersComponent } from "./components/my-orders/my-orders.component";
import { AdminProductsComponent } from "./components/admin/admin-products/admin-products.component";
import { AdminOrdersComponent } from "./components/admin/admin-orders/admin-orders.component";
import { LoginComponent } from "./components/login/login.component";
import { ProductFormComponent } from "./components/admin/product-form/product-form.component";
import { ProductEditComponent } from "./components/admin/product-edit/product-edit.component";

// ROUTES
const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "products", component: ProductsComponent },
  { path: "shopping-cart", component: ShoppingCartComponent },
  { path: "login", component: LoginComponent },
  {
    path: "check-out",
    component: CheckOutComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "order-success",
    component: OrderSuccessComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "my/orders",
    component: MyOrdersComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "admin/products/new",
    component: ProductFormComponent,
    canActivate: [AuthGuardService, AdminGuardService]
  },
  {
    path: "admin/products/:id",
    component: ProductEditComponent,
    canActivate: [AuthGuardService, AdminGuardService]
  },
  {
    path: "admin/products",
    component: AdminProductsComponent,
    canActivate: [AuthGuardService, AdminGuardService]
  },
  {
    path: "admin/orders",
    component: AdminOrdersComponent,
    canActivate: [AuthGuardService, AdminGuardService]
  },
  { path: "**", component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    LoginComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    ProductFormComponent,
    ProductEditComponent
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
  providers: [
    AuthService,
    UserService,
    ProductService,
    AuthGuardService,
    AdminGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
