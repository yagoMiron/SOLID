import { StockErrorMessages } from "../enums/StockErrorMessages";
import { StockErrors } from "../errors/StockErrors";
import { ProductRegister } from "../models/ProductRegister";

export class StockService {
  productsIDs: string[] = [];
  productQuantity: number[] = [];
  productPrices: number[] = [];

  constructor(
    productsIDs: string[],
    productQuantity: number[],
    productPrices: number[]
  ) {
    this.productsIDs = productsIDs;
    this.productQuantity = productQuantity;
    this.productPrices = productPrices;
  }

  updateStock(productList: ProductRegister[]) {
    if (!this.checkStock(productList)) {
      throw new StockErrors(StockErrorMessages.UPDATESTOCK_ERROR_MESSAGE);
    }
    productList.forEach((product) => {
      const index = this.getIndexById(product.productID);
      this.productQuantity[index] -= product.quantity;
    });
  }

  checkStock(productList: ProductRegister[]): boolean {
    let isInStock = true;
    productList.forEach((product) => {
      const index = this.getIndexById(product.productID);
      if (index !== -1) {
        if (this.productQuantity[index] < product.quantity) {
          isInStock = false;
        }
      } else {
        isInStock = false;
      }
    });
    return isInStock;
  }

  getIndexById(productID: string) {
    return this.productsIDs.indexOf(productID);
  }

  getTotalCost(productList: ProductRegister[]): number {
    if (!this.checkStock(productList)) {
      throw new StockErrors(StockErrorMessages.TOTALCOST_ERROR_MESSAGE);
    }
    let totalCost = 0;
    productList.forEach((product) => {
      const index = this.getIndexById(product.productID);
      totalCost += this.productPrices[index];
    });
    return totalCost;
  }
}
