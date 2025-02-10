export interface IMage {
  mana: number;
  castSpell(manaCost: number, spellDamage: number): number;
}
