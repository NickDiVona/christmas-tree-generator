import { combineReducers, createStore } from 'redux';
import { starCountReducer } from './reducers/starCountReducer';
import { treePropertiesReducer } from './reducers/treePropertiesReducer';

const rootReducer = combineReducers({
  starCount: starCountReducer,
  treeProperties: treePropertiesReducer
});

const store = createStore(rootReducer);

export default store;
