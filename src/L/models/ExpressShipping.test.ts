import { ExpressShipping } from "./ExpressShipping";

const freteEspresso = new ExpressShipping();
describe("Tests over ExpressShipping class", () => {
  it("should correctly calculate Shipping cost", () => {
    const custoEntrega = freteEspresso.calculateCost(200);
    expect(custoEntrega).toBe(849.9);
  });
  it("should correctly calculate Delivery Date", () => {
    const dataDeEntrega = freteEspresso.ExpectedDeliveryDate(
      400,
      new Date(2025, 10, 10)
    );
    expect(dataDeEntrega.getDate()).toBe(11);
    expect(dataDeEntrega.getMonth()).toBe(10);
    expect(dataDeEntrega.getFullYear()).toBe(2025);
  });
});
