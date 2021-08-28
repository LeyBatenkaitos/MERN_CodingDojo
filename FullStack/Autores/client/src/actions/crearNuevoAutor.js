const crearNuevoAutor = async (payload) => {
  try {
    const resultado = await fetch("/api/autores/nuevo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const objeto = await resultado.json();
    if (!resultado.ok) throw new Error(objeto.message);
    return { success: true };
  } catch (err) {
    console.log({ error: err });
    return { success: false, message: err };
  }
};

export default crearNuevoAutor;
