import FETCH_RESTAURANTS_SUCCESS from '../Actions/yelpRequests';
import FETCH_RESTAURANTS_FAILURE from '../Actions/yelpRequests';

const state = {
  businesses: {
    restaurants: [],
    pharmacies: [],
    wifiSpots: [],
    miscs: {
      gasStations: [],
      groceries: [],
      laundryMats: [],
    },
    error: null,
  },
};

export default function(state=state, action) {
  switch (action.type) {
    case FETCH_RESTAURANTS_SUCCESS:
      return { ...state, restaurants: action.payload };
    case FETCH_RESTAURANTS_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
