import { combineReducers } from 'redux';
import activeTab from './activeTabs';
import searchBar from './searchBar';

const rootReducer = combineReducers({
  activeTab, searchBar,
});
