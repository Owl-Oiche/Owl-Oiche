import shuffle from 'lodash.shuffle';

import {
  FETCH_RESTAURANTS_SUCCESS,
  FETCH_RESTAURANTS_FAILURE,
  FETCH_PHARMACIES_SUCCESS,
  FETCH_PHARMACIES_FAILURE,
  FETCH_WIFI_SPOTS_SUCCESS,
  FETCH_WIFI_SPOTS_FAILURE,
  FETCH_GAS_SUCCESS,
  FETCH_GAS_FAILURE,
  FETCH_GROCERIES_SUCCESS,
  FETCH_GROCERIES_FAILURE,
  FETCH_LAUNDROMATS_SUCCESS,
  FETCH_LAUNDROMATS_FAILURE,
} from '../Actions/yelpRequests';

import { CREATE_MISC } from '../Actions/miscs';

const initialState = {
  restaurants: [],
  pharmacies: [],
  wifiSpots: [],
  gasStations: [],
  groceries: [],
  laundromats: [],
  error: null,
  misc: [],
};

export default function(state=initialState, action) {
  switch (action.type) {
    case FETCH_RESTAURANTS_SUCCESS:
      return { ...state, restaurants: action.payload };
    case FETCH_RESTAURANTS_FAILURE:
      return { ...state, error: action.payload };
    case FETCH_PHARMACIES_SUCCESS:
      return { ...state, pharmacies: action.payload };
    case FETCH_PHARMACIES_FAILURE:
      return { ...state, error: action.payload };
    case FETCH_WIFI_SPOTS_SUCCESS:
      return { ...state, wifiSpots: action.payload };
    case FETCH_WIFI_SPOTS_FAILURE:
      return { ...state, error: action.payload };
    case FETCH_GAS_SUCCESS:
      return { ...state, gasStations: action.payload };
    case FETCH_GAS_FAILURE:
      return { ...state, error: action.payload };
    case FETCH_GROCERIES_SUCCESS:
      return { ...state, groceries: action.payload };
    case FETCH_GROCERIES_FAILURE:
      return { ...state, error: action.payload };
    case FETCH_LAUNDROMATS_SUCCESS:
      return { ...state, laundromats: action.payload };
    case FETCH_LAUNDROMATS_FAILURE:
      return { ...state, error: action.payload };
    case CREATE_MISC:
      const copiedState = { ...state };
      const miscArr = shuffle(copiedState.gasStations.concat(copiedState.groceries, copiedState.laundromats));
      return { ...state, misc: miscArr };
    default:
      return state;
  }
}
