import { IDiscount } from "./IDiscount";

export class VipDiscount implements IDiscount {
  applyDiscount(price: number): number {
    return price * 0.9;
  }
}
