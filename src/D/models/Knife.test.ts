import { Knife } from "./Knife";

const faca = new Knife();
describe("Tests over Axe class", () => {
  it("should correctly use attack method", () => {
    faca.damage = 50;
    expect(faca.attack()).toBe("Atacando com a faca causando 50 de dano");
  });
  it("should fail using attack method", () => {
    faca.durability = 0;
    expect(faca.attack()).toBe("não é possivel atacar com a faca");
  });
});
