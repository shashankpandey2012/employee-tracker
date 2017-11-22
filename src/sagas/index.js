import { fork } from 'redux-saga/effects';
import tableSaga from './table';
import filterSaga from './filter';

function* rootSaga() {
    yield [
        fork(tableSaga),
        fork(filterSaga)
    ];
}

export default rootSaga;
