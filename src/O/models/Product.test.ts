import { Product } from "./Product";
import { VipDiscount } from "./VipDiscount";

const produto = new Product("Arroz", 100, new VipDiscount());
describe("Tests over Product class", () => {
  it("should correctly calculate final price", () => {
    const custoFinal = produto.getFinalPrice();
    expect(custoFinal).toBe(90);
  });
});
