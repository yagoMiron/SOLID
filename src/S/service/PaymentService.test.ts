import { PaymentService } from "./PaymentService";

const servicoPagamento = new PaymentService(2000);
describe("Tests over PaymentService class", () => {
  it("should correctly make a payment", () => {
    expect(servicoPagamento.makePayment(200)).toBe(
      "Pagamento executado com sucesso!"
    );
    expect(servicoPagamento.wallet).toBe(1800);
  });
  it("should fail making a payment with insufficient money in wallet", () => {
    servicoPagamento.wallet = 200;
    expect(servicoPagamento.makePayment(1000)).toBe(
      "Credito insuficiente para realizar o pagamento"
    );
    expect(servicoPagamento.wallet).toBe(200);
  });
});
