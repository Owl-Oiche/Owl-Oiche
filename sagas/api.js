import axios from 'axios';

export function fetchYelpData(url) {
  return axios.get(url)
  .then(response => response.data.map(business => {
    business.key = business.id;
    return business;
  }))
  .catch(error => {
    console.log('(ᗒᗣᗕ) (•̀o•́)ง error', error);
    throw error;
  });
}
