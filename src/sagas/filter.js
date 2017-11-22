import { takeLatest } from 'redux-saga';
import { call, put, select } from 'redux-saga/effects';
import { ActionTypes } from '../utils/constants';
import { teams } from '../api/config';
import { getFilter } from '../selectors/table';
import { findIndex } from 'lodash/array';

function* fetchTeam(action){
    try{

        //Call the API here if fetching Data from remote Server
        if(teams){
            let payload = { data: teams };
            yield put({
                type: ActionTypes.FETCH_TEAM_SUCCUSS,
                payload
            });
        }
        else{
            yield put({
                type: ActionTypes.FETCH_TEAM_FAILED,
                payload:null
            });
        }
    }
    catch (error) {
        yield put({
            type: ActionTypes.FETCH_TEAM_FAILED,
            payload:null
        });
    }
}

function* filterClick(action){
    yield put({
        type: ActionTypes.RESET,
        payload:null
    });
}

function* filterSaga() {
    yield [
        takeLatest(ActionTypes.FETCH_TEAM_REQUESTED,fetchTeam),
        takeLatest(ActionTypes.FILTER_CLICKED,filterClick)
    ]
}
export default filterSaga;
