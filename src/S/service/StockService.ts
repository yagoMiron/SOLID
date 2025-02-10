import { ProductRegister } from "../models/ProductRegister";

export class StockService {
  private _productsIDs: string[] = [];
  private _productQuantity: number[] = [];
  private _productPrices: number[] = [];

  constructor(
    productsIDs: string[],
    productQuantity: number[],
    productPrices: number[]
  ) {
    this._productsIDs = productsIDs;
    this._productQuantity = productQuantity;
    this._productPrices = productPrices;
  }

  updateStock(productList: ProductRegister[]) {
    if (!this.checkStock(productList)) {
      throw new Error();
    }
    productList.forEach((product) => {
      const index = this.getIndexById(product.productID);
      this._productQuantity[index] -= product.quantity;
    });
  }

  checkStock(productList: ProductRegister[]): boolean {
    let isInStock = true;
    productList.forEach((product) => {
      const index = this.getIndexById(product.productID);
      if (index !== -1) {
        if (this._productQuantity[index] < product.quantity) {
          isInStock = false;
        }
      } else {
        isInStock = false;
      }
    });
    return isInStock;
  }

  getIndexById(productID: string) {
    return this._productsIDs.indexOf(productID);
  }

  getTotalCost(productList: ProductRegister[]): number {
    if (!this.checkStock(productList)) {
      throw new Error();
    }
    let totalCost = 0;
    productList.forEach((product) => {
      const index = this.getIndexById(product.productID);
      totalCost += this._productPrices[index];
    });
    return totalCost;
  }
}
