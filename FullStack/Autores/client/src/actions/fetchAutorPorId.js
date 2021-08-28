const fetchAutoresPorId = async (id) => {
  try {
    const resultado = await fetch(`/api/autores/${id}`);
    const parsed = await resultado.json();
    if (!resultado.ok) throw new Error(parsed.message);
    return { success: true, data: parsed };
  } catch (err) {
    console.log({ error: err });
    return { success: false, message: err };
  }
};

export default fetchAutoresPorId;
