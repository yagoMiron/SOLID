import { ArcherMage } from "./ArcherMage";

const magoArqueiro = new ArcherMage();
describe("Tests over ArcherMage class", () => {
  it("should correctly cast a spell", () => {
    const danoCausado = magoArqueiro.castSpell(200, 100);
    expect(danoCausado).toBe(80);
  });
  it("should correctly throw a arrow", () => {
    const danoCausado = magoArqueiro.shootArrows();
    expect(danoCausado).toBe(80);
  });
  it("should fail to cast a spell", () => {
    magoArqueiro.mana = 0;
    const danoCausado = magoArqueiro.castSpell(200, 100);
    expect(danoCausado).toBe(0);
  });
  it("should fail to throw a arrow", () => {
    magoArqueiro.arrows = 0;
    const danoCausado = magoArqueiro.shootArrows();
    expect(danoCausado).toBe(0);
  });
});
