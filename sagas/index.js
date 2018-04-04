import { call, put, takeLatest } from 'redux-saga/effects';

import { fetchRestaurants } from './api';
import { FETCH_RESTAURANTS_REQUEST,
         FETCH_RESTAURANTS_SUCCESS,
         FETCH_RESTAURANTS_FAILURE
} from '../Actions/yelpRequests';

function* fetchRestaurantsSaga({ payload }) {
  try {
    const restaurants = yield call(fetchRestaurants, payload);
  } catch (e) {

  }
}

function* mySaga() {
  yield takeLatest(FETCH_RESTAURANTS_REQUEST, fetchRestaurantsSaga);
}

export default mySaga;
