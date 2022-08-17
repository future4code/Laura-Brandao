import axios from "axios";

const BASE_URL = "https://brainn-api-loterias.herokuapp.com/api/v1";

export const getLottery = async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}/loterias`);
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const getLotteryContests = async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}/loterias-concursos`);
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const getContestsById = async (id) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/concursos/${id}`);
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
