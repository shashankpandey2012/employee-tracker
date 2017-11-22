import React, { Component } from 'react';
import { Chair, Filter, SearchBar, Table } from '../components';
import { connect } from 'react-redux';
import { ActionTypes } from '../utils/constants';

class Office extends Component {
    constructor(props){
        super(props);
    }

    componentWillMount() {
        ////console.log(("Hello Will Mount",this.props.table);
    }

    componentDidMount(){

    }

    render() {
        var Tables = [];
        for(var i =0;i<this.props.table.data.length;i++){
            Tables.push(<Table key={i}
                               num={i+1}
                               data={this.props.table.data[i]}
                               draggedChair={this.props.table.dragged}
                               hoverdetails={this.props.table.hoverdetails}
                               dragEmployee={this.props.onDragEmployee}
                               dragOverChair={this.props.onDragOver}
                               dragLeaveChair={this.props.onDragLeave}
                               dropEmployee={this.props.onDropEmployee}
                               hoverEmployee={this.props.onMouseOver}
                               closeHover={this.props.onMouseLeave}/>)
        }
        return (
            <div>
               <div className="filter_options disp_inli">
                   <SearchBar searchByName={this.props.searchByName}/>
                   <Filter open={this.props.filter.filterOpened} selectedOption={this.props.filter.selectedOption} clickButton={this.props.onFilterClicked} teams={this.props.filter.teams} loadTeam={ this.props.loadTeam} mapTeam={this.props.mapTeam}/>
               </div>
                <div className="clr"></div>
                <div className="room_container" >
                    {Tables}
                </div>
                <div className="">
                    <div className="disp_inli">Occupied</div>
                    <div className="chair_container  disp_inli">
                        <Chair chairData={ {draggable:false, occupied:true} } dragged={false}/>
                    </div>

                    <div className="disp_inli">Vacant</div>
                    <div className="chair_container  disp_inli">
                        <Chair chairData={ {occupied:false} } dragged={false}/>
                    </div>
                </div>
                <div>
                    {this.props.table.notificationText}
                </div>
            </div>

        )
    }
}

const mapStateToProps = state => ({
    table: state.table,
    filter: state.filter
});

const mapDispatchToProps = dispatch => ({

    onDragEmployee: (tableIndex,chairIndex) => {
        dispatch({ type: ActionTypes.DRAG_START, payload:{ tableIndex, chairIndex }});
    },

    onDragOver: (tableIndex,chairIndex) => {
        dispatch({ type: ActionTypes.DRAG_OVER, payload:{ tableIndex, chairIndex }});
    },

    onDropEmployee: () => {
        dispatch({ type:ActionTypes.ON_DROP_REQUESTED, payload:null });
    },

    onDragLeave: () => {
        dispatch( {type: ActionTypes.DRAG_LEAVE,payload:null});
    },

    onReset: () => {
        dispatch({ type: ActionTypes.RESET, payload:null });
    },

    loadTeam: () => {
        dispatch({ type: ActionTypes.FETCH_TEAM_REQUESTED, payload:null });
    },

    mapTeam: (team_id,checked) => {
        dispatch({ type: ActionTypes.MAP_TEAM_REQUESTED,payload:{team_id,checked}});
    },

    onFilterClicked: (status) => {
        dispatch({ type: ActionTypes.FILTER_CLICKED,payload:status});
    },

    onMouseOver: (tableIndex,chairIndex) => {
        dispatch({ type: ActionTypes.ON_MOUSE_OVER,payload:{tableIndex,chairIndex}});
    },

    onMouseLeave: (tableIndex,chairIndex)  => {
        dispatch({ type: ActionTypes.ON_MOUSE_LEAVE,payload:{tableIndex,chairIndex}});
    },

    searchByName: (text) => {
        dispatch({ type: ActionTypes.SEARCH_BY_NAME, payload:text });
    }

});

export default connect(mapStateToProps, mapDispatchToProps)(Office)
