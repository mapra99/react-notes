const randomStrings = require('../index');

describe('Probar funcionalidades de randomStrings', () => {
  test('probar la funcionalidad', () => {
    expect(typeof randomStrings()).toBe('string')
  });

  test('probar que no existe una ciudad', () => {
    expect(randomStrings()).not.toMatch(/Cordoba/)
  });
})
