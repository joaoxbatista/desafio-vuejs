import axios from 'axios';
import { URL_API } from '@/utils/constants';
const RESOURCE_URL = `${URL_API}/tiposComunicados`;

export const getStatementTypes = async ({ commit }) => {
  return new Promise((resolve, reject) => {
    axios
      .get(RESOURCE_URL)
      .then((response) => {
        commit('SET_STATEMENT_TYPES', response.data);
        resolve(response.data);
      })
      .catch((error) => {
        reject(error.response.data);
      });
  });
};
