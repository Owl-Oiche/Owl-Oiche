import { combineReducers } from 'redux';
import activeTab from './activeTabs';
import searchBar from './searchBar';
import yelpRequests from './yelpRequests';

const rootReducer = combineReducers({
  activeTab,
  searchBar,
  businesses: yelpRequests,
});

export default rootReducer;
