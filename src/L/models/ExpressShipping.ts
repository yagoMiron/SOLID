import { IShipping } from "./IShipping";

export class ExpressShipping implements IShipping {
  calculateCost(weight: number): number {
    return 49.9 + weight * 3.5;
  }
  ExpectedDeliveryDate(distanceInKm: number, purchaseDate: Date): Date {
    const dayInMilliseconds = 1000 * 60 * 60 * 24;
    const kmPerDay = 400;
    return new Date(
      purchaseDate.getTime() + (distanceInKm / kmPerDay) * dayInMilliseconds
    );
  }
}
