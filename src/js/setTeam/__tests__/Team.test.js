import { Team } from '../Team';
import { Bowerman } from '../../characters/Bowerman';
import { Swordsman } from '../../characters/Swordsman';
import { Magician } from '../../characters/Magician';
import { Undead } from '../../characters/Undead';
import { Zombie } from '../../characters/Zombie';
import { Daemon } from '../../characters/Daemon';

const bawman = new Bowerman('Robin');
const swordsman = new Swordsman('Artur');
const magician = new Magician('Merlin');
const undead = new Undead('Drakula');
const zombie = new Zombie('Shaun');
const daemon = new Daemon('Lucifer');

test('при создании команды создается контейнер Set', () => {
  const team = new Team();

  expect(team.members).toEqual(new Set());
});

test('добавление участников команды', () => {
  const team = new Team();

  team.add(bawman);
  team.add(swordsman);

  expect(team.members).toEqual(new Set([bawman, swordsman]));
});

test('при повторном добавление участников в команду появляется ошибка', () => {
  const team = new Team();

  team.add(magician);

  expect(() => team.add(magician)).toThrowError();
});

test('добавление списка участников в команду', () => {
  const team = new Team();

  team.addAll(magician, undead, zombie, daemon, undead, zombie);

  expect(team.members).toEqual(new Set([magician, undead, zombie, daemon]));
});

test('добавление списка участников в команду c дублированием игроков не выдает ошибку', () => {
  const team = new Team();

  team.addAll(magician, undead, zombie, daemon, undead, zombie);

  expect(() => team.members).not.toThrowError();
});

test('преревод списка участников а массив', () => {
  const team = new Team();

  team.addAll(magician, undead, zombie, daemon, undead, zombie);

  const arrTeam = team.toArray();

  expect(arrTeam).toEqual([magician, undead, zombie, daemon]);
});
