//!1

const cars = ["Tesla", "Mercedes", "Honda"];
const [randomCar] = cars;
const [, otherRandomCar] = cars;
//Predict the output
console.log(randomCar); //se loguea: Tesla
console.log(otherRandomCar); //se loguea: Mercedes

//!2

const employee = {
  name: "Elon",
  age: 47,
  company: "Tesla",
};
const { name: otherName } = employee;
//Predict the output
console.log(name); //no loguea nada ya que name como constante, no esta definido
console.log(otherName); //la consola loguea: Elon

//!3
const person = {
  name: "Phil Smith",
  age: 47,
  height: "6 feet",
};
const password = "12345";
const { password: hashedPassword } = person;
//Predict the output
console.log(password); //loguea:12345
console.log(hashedPassword); //loguea undefined

//!4
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [, first] = numbers;
const [, , , second] = numbers;
const [, , , , , , , , third] = numbers;
//Predict the output
console.log(first == second); //loguea: false
console.log(first == third); //Loguea: true

//!5
const lastTest = {
  key: "value",
  secondKey: [1, 5, 1, 8, 3, 3],
};
const { key } = lastTest;
const { secondKey } = lastTest;
const [, willThisWork] = secondKey;
//Predict the output
console.log(key); //loguea: value
console.log(secondKey); //loguea: [1,5,1,8,3,3]
console.log(secondKey[0]); //loguea: 1
console.log(willThisWork); //loguea: 5
