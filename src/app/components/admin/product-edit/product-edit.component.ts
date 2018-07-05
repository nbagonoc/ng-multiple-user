import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ProductService } from "../../../services/product.service";

@Component({
  selector: "app-product-edit",
  templateUrl: "./product-edit.component.html",
  styleUrls: ["./product-edit.component.css"]
})
export class ProductEditComponent implements OnInit {
  product = {};
  id;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService
  ) {
    this.id = this.route.snapshot.paramMap.get("id");
    if (this.id)
      this.productService
        .getProduct(this.id)
        .valueChanges()
        .subscribe(product => (this.product = product));
  }

  onSubmit(product) {
    if (this.id) {
      this.productService.update(this.id, product);
      this.router.navigate(["/admin/products"]);
    } else {
      this.productService.create(product);
      this.router.navigate(["/admin/products"]);
    }
  }

  onDelete() {
    if (confirm("are you sure you want to delete this product?")) {
      this.productService.delete(this.id);
      this.router.navigate(["/admin/products"]);
    }
  }

  ngOnInit() {}
}
