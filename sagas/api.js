import axios from 'axios';

export function fetchRestaurants(url) {
  return axios.get(url)
  .then(response => response.data)
  .catch(error => {
    console.log('(ᗒᗣᗕ) (•̀o•́)ง error', error);
    throw error;
  });
}
