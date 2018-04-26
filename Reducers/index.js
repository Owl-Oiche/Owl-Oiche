import { combineReducers } from 'redux';
import activeTab from './activeTabs';
import searchBar from './searchBar';
import yelpRequests from './yelpRequests';
import isLoading from './isLoading';
import onDetailPage from './onDetailPage';
import businessHours from './businessHours';
import offSetCount from './offSetCount';
import location from './setLocation';

const rootReducer = combineReducers({
  activeTab,
  searchBar,
  isLoading,
  businesses: yelpRequests,
  onDetailPage,
  businessHours,
  offSetCount,
  location,
});

export default rootReducer;
