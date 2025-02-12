import { FreeShipping } from "./FreeShipping";

const freteGratis = new FreeShipping();
describe("Tests over FreeShipping class", () => {
  it("should correctly calculate Shipping cost", () => {
    const custoEntrega = freteGratis.calculateCost(200);
    expect(custoEntrega).toBe(0);
  });
  it("should correctly calculate Delivery Date", () => {
    const dataDeEntrega = freteGratis.ExpectedDeliveryDate(
      200,
      new Date(2025, 10, 10)
    );
    expect(dataDeEntrega.getDate()).toBe(14);
    expect(dataDeEntrega.getMonth()).toBe(10);
    expect(dataDeEntrega.getFullYear()).toBe(2025);
  });
});
