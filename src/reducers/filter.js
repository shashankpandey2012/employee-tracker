import { ActionTypes } from '../utils/constants';

const initialState = {
    teamFetchRequested:false,
    teamFetchSuccess:false,
    teamFetchFailed:false,
    teams:[],

    //Filter
    filterOpened:false,
    selectedOption:-1,
    mapTeamIds:[]

};


export default function filterReducer (state = initialState, action){
    switch(action.type){

        case ActionTypes.FILTER_CLICKED:
            return {...state, filterOpened:action.payload, selectedOption:-1 };


        case ActionTypes.FETCH_TEAM_REQUESTED:
            return {...state,teamFetchRequested:true};

        case ActionTypes.FETCH_TEAM_SUCCUSS:
            return {...state, teams:action.payload,teamFetchRequested:false,teamFetchSuccess:true,selectedOption:1};

        case ActionTypes.FETCH_TEAM_FAILED:
            return {...state,teamFetchRequested:false,teamFetchFailed:true,selectedOption:-1};


        default:
            return state;
    }
}
