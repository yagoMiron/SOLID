import { PromoDiscount } from "./PromoDiscount";

const disconto = new PromoDiscount();
describe("Tests over PromoDiscount class", () => {
  it("should correctly apply discount", () => {
    const custoFinal = disconto.applyDiscount(100);
    expect(custoFinal).toBe(85);
  });
});
