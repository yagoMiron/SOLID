import { IWeapon } from "./IWeapon";

export class Sword implements IWeapon {
  damage: number = 50;
  durability: number = 40;

  attack(): string {
    if (this.durability > 0) {
      this.durability -= 1;
      return `Atacando com espada causando ${this.damage} de dano`;
    }
    return `não é possivel atacar com a espada`;
  }
}
