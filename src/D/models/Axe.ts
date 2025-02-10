import { IWeapon } from "./IWeapon";

export class Axe implements IWeapon {
  damage: number = 70;
  durability: number = 15;

  attack(): string {
    if (this.durability > 0) {
      this.durability -= 1;
      return `Atacando com o machado causando ${this.damage} de dano`;
    }
    return `não é possivel atacar com o machado`;
  }
}
