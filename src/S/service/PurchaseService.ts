import { Order } from "../models/Order";
import { PaymentService } from "./PaymentService";
import { StockService } from "./StockService";

export class PurchaseService {
  constructor(
    private paymentService: PaymentService,
    private stockService: StockService
  ) {}

  purchaseProducts(order: Order) {
    const totalCost = this.stockService.getTotalCost(order.cart);
    if (
      !this.paymentService.isPaymentPosible(totalCost) ||
      !this.stockService.checkStock(order.cart)
    ) {
      return "Não é possivel executar a compra";
    }
    this.paymentService.makePayment(totalCost);
    this.stockService.updateStock(order.cart);
    return "Compra realizada com sucesso!";
  }
}
