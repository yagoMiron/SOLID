import { IDiscount } from "./IDiscount";

export class Product {
  private _name: string;
  private _price: number;
  private _discountType: IDiscount;

  constructor(name: string, price: number, discountType: IDiscount) {
    this._name = name;
    this._price = price;
    this._discountType = discountType;
  }

  getFinalPrice(): number {
    return this._discountType.applyDiscount(this._price);
  }
}
