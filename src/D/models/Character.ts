import { IWeapon } from "./IWeapon";

export class Character {
  name: string;
  lifePoints: number;
  weapon: IWeapon;

  constructor(name: string, life: number, weapon: IWeapon) {
    this.name = name;
    this.lifePoints = life;
    this.weapon = weapon;
  }

  useWeapon() {
    console.log(this.weapon.attack());
  }
}
