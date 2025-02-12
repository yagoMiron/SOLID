import { Axe } from "./Axe";

const machado = new Axe();
describe("Tests over Axe class", () => {
  it("should correctly use attack method", () => {
    machado.damage = 50;
    expect(machado.attack()).toBe("Atacando com o machado causando 50 de dano");
  });
  it("should fail using attack method", () => {
    machado.durability = 0;
    expect(machado.attack()).toBe("não é possivel atacar com o machado");
  });
});
