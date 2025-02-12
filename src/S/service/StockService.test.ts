import { StockErrorMessages } from "../enums/StockErrorMessages";
import { StockErrors } from "../errors/StockErrors";
import { ProductRegister } from "../models/ProductRegister";
import { StockService } from "./StockService";

const servicoEstoque = new StockService(
  ["AA1", "AB2", "BB2", "BC3"],
  [4, 3, 0, 5],
  [20, 50, 40, 150]
);
describe("Tests over StockService class", () => {
  it("should correctly check stock", () => {
    const arroz: ProductRegister = { productID: "AA1", quantity: 2 };
    expect(servicoEstoque.checkStock([arroz])).toBe(true);
  });
  it("should return false if there are not enough products in stock", () => {
    const arroz: ProductRegister = { productID: "AA1", quantity: 20 };
    expect(servicoEstoque.checkStock([arroz])).toBe(false);
  });
  it("should correctly calculate the total cost", () => {
    const listaDeCompras: ProductRegister[] = [
      { productID: "AA1", quantity: 1 },
      { productID: "AB2", quantity: 1 },
      { productID: "BC3", quantity: 1 },
    ];
    expect(servicoEstoque.getTotalCost(listaDeCompras)).toBe(220);
  });
  it("should not allow to calculate the total cost", () => {
    const listaDeCompras: ProductRegister[] = [
      { productID: "AA4", quantity: 1 },
      { productID: "AB2", quantity: 1 },
      { productID: "BC3", quantity: 1 },
    ];
    try {
      servicoEstoque.getTotalCost(listaDeCompras);
      fail("It calculated the cost of a product that does not exist");
    } catch (err) {
      expect(err).toBeInstanceOf(StockErrors);
      expect(err.message).toBe(StockErrorMessages.TOTALCOST_ERROR_MESSAGE);
    }
  });
  it("should correctly update the stock", () => {
    const listaDeCompras: ProductRegister[] = [
      { productID: "BC3", quantity: 1 },
    ];
    servicoEstoque.updateStock(listaDeCompras);
    expect(servicoEstoque.productQuantity[3]).toBe(4);
  });
  it("should not allow to update the stock", () => {
    const listaDeCompras: ProductRegister[] = [
      { productID: "ZC3", quantity: 1 },
    ];
    try {
      servicoEstoque.updateStock(listaDeCompras);
      fail("It updated the value of a product that does not exist");
    } catch (err) {
      expect(err).toBeInstanceOf(StockErrors);
      expect(err.message).toBe(StockErrorMessages.UPDATESTOCK_ERROR_MESSAGE);
    }
  });
});
