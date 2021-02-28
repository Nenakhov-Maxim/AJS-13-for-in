import orderByProps from '../app';

const obj = {
  name: 'мечник',
  health: 10,
  level: 2,
  attack: 80,
  defence: 40,
};

test('check1', () => {
  expect(orderByProps(obj)).toMatchObject(['key: name, value: мечник', 'key: health, value: 10', 'key: level, value: 2', 'key: attack, value: 80', 'key: defence, value: 40']);
});

test('check2', () => {
  expect(orderByProps(obj, ['level'])).toMatchObject(['key: level, value: 2', 'key: name, value: мечник', 'key: health, value: 10', 'key: attack, value: 80', 'key: defence, value: 40']);
});

test('check3', () => {
  expect(orderByProps(obj, ['level', 'attack'])).toMatchObject(['key: level, value: 2', 'key: attack, value: 80', 'key: name, value: мечник', 'key: health, value: 10', 'key: defence, value: 40']);
});

test('check3', () => {
  expect(orderByProps(obj, ['level', 'attack', 'secondName'])).toMatchObject(['key: level, value: 2', 'key: attack, value: 80', 'key: name, value: мечник', 'key: health, value: 10', 'key: defence, value: 40']);
});

test('check4', () => {
  expect(orderByProps()).toMatchObject([]);
});
