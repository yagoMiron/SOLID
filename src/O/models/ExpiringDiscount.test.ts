import { ExpiringDiscount } from "./ExpiringDiscount";

const disconto = new ExpiringDiscount();
describe("Tests over ExpiringDiscount class", () => {
  it("should correctly apply discount", () => {
    const custoFinal = disconto.applyDiscount(100);
    expect(custoFinal).toBe(80);
  });
});
