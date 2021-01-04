const string = "Hola Mundo";
const fruits = ['manzana', 'melon', 'banana'];
const number = 10;

test("Debe contener Mundo", () => {
  expect(string).toMatch(/Mundo/);
})

test('Tenemos una banana?', () => {
  expect(fruits).toContain('banana');
})

test('Mayor que 5', () => {
  expect(number).toBeGreaterThan(5);
});

test('Verdadero', () => {
  expect(true).toBeTruthy;
})

const reverseString = (str, callback = () => {}) => {
  const reversed = str.split("").reverse().join("");
  callback(reversed);
  return reversed;
}

test("Probar un callback", () => {
  reverseString('Hola', (str) => {
    expect(str).toBe('aloH')
  })

  expect(reverseString('aloH')).toBe('Hola')
})

const reverseString2 = (str) => (
  new Promise((resolve, reject) => {
    if(!str) {
      reject(Error('Error'))
    }

    resolve(str.split("").reverse().join(""));
  })
)

test("Probar una promesa", () => {
  reverseString2('hola')
    .then(string => {
      expect(string).toBe('aloh');
    })
});

test('Probar async/await', async () => {
  const string = await reverseString2('hola');
  expect(string).toBe('aloh');
})
