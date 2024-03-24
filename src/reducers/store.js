import { combineReducers } from 'redux';
import { legacy_createStore as createStore } from 'redux';    
import profile from './profile';

const rootReducer = combineReducers({
  profile: profile
});

const configureStore = () => {
  return createStore(
    rootReducer,
  );
};

export default configureStore;