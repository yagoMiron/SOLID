export class PaymentService {
  private _wallet: number;

  constructor(wallet: number) {
    this._wallet = wallet;
  }
  makePayment(value: number): string {
    if (this.isPaymentPosible(value)) {
      this._wallet -= value;
      return "Pagamento executado com sucesso!";
    }
    return "Credito insuficiente para realizar o pagamento";
  }

  isPaymentPosible(value: number): boolean {
    return value >= this._wallet;
  }
}
