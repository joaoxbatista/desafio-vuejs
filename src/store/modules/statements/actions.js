import axios from 'axios';
import { URL_API } from '@/utils/constants';
const RESOURCE_URL = `${URL_API}/comunicados`;

export const getStatements = ({ commit }) => {
  return new Promise((resolve, reject) => {
    axios
      .get(RESOURCE_URL)
      .then((response) => {
        commit('SET_STATEMENTS', response.data);
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const updateStatement = (_, statement) => {
  return new Promise((resolve, reject) => {
    axios
      .put(`${RESOURCE_URL}/${statement.id}`, statement)
      .then((response) => {
        getStatements();
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
