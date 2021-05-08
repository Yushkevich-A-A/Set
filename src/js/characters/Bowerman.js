import { Character } from './tamplate_character/Character';

export class Bowerman extends Character {
  constructor(name) {
    super(name, 'Bowman');

    this.attack = 25;
    this.defence = 25;
  }
}
