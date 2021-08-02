export default async function fetchPokemon() {
  try {
    const respuesta = await fetch(
      "https://pokeapi.co/api/v2/pokemon?offset=0&limit=900"
    );
    if (!respuesta.ok) throw new Error(`La respuesta es ${respuesta.status}`);
    const jsObject = await respuesta.json();
    return jsObject.results;
  } catch (err) {
    console.error(err);
    return [];
  }
}
