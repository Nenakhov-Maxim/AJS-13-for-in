import Bowerman from '../Bowerman';
import Zombie from '../Zombie';
import Undead from '../Undead';
import Swordsman from '../Swordsman';
import Magician from '../Magician';
import Daemon from '../Daemon';

// Проверка создания класса
test('check Boweman', () => {
  expect(new Bowerman('Петя').printCharter()).toBe('health: 100, level: 1, Атака/защита: Bowman:25/25');
});
test('check Zombie', () => {
  expect(new Zombie('Петя').printCharter()).toBe('health: 100, level: 1, Атака/защита: Zombie:40/10');
});
test('check Undead', () => {
  expect(new Undead('Петя').printCharter()).toBe('health: 100, level: 1, Атака/защита: Undead:25/25');
});
test('check Swordsman', () => {
  expect(new Swordsman('Петя').printCharter()).toBe('health: 100, level: 1, Атака/защита: Swordsman:40/10');
});
test('check Magician', () => {
  expect(new Magician('Петя').printCharter()).toBe('health: 100, level: 1, Атака/защита: Magician:10/40');
});
test('check Daemon', () => {
  expect(new Daemon('Петя').printCharter()).toBe('health: 100, level: 1, Атака/защита: Daemon:10/40');
});
// Проверка на неправильный тип имени
test('check wrong type name', () => {
  expect(() => {
    const bowerman = new Bowerman('Петя');
    bowerman.checkName(111);
  }).toThrow();
});
// Проверка на неправильный класс персонажа
test('check wrong type class', () => {
  expect(() => {
    const bowerman = new Bowerman('Петя');
    bowerman.checkType('Ослик');
  }).toThrow();
});
// Проверка на неправильное кол-во символов в имени
test('to long name', () => {
  expect(() => {
    const bowerman = new Bowerman('Петя');
    bowerman.checkName('Оченьдлинноеимяперсонажа');
  }).toThrow();
});
test('to short name', () => {
  expect(() => {
    const bowerman = new Bowerman('Петя');
    bowerman.checkName('o');
  }).toThrow();
});
// Получение урона
test('test damage', () => {
  const bowerman = new Bowerman('Петя');
  bowerman.damage(15);
  expect(bowerman.health).toBe(88.75);
});
// Получение урона, если не передан параметр
test('test damage wrong parameter', () => {
  expect(() => {
    const bowerman = new Bowerman('Петя');
    bowerman.damage();
  }).toThrow();
});
// Повышение уровня
test('test levelUp', () => {
  const bowerman = new Bowerman('Петя');
  bowerman.levelUp();
  expect(bowerman.level).toBe(2);
  expect(bowerman.attack).toBe(30);
  expect(bowerman.defence).toBe(30);
  expect(bowerman.health).toBe(100);
});
// Повышение уровня при здоровье = 0
test('test wrong levelUp', () => {
  expect(() => {
    const bowerman = new Bowerman('Петя');
    bowerman.health = 0;
    bowerman.levelUp();
  }).toThrow();
});
