import { IWarrior } from "./IWarrior";

export class Warrior implements IWarrior {
  public isInRage: boolean = false;

  attack(weaponDamage: number): number {
    return this.isInRage ? weaponDamage * 2 : weaponDamage;
  }
  getInRage(): void {
    this.isInRage = true;
  }
}
