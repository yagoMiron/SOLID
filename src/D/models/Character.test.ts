import { Axe } from "./Axe";
import { Character } from "./Character";

describe("Tests over Character class", () => {
  it("should instantiate a new Character and useWeapon correctly", () => {
    const machado = new Axe();
    const personagem = new Character("João da Silva", 300, machado);
    expect(personagem.useWeapon()).toBe(
      "Atacando com o machado causando 70 de dano"
    );
  });
});
