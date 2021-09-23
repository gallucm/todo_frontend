import { createStore, combineReducers, applyMiddleware, compose } from 'redux';     
import thunk from 'redux-thunk';
import { authReducer } from '../reducers/authReducer';

import { noteReducer } from '../reducers/noteReducer';
import { uiReducer } from '../reducers/uiReducer';
declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const reducers = combineReducers({
    note: noteReducer,
    ui: uiReducer,
    auth: authReducer
});

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);

export type RootState = ReturnType<typeof reducers>