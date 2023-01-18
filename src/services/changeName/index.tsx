import axios from "axios";

export const updateName = async (name: string, id: number) => {
  const url = "https://63b8043c4d97e82aa3cc920d.mockapi.io/names";
  const result = await axios.put(`${url}/${id}`, { name: name });

  return result.data;
};
