import {createStore, applyMiddleware} from 'redux';
import {persistStore} from 'redux-persist';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlerWare=[];

if(process.env.NODE_ENV === 'development'){
    middlerWare.push(logger);
}

export const store=createStore(rootReducer,applyMiddleware(...middlerWare));

export const persistor=persistStore(store);
