const faker = require("faker");

class Empresa {
  constructor() {
    this.id = faker.datatype.uuid();
    this.nombre = faker.company.companyName();
    this.direccion = {
      calle: faker.address.streetAddress(),
      ciudad: faker.address.cityName(),
      estado: faker.address.state(),
      postal: faker.address.zipCode(),
      pais: faker.address.countryCode(),
    };
  }
}

module.exports = Empresa;
