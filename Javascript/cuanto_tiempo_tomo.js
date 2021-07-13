//Determina si la función de Fibonacci iterativa o recursiva es más rápida
// recursive
function rFib(n) {
  if (n < 2) {
    return n;
  }
  return rFib(n - 1) + rFib(n - 2);
}
console.log(rFib(20)); //loguea 6765 en 0.231 segundos

// iterative
function iFib(n) {
  const vals = [0, 1];
  while (vals.length - 1 < n) {
    let len = vals.length;
    vals.push(vals[len - 1] + vals[len - 2]);
  }
  return vals[n];
}
console.log(iFib(20)); // loguea 6765 en 0.218 segundos

//de manera iterativa es mas facil ya que con un while loop tiene una complejidad de tiempo de O(N)
//de manera recursiva es mas lento ya que tiene una complejidad de tiempo de O(2^N)

//Escribe una función más eficiente para invertir una cadena
const story =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!"
    .split("")
    .reverse()
    .join("");

console.log(story);
