import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import { createLogger } from 'redux-logger';
import rootSaga from '../sagas';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

let middlewares;

if (process.env.NODE_ENV !== 'production') {
    const loggerMiddleware = createLogger();
    middlewares = applyMiddleware(sagaMiddleware, loggerMiddleware);
}
else {
    middlewares = applyMiddleware(sagaMiddleware);
    console.clear();
    //console.log( = function() {};
}


const finalCreateStore = composeEnhancers(
    middlewares,
)(createStore);

export default function configureStore(initialState) {
    const store = finalCreateStore(rootReducer, initialState);
    sagaMiddleware.run(rootSaga);
    return store;
}
