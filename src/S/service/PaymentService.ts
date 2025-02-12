export class PaymentService {
  wallet: number;

  constructor(wallet: number) {
    this.wallet = wallet;
  }
  makePayment(value: number): string {
    if (this.isPaymentPosible(value)) {
      this.wallet -= value;
      return "Pagamento executado com sucesso!";
    }
    return "Credito insuficiente para realizar o pagamento";
  }

  isPaymentPosible(value: number): boolean {
    return value <= this.wallet;
  }
}
