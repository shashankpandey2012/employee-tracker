import React, { Component } from 'react';
import { map } from 'lodash/collection';

export default class Filter extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const { open, selectedOption, teams,clickButton,loadTeam} = this.props;
        const teamsCheckBox = map(teams.data,(item,index)=>{
            return (

                    <li><input id={`${item.team_id}`} type='checkbox'  name='teams' value={item.team_id} onChange={()=>{this.props.mapTeam(item.team_id,document.getElementById(`${item.team_id}`).checked)}}/>{item.name}</li>


            )
        });
        return (
            <div className="filter_container">
                <br/>
                <div className="icon">
                    <i  onClick={()=> clickButton(!open)} className="fa fa-filter" aria-hidden="true">Click to Filter</i>
                </div>

                {open && <div>

                    <input type='radio' name='choices' value='1' onClick={()=>  loadTeam()}/>Team
                    <input type='radio' name='choices' value='2'/>Job Title
                    <br/>
                    ---------------------------------------------------
                    <br/>
                    {selectedOption === 1 && <ul className="checkbox-grid">{teamsCheckBox}</ul>}

                    </div>}

            </div>

        )
    }
}
