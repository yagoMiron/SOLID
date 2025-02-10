import { Discount } from "./Discount";

export class VipDiscount implements Discount {
  applyDiscount(price: number): number {
    return price * 0.9;
  }
}
