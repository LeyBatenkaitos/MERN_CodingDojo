const Ninja = require("../Ninja/Ninja");

class Sensei extends Ninja {
  constructor(nombre) {
    super(nombre);
    this.sabiduria = 10;
    this.salud = 200;
    this.velocidad = 10;
    this.fuerza = 10;
  }
  speakWisdom() {
    this.drinkSake();
    console.log(
      `Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.`
    );
  }
  showStats() {
    const { sabiduria } = this;
    return { ...super.showStats(), sabiduria };
  }
}

const yamadaSensei = new Sensei("Shingeki Yamada");
/*console.table({ yamadaSensei });
yamadaSensei.sayName();
yamadaSensei.showStats();
yamadaSensei.speakWisdom();*/
