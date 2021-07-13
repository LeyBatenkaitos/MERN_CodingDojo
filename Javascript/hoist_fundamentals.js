//!1
//se crea la variable hello y se le agrega una cadena de string que dice: world
var hello = "world";
//se hace un console log a la variable.
console.log(hello);

//!2
//se crea la variable needle con una cadena de string
var needle = "haystack";
//se crea una funcion test
function test() {
  //la funcion test crea una variable needle y le asigna una cadena de string
  var needle = "magnet";
  //se hace console log a la variable needle.
  console.log(needle);
}
//llama a la funcion y el resultado es "magnet"
test();

//!3
//se crea una variable llamada brenda con una cadena de string que dice super cool
var brendan = "super cool";
//se crea una variable llamada print, mas no se llama la variable
function print() {
  //declara que la variable brendan ahora tiene otra cadena de strings
  var brendan = "only okay";
  //hace console log a brendan
  console.log(brendan);
}
//hace console log a brendan y loguea : "super cool"
console.log(brendan);

//!4
//crea una variable food con una cadena de string chicken
var food = "chicken";
//crea un console log y loguea chicken
console.log(food);
//crea una funcion eat
function eat() {
  //dentro de la funcion cambia el valor de food: chicken a half-chicken
  food = "half-chicken";
  //hace un log de food
  console.log(food);
  //cambia el valor de food: half-chicken a gone
  var food = "gone";
  console.log(food);
}
//llama a la funcion eat
eat();

//!5
console.log(food); //undefined

// Se crea una variable mean con una funcion
var mean = function () {
  //dentro de la funcion se coloca una variable local food que tiene una cadena de string de contenido
  food = "chicken";
  //se hace console log logueando chicken
  console.log(food);
  // se cambia la cadena de string de food: de chicken a fish
  var food = "fish";
  //se hace console log logueando fish
  console.log(food);
};
//se ejecuta la funcion
mean();
//no retorna nada ya que food no esta definido
//console.log(food);

//!6

console.log(genre); //undefined
var genre = "disco"; //se crea la variable genre con una cadena de string
function rewind() {
  //se crea la funcion rewind
  genre = "rock"; //se cambia el valor de genere: de disco a Rock
  console.log(genre); //se loguea: rock
  var genre = "r&b"; //se cambia el valor de genere: de rock a r&b
  console.log(genre); //se loguea: r&b
}
rewind(); //se llama la funcion
console.log(genre); //se loguea: disco

//!7
dojo = "san jose"; //se crea la variable dojo con una cadena de string "san jose"
console.log(dojo); //se loguea "san jose"
learn(); //se ejecuta la funcion learn
function learn() {
  //se crea la funcion learn
  dojo = "seattle"; //se cambia el valor de dojo: de san jose a seattle
  console.log(dojo); //se loguea seattle
  var dojo = "burbank"; //cambia el valor de dojo: de seattle a burbank
  console.log(dojo); //se loguea burbank
}
console.log(dojo); //se loguea san jose

//!8.
console.log(makeDojo("Chicago", 65)); //{ name: 'Chicago', students: 65, hiring: true }
console.log(makeDojo("Berkeley", 0)); //{ name: 'closed for now', students: 0 }
function makeDojo(name, students) {
  const dojo = {};
  dojo.name = name;
  dojo.students = students;
  if (dojo.students > 50) {
    dojo.hiring = true;
  } else if (dojo.students <= 0) {
    dojo.name = "closed for now";
  }
  return dojo;
}
