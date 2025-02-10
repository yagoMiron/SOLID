import { IDiscount } from "./IDiscount";

export class ExpiringDiscount implements IDiscount {
  applyDiscount(price: number): number {
    return price * 0.8;
  }
}
