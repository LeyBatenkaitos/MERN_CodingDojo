const eliminarAutor = async (id) => {
  try {
    const resultado = await fetch(`/api/autores/${id}`, {
      method: "DELETE",
    });
    const objeto = await resultado.json();
    if (!resultado.ok) throw new Error(objeto.message);
    return { success: true };
  } catch (err) {
    console.log({ error: err });
    return { success: false, message: err };
  }
};

export default eliminarAutor;
