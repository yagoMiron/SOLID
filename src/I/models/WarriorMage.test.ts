import { WarriorMage } from "./WarriorMage";

const guerreiroMago = new WarriorMage();
describe("Tests over ArcherMage class", () => {
  it("should correctly attack", () => {
    const danoCausado = guerreiroMago.attack(100);
    expect(danoCausado).toBe(80);
  });
  it("should correctly attack in rage", () => {
    guerreiroMago.getInRage();
    const danoCausado = guerreiroMago.attack(100);
    expect(danoCausado).toBe(160);
  });
  it("should correctly cast a spell", () => {
    const danoCausado = guerreiroMago.castSpell(200, 100);
    expect(danoCausado).toBe(80);
  });
  it("should fail to cast a spell", () => {
    guerreiroMago.mana = 0;
    const danoCausado = guerreiroMago.castSpell(200, 100);
    expect(danoCausado).toBe(0);
  });
});
