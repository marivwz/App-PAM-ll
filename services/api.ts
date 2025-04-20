// ✅ CORRETO para importação sem chaves
const fetchCharacters = async () => {
  try {
    const response = await fetch("https://api-dattebayo.vercel.app/api/character");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao buscar personagens:", error);
    return [];
  }
};

export default fetchCharacters;
