import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ProductService } from "../../../services/product.service";

@Component({
  selector: "app-product-form",
  templateUrl: "./product-form.component.html",
  styleUrls: ["./product-form.component.css"]
})
export class ProductFormComponent implements OnInit {
  product = {};
  id;

  constructor(private router: Router, private productService: ProductService) {}

  onSubmit(product) {
    this.productService.create(product);
    this.router.navigate(["/admin/products"]);
  }

  ngOnInit() {}
}
