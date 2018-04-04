export const FETCH_RESTAURANTS_REQUEST = 'fetch_restaurants_request';
export const FETCH_RESTAURANTS_SUCCESS = 'fetch_restaurants_success';
export const FETCH_RESTAURANTS_FAILURE = 'fetch_restaurants_failure';
export const FETCH_PHARMACIES_REQUEST = 'fetch_pharmacies_request';
export const FETCH_PHARMACIES_SUCCESS = 'fetch_pharmacies_success';
export const FETCH_PHARMACIES_FAILURE = 'fetch_pharmacies_failure';
export const FETCH_WIFI_SPOTS_REQUEST = 'fetch_wifi_spots_request';
export const FETCH_WIFI_SPOTS_SUCCESS = 'fetch_wifi_spots_success';
export const FETCH_WIFI_SPOTS_FAILURE = 'fetch_wifi_spots_failure';
export const FETCH_GAS_REQUEST = 'fetch_gas_request';
export const FETCH_GAS_SUCCESS = 'fetch_gas_success';
export const FETCH_GAS_FAILURE = 'fetch_gas_failure';
export const FETCH_GROCERIES_REQUEST = 'fetch_groceries_request';
export const FETCH_GROCERIES_SUCCESS = 'fetch_groceries_success';
export const FETCH_GROCERIES_FAILURE = 'fetch_groceries_failure';
export const FETCH_LAUNDROMATS_REQUEST = 'fetch_laundromats_request';
export const FETCH_LAUNDROMATS_SUCCESS = 'fetch_laundromats_success';
export const FETCH_LAUNDROMATS_FAILURE = 'fetch_laundromats_failure';

export function fetchRestaurantsRequest(url) {
  return {
    type: FETCH_RESTAURANTS_REQUEST,
    payload: url,
  };
};

export function fetchPharmaciesRequest(url) {
  return {
    type: FETCH_PHARMACIES_REQUEST,
    payload: url,
  };
};

export function fetchWifiSpotsRequest(url) {
  return {
    type: FETCH_WIFI_SPOTS_REQUEST,
    payload: url,
  };
};

export function fetchGasStationsRequest(url) {
  return {
    type: FETCH_GAS_REQUEST,
    payload: url,
  };
};

export function fetchGroceriesRequest(url) {
  return {
    type: FETCH_GROCERIES_REQUEST,
    payload: url,
  };
};

export function fetchLaundromatsRequest(url) {
  return {
    type: FETCH_LAUNDROMATS_REQUEST,
    payload: url,
  };
};
