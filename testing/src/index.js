const cities = [
  'Ciudad de Mexico',
  'Bogota',
  'Medellin',
  'Lima',
  'Buenos Aires',
  'Guadalajara'
]

const randomString = () => (
  cities[Math.floor(Math.random() * cities.length)]
)

module.exports = randomString;
