import { Order } from "../models/Order";
import { PaymentService } from "./PaymentService";
import { PurchaseService } from "./PurchaseService";
import { StockService } from "./StockService";

const servicoCompra = new PurchaseService(
  new PaymentService(2000),
  new StockService(
    ["AA1", "AB2", "BB2", "BC3"],
    [4, 3, 0, 5],
    [20, 50, 40, 150]
  )
);
describe("Tests over PurchaseService class", () => {
  it("should correctly purchase a product", () => {
    const pedido: Order = {
      id: "AAB2",
      userId: "ABB2",
      cart: [
        { productID: "AA1", quantity: 1 },
        { productID: "AB2", quantity: 1 },
        { productID: "BC3", quantity: 1 },
      ],
    };
    expect(servicoCompra.purchaseProducts(pedido)).toBe(
      "Compra realizada com sucesso!"
    );
    expect(servicoCompra.paymentService.wallet).toBe(1780);
    expect(servicoCompra.stockService.productQuantity).toStrictEqual([
      3, 2, 0, 4,
    ]);
  });
  it("shoult not allow to purchase a product without enough money in wallet", () => {
    const pedido: Order = {
      id: "AAB2",
      userId: "ABB2",
      cart: [{ productID: "AA1", quantity: 1 }],
    };
    servicoCompra.paymentService.wallet = 0;
    expect(servicoCompra.purchaseProducts(pedido)).toBe(
      "Não é possivel executar a compra"
    );
    expect(servicoCompra.paymentService.wallet).toBe(0);
  });
});
