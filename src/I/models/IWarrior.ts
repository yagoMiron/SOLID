export interface IWarrior {
  isInRage: boolean;

  attack(weaponDamage: number): number;
  getInRage(): void;
}
