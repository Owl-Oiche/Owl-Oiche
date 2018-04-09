import { combineReducers } from 'redux';
import activeTab from './activeTabs';
import searchBar from './searchBar';
import yelpRequests from './yelpRequests';
import isLoading from './isLoading';

const rootReducer = combineReducers({
  activeTab,
  searchBar,
  isLoading,
  businesses: yelpRequests,
});

export default rootReducer;
