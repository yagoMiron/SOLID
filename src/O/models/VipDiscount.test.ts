import { VipDiscount } from "./VipDiscount";

const disconto = new VipDiscount();
describe("Tests over VipDiscount class", () => {
  it("should correctly apply discount", () => {
    const custoFinal = disconto.applyDiscount(100);
    expect(custoFinal).toBe(90);
  });
});
