import { IArcher } from "./IArcher";
import { IMage } from "./IMage";

export class ArcherMage implements IArcher, IMage {
  public arrows: number = 20;
  public mana: number = 800;

  castSpell(manaCost: number, spellDamage: number): number {
    if (manaCost > this.mana) {
      return 0;
    }
    this.mana - manaCost;
    return spellDamage * 0.8;
  }
  shootArrows(): number {
    if (this.arrows == 0) {
      return 0;
    }
    return 100 * 0.8;
  }
}
