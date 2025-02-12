import { Sword } from "./Sword";

const espada = new Sword();
describe("Tests over Axe class", () => {
  it("should correctly use attack method", () => {
    espada.damage = 50;
    expect(espada.attack()).toBe("Atacando com a espada causando 50 de dano");
  });
  it("should fail using attack method", () => {
    espada.durability = 0;
    expect(espada.attack()).toBe("não é possivel atacar com a espada");
  });
});
