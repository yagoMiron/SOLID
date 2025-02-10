export interface IShipping {
  calculateCost(weight: number): number;
  ExpectedDeliveryDate(distanceInKm: number, purchaseDate: Date): Date;
}
