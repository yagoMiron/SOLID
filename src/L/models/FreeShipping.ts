import { IShipping } from "./IShipping";

export class FreeShipping implements IShipping {
  calculateCost(weight: number): number {
    return 0;
  }
  ExpectedDeliveryDate(distanceInKm: number, purchaseDate: Date): Date {
    const dayInMilliseconds = 1000 * 60 * 60 * 24;
    const kmPerDay = 50;
    return new Date(
      purchaseDate.getTime() + (distanceInKm / kmPerDay) * dayInMilliseconds
    );
  }
}
