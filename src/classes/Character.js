export default class Character {
  constructor(name, health, strength, agility, intelligence, weapon) {
    this.name = name;
    this.health = health;
    this.strength = strength;
    this.agility = agility;
    this.intelligence = intelligence;
    this.weapon = weapon;
  }

  getStats() {
    return {
      name: this.name,
      health: this.health,
      strength: this.strength,
      agility: this.agility,
      intelligence: this.intelligence,
      weapon: this.weapon
    }
  }

  setWeapon(weapon) {
    this.weapon = weapon;
  }
}