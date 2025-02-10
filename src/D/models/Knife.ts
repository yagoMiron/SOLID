import { IWeapon } from "./IWeapon";

export class Knife implements IWeapon {
  damage: number = 10;
  durability: number = 10;

  attack(): string {
    if (this.durability > 0) {
      this.durability -= 1;
      return `Atacando com a faca causando ${this.damage} de dano`;
    }
    return `não é possivel atacar com a faca`;
  }
}
