import { Order } from "../models/Order";
import { PaymentService } from "./PaymentService";
import { StockService } from "./StockService";

export class PurchaseService {
  paymentService: PaymentService;
  stockService: StockService;

  constructor(paymentService: PaymentService, stockService: StockService) {
    this.paymentService = paymentService;
    this.stockService = stockService;
  }

  purchaseProducts(order: Order): string {
    let totalCost: number;
    totalCost = this.stockService.getTotalCost(order.cart);

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
