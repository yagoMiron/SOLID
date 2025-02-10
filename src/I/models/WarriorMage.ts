import { IMage } from "./IMage";
import { IWarrior } from "./IWarrior";

export class WarriorMage implements IWarrior, IMage {
  public isInRage: boolean = false;
  public mana: number = 800;

  castSpell(manaCost: number, spellDamage: number): number {
    if (manaCost > this.mana) {
      return 0;
    }
    this.mana - manaCost;
    return spellDamage * 0.8;
  }
  attack(weaponDamage: number): number {
    return this.isInRage ? weaponDamage * 1.6 : weaponDamage * 0.8;
  }
  getInRage(): void {
    this.isInRage = true;
  }
}
