class Carta {
  constructor(nombre, costo) {
    this.nombre = nombre;
    this.costo = costo;
  }
}

class Unidad extends Carta {
  constructor(nombre, costo, poder, res) {
    super(nombre, costo);
    this.poder = poder;
    this.res = res;
  }
  ataque(enemigo) {
    if (!Boolean(enemigo instanceof Unidad))
      throw new Error("Tiene que ser una Unidad");
    enemigo.res = enemigo.res - this.poder;
  }
}

class Efecto extends Carta {
  constructor(nombre, costo, texto, stat, magnitud) {
    super(nombre, costo);
    this.texto = texto;
    this.stat = stat;
    this.magnitud = magnitud;
  }
  aplicar(recipiente) {
    if (recipiente instanceof Unidad) {
      if (this.stat === "res") recipiente.res += this.magnitud;
      if (this.stat === "poder") recipiente.poder += this.magnitud;
      /*en clase se pudo utilizar la propiedad para accesar a objetos dinamicos
       recipiente[this.stat] += this.magnitud;*/
    } else throw new Error("Tiene que ser una unidad");
  }
}

ninjaRojo.ataque(ninjaNegro);
const algoritDif = new Efecto(
  "Algoritmo Dificil",
  2,
  "	aumentar la resistencia del objetivo en 3",
  "Resiliencia",
  3
);
const rechazoPromesa = new Efecto(
  "Rechazo de promesa no manejado",
  1,
  "	reducir la resistencia del objetivo en 2",
  "Resiliencia",
  -2
);
const programacionPareja = new Efecto(
  "Programacion en pareja",
  3,
  "	aumentar el poder del objetivo en 2",
  "Poder",
  2
);

//turno 1
//El jugador 1 convoca a "Ninja Cinturón Rojo"
const ninjaRojo = new Unidad("Ninja Cinturon Rojo", 3, 3, 4);
//El jugador 1 juega "Algoritmo duro" en "Ninja Cinturón Rojo"
algoritDif.aplicar(ninjaRojo);
//El jugador 2 convoca a "Ninja Cinturón Negro"
const ninjaNegro = new Unidad("Ninja Cinturon Negro", 4, 5, 4);
//El jugador 2 juega "Rechazo de promesa no controlada" en "Ninja Cinturón Rojo"
rechazoPromesa.aplicar(ninjaRojo);
//El jugador 1 juega "Programación en pareja" en "Ninja Cinturón Rojo"
programacionPareja.aplicar(ninjaRojo);
//El jugador 1 tiene el ataque "Ninja Cinturón Rojo" "Ninja Cinturón Negro"
ninjaRojo.ataque(ninjaNegro);
