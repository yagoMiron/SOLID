import { Discount } from "./Discount";

export class ExpiringDiscount implements Discount {
  applyDiscount(price: number): number {
    return price * 0.8;
  }
}
