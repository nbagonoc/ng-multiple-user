import { Component, OnInit } from "@angular/core";
import { ProductService } from "../../services/product.service";
import { ActivatedRoute } from "@angular/router";
import { Product } from "../../models/product";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  products: Product[];
  filteredProducts: Product[];
  category: any;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.productService
      .getAll()
      .snapshotChanges()
      .subscribe(products => {
        this.products = [];
        products.forEach(product => {
          let productItem = product.payload.toJSON();
          productItem["$key"] = product.key;
          this.products.push(productItem as any);
        });

        // filter the products
        this.route.queryParamMap.subscribe(params => {
          this.category = params.get("category");

          this.filteredProducts = this.category
            ? this.products.filter(p => p.category === this.category)
            : this.products;
        });
      });
  }
}
