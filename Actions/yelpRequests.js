export const FETCH_RESTAURANTS_REQUEST = 'fetch_restaurants_request';
export const FETCH_RESTAURANTS_SUCCESS = 'fetch_restaurants_success';
export const FETCH_RESTAURANTS_FAILURE = 'fetch_restaurants_failure';

export function fetchRestaurantsRequest(url) {
  return {
    type: FETCH_RESTAURANTS_REQUEST,
    payload: url,
  };
};
