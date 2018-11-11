import {createStore, combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleWare from 'redux-saga'
import toggleView from '../Ducks/View';
const sagaMiddleWare = createSagaMiddleWare();

const rootReducer = combineReducers({
    toggleView
});


const store = createStore(
    rootReducer, composeWithDevTools(
        applyMiddleware(sagaMiddleWare)
    ));

export default store;