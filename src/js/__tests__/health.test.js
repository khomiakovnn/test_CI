import health from '../health.js';

const datalist = [
  ['critical', { name: 'Маг', health: 10 }],
  ['wounded', { name: 'Маг', health: 20 }],
  ['healthy', { name: 'Маг', health: 60 }],
];

const handler = test.each(datalist);

handler('healthtest for %s status', (healthType, person) => {
  const result = health(person);
  expect(result).toBe(healthType);
});
