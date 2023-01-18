import axios from "axios";

export const randomNames = async () => {
  const url = "https://63b8043c4d97e82aa3cc920d.mockapi.io/names";
  const result = await axios.get(url);

  return result;
};
