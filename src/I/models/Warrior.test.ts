import { Warrior } from "./Warrior";

const guerreiro = new Warrior();
describe("Tests over ArcherMage class", () => {
  it("should correctly attack", () => {
    const danoCausado = guerreiro.attack(100);
    expect(danoCausado).toBe(100);
  });
  it("should correctly attack in rage", () => {
    guerreiro.getInRage();
    const danoCausado = guerreiro.attack(100);
    expect(danoCausado).toBe(200);
  });
});
