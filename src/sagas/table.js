import { takeLatest } from 'redux-saga';
import { call, put, select } from 'redux-saga/effects';
import { ActionTypes } from '../utils/constants';
import { getTable } from '../selectors/table';

function* dragAndDropEmployee(action){
    try{
        const tables = yield select(getTable);

        let draggedTable = tables.draggedIndex[0];
        let draggedChair = tables.draggedIndex[1];

        let dropTableIndex = tables.dropIndex[0];
        let dropChairIndex = tables.dropIndex[1];

        let tempTable = {...tables};
        let employee = tables.data[draggedTable].chairs[draggedChair].employee;
        tempTable.data[dropTableIndex].chairs[dropChairIndex].employee = employee;
        tempTable.data[dropTableIndex].chairs[dropChairIndex].occupied = true;
        tempTable.data[draggedTable].chairs[draggedChair].employee = undefined;
        tempTable.data[draggedTable].chairs[draggedChair].occupied = false;
        let notificationText= `Your Employee ${employee.name} has just been shifted to ${tempTable.data[dropTableIndex].name}`;

        const payload = { data: tempTable.data, notificationText };

        yield put({
            type: ActionTypes.ON_DROP_SUCCESS,
            payload
        });
    }
    catch (error) {
        yield put({type: ActionTypes.ON_DROP_FAILURE, payload: false});
    }
}

function* mapTeam(action){
    try{
        const tables = yield select(getTable);
        let tempTables = {...tables};
        let data = tempTables.data;
        let checked = action.payload.checked;
        let team_id = action.payload.team_id;

        data.map((table,tableIndex)=>{
            table.chairs.map((chair,chairIndex)=>{
                if(chair.occupied){
                    if(chair.employee.team_id === team_id){
                        if(checked){
                            chair.matched = true;
                        }
                        else{
                            chair.matched = false;
                        }
                    }
                }
            })
        });
        const payload = { data };
        yield put({
            type: ActionTypes.MAP_TEAM_SUCCESS,
            payload
        });
    }
    catch(err){
        yield put({
            type: ActionTypes.MAP_TEAM_FAILED,
            payload:null
        });
    }

}

function* searchSaga(action){
    var nameToSearch = action.payload;
    const tables = yield select(getTable);
    yield put({
        type: ActionTypes.RESET,
        payload:null
    });
    let tempTable = {...tables};
    console.log(tempTable);
    var hoverDetails = undefined;
    tempTable.data.map((table,tableIndex)=>{
        table.chairs.map((chair,chairIndex)=>{
            if(chair.occupied){
                if(chair.employee.name.toLowerCase() === nameToSearch){
                    chair.matched = true;
                }
                else{
                    chair.matched = false;
                }
            }
        })
    });
    yield put({
        type: ActionTypes.SEARCH_SUCCESS,
        payload: { data: tempTable.data }
    })
}

function* tableSaga() {
    yield [
        /*takeLatest(ActionTypes.SHIFT_EMPLOYEE_REQUESTED, shiftEmployeeSaga),*/
        takeLatest(ActionTypes.ON_DROP_REQUESTED,dragAndDropEmployee),
        takeLatest(ActionTypes.MAP_TEAM_REQUESTED,mapTeam),
        takeLatest(ActionTypes.SEARCH_BY_NAME,searchSaga)
    ]
}
export default tableSaga
