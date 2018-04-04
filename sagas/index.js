import { call, put, takeLatest } from 'redux-saga/effects';

import { fetchYelpData } from './api';
import { FETCH_RESTAURANTS_REQUEST,
         FETCH_RESTAURANTS_SUCCESS,
         FETCH_RESTAURANTS_FAILURE,
         FETCH_PHARMACIES_REQUEST,
         FETCH_PHARMACIES_SUCCESS,
         FETCH_PHARMACIES_FAILURE,
         FETCH_WIFI_SPOTS_REQUEST,
         FETCH_WIFI_SPOTS_SUCCESS,
         FETCH_WIFI_SPOTS_FAILURE,
         FETCH_GAS_REQUEST,
         FETCH_GAS_SUCCESS,
         FETCH_GAS_FAILURE,
         FETCH_GROCERIES_REQUEST,
         FETCH_GROCERIES_SUCCESS,
         FETCH_GROCERIES_FAILURE,
         FETCH_LAUNDROMATS_REQUEST,
         FETCH_LAUNDROMATS_SUCCESS,
         FETCH_LAUNDROMATS_FAILURE
} from '../Actions/yelpRequests';

function* fetchRestaurantsSaga({ payload }) {
  try {
    const restaurants = yield call(fetchYelpData, payload);
    yield put({ type: FETCH_RESTAURANTS_SUCCESS, payload: restaurants });
  } catch (e) {
    yield put({ type: FETCH_RESTAURANTS_FAILURE, payload: e.message });
  }
}

function* fetchPharmaciesSaga({ payload }) {
  try {
    const pharmacies = yield call(fetchYelpData, payload);
    yield put({ type: FETCH_PHARMACIES_SUCCESS, payload: pharmacies });
  } catch (e) {
    yield put({ type: FETCH_PHARMACIES_FAILURE, payload: e.message });
  }
}

function* fetchWifiSpotsSaga({ payload }) {
  try {
    const wifi = yield call(fetchRestaurants, payload);
    yield put({ type: FETCH_WIFI_SPOTS_SUCCESS, payload: wifi });
  } catch (e) {
    yield put({ type: FETCH_WIFI_SPOTS_FAILURE, payload: e.message });
  }
}

function* fetchGasSaga({ payload }) {
  try {
    const gas = yield call(fetchRestaurants, payload);
    yield put({ type: FETCH_GAS_SUCCESS, payload: gas });
  } catch (e) {
    yield put({ type: FETCH_GAS_FAILURE, payload: e.message });
  }
}

function* fetchGroceriesSaga({ payload }) {
  try {
    const groceries = yield call(fetchRestaurants, payload);
    yield put({ type: FETCH_GROCERIES_SUCCESS, payload: groceries });
  } catch (e) {
    yield put({ type: FETCH_GROCERIES_FAILURE, payload: e.message });
  }
}

function* fetchLaundromatsSaga({ payload }) {
  try {
    const laundromats = yield call(fetchRestaurants, payload);
    yield put({ type: FETCH_LAUNDROMATS_SUCCESS, payload: laundromats });
  } catch (e) {
    yield put({ type: FETCH_LAUNDROMATS_FAILURE, payload: e.message });
  }
}

function* mySaga() {
  yield takeLatest(FETCH_RESTAURANTS_REQUEST, fetchRestaurantsSaga);
  yield takeLatest(FETCH_PHARMACIES_REQUEST, fetchPharmaciesSaga);
  yield takeLatest(FETCH_WIFI_SPOTS_REQUEST, fetchWifiSpotsSaga);
  yield takeLatest(FETCH_GAS_REQUEST, fetchGasSaga);
  yield takeLatest(FETCH_GROCERIES_REQUEST, fetchGroceriesSaga);
  yield takeLatest(FETCH_LAUNDROMATS_REQUEST, fetchLaundromatsSaga);
}

export default mySaga;
