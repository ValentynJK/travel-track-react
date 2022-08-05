import { compose, legacy_createStore as createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'; // for logger middleware
import {
  persistStore, // creates persistor for given store 
  persistReducer //s enhance root reducer with persist configuration
} from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session'; // sessionStorage
import { rootReducer } from './root-reducer';
import thunk from 'redux-thunk'; // fora async actions

// persistor configuration
const persistConfig = {
  key: 'root',
  storage: storageSession,
  whitelist: ['forecast', 'places', 'photos', 'tips']
};

const persisterReducer = persistReducer(persistConfig, rootReducer);

// for catching state before hitting reducer
// process.env.NODE_ENV === 'development' for not logging in production mode
const middleWares = [process.env.NODE_ENV !== 'production' && logger, thunk].filter(Boolean);

// creates middleware: redux-logger
const composeEnhancers = compose(applyMiddleware(...middleWares));

// initializes store with persister reducer
export const store = createStore(persisterReducer, undefined, composeEnhancers);

// initializes persist store
export const persistor = persistStore(store)