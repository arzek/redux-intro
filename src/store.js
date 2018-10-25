import { createStore } from "redux";
import rootReducer from './reducer';
import { devToolsEnhancer } from 'redux-devtools-extension';
;
const store = createStore(rootReducer, devToolsEnhancer(
  // Specify custom devTools options
));

export default store;