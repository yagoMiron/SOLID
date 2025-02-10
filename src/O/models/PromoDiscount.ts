import { IDiscount } from "./IDiscount";

export class PromoDiscount implements IDiscount {
  applyDiscount(price: number): number {
    return price * 0.85;
  }
}
