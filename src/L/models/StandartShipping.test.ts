import { FreeShipping } from "./FreeShipping";
import { StandartShipping } from "./StandartShipping";

const fretePadrao = new StandartShipping();
describe("Tests over StandartShipping class", () => {
  it("should correctly calculate Shipping cost", () => {
    const custoEntrega = fretePadrao.calculateCost(200);
    expect(custoEntrega).toBe(209.9);
  });
  it("should correctly calculate Delivery Date", () => {
    const dataDeEntrega = fretePadrao.ExpectedDeliveryDate(
      300,
      new Date(2025, 10, 10)
    );
    expect(dataDeEntrega.getDate()).toBe(12);
    expect(dataDeEntrega.getMonth()).toBe(10);
    expect(dataDeEntrega.getFullYear()).toBe(2025);
  });
});
