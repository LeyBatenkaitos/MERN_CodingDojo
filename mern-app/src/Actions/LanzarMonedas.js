const lanzarMoneda = () => (Math.random() > 0.5 ? "heads" : "tails");
const fiveHeadsSync = () => {
  return new Promise((resolve, reject) => {
    let headsCount = 0;
    let attempts = 0;
    while (headsCount < 5) {
      attempts++;
      if (attempts > 100) reject(new Error("the limit is over 100 attemps :c"));
      let result = lanzarMoneda();
      console.log(`${result} was flipped`);
      if (result === "heads") {
        headsCount++;
      } else {
        headsCount = 0;
      }
    }
    resolve`It took ${attempts} tries to flip five "heads"`;
  });
};

fiveHeadsSync()
  .then((msj) => console.log(msj))
  .catch((err) => console.error(err));
//1:00:00