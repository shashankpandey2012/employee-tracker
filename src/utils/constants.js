import keyMirror from 'keymirror';

export const ActionTypes = keyMirror({
    LOAD_TABLE_REQUESTED:null,
    LOAD_TABLE_SUCCESS:null,
    LOAD_TABLE_FAILED:null,

    //Drag Actions

    DRAG_CHAIR_REQUESTED:null,
    DRAG_CHAIR_SUCCESS:null,
    DRAG_CHAIR_FAILED:null,

    DRAG_START:null,
    DRAG_OVER:null,
    ON_DROP_REQUESTED:null,
    DRAG_LEAVE:null,
    RESET:null,
    ON_DROP_SUCCESS:null,
    ON_DROP_FAILURE:null,
    DRAG_END:null,

    //Team Relaetd Actions
    FETCH_TEAM_REQUESTED:null,
    FETCH_TEAM_SUCCUSS:null,
    FETCH_TEAM_FAILED:null,

    //Filter Related Actions
    FILTER_CLICKED:null,

    MAP_TEAM_REQUESTED:null,
    MAP_TEAM_SUCCESS:null,
    MAP_TEAM_FAILED:null,


    //Mouse Hover Actions
    ON_MOUSE_OVER:null,
    ON_MOUSE_LEAVE:null,

    SEARCH_BY_NAME:null,
    SEARCH_SUCCESS:null
});
