import axios from "axios";

export const personagensRickMorty = async () => {
  const url = "https://rickandmortyapi.com/api/character";
  const result = await axios.get(url);
  console.log(result);
  return result;
};
