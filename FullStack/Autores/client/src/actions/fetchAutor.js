const fetchAutor = async () => {
  try {
    const resultado = await fetch("/api/autores");
    const parsed = await resultado.json();
    if (!resultado.ok) throw new Error(parsed.message);
    return { success: true, data: parsed };
  } catch (err) {
    console.log({ error: err });
    return { success: false, message: err, data: [] };
  }
};

export default fetchAutor;
