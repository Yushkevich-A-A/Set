import { Character } from './tamplate_character/Character';

export class Magician extends Character {
  constructor(name) {
    super(name, 'Magician');

    this.attack = 10;
    this.defence = 40;
  }
}
