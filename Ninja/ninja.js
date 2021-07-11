class ninja {
  constructor(nombre, salud = 0, velocidad = 3, fuerza = 3) {
    this.nombre = nombre;
    this.salud = salud;
    this.fuerza = fuerza;
    this.velocidad = velocidad;
  }
  sayName() {
    console.log(this.nombre);
  }
  showStats() {
    const { nombre, salud, velocidad, fuerza } = this;
    console.log({ nombre, salud, velocidad, fuerza });
  }
  drinkSake() {
    this.salud += 10;
  }
}
const ninja1 = new ninja("Josuke");

console.table(ninja1);
ninja1.sayName();
ninja1.drinkSake();
ninja1.showStats();
