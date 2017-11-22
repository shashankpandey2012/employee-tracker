import React, { Component } from 'react';

export default class SearchBar extends Component{
    constructor(props){
        super(props);
        this.getChange = this.getChange.bind(this);
    }

    getChange(){
        var value = document.getElementById('search').value;
        console.log(value);
        if(value && value.trim().length > 0){
            this.props.searchByName(value.toLowerCase());
        }
    }
    render(){

        return (
            <div className="input_container">
                <input id='search' type="text" className="input" name="search" placeholder="Search by name.." onChange={this.getChange}/>
            </div>
        )
    }
}
