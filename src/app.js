import store from './store';

//window.store = store;

store.subscribe(() => console.log(store.getState()))

import './ConMain';
import './Lang';

