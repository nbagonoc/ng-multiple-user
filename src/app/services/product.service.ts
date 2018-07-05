import { Injectable } from "@angular/core";
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject
} from "angularfire2/database";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  constructor(private angularFireDatabse: AngularFireDatabase) {}

  create(product) {
    this.angularFireDatabse.list("/products").push(product);
  }
  update(id, product) {
    return this.angularFireDatabse.object("/products/" + id).update(product);
  }
  getAll() {
    return this.angularFireDatabse.list("/products") as AngularFireList<any>;
  }
  getProduct(id) {
    return this.angularFireDatabse.object(
      "/products/" + id
    ) as AngularFireObject<any>;
  }
  delete(id) {
    return this.angularFireDatabse.object("/products/" + id).remove();
  }
}
