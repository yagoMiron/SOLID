import { Discount } from "./Discount";

export class PromoDiscount implements Discount {
  applyDiscount(price: number): number {
    return price * 0.85;
  }
}
