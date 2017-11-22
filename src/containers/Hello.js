import React, { Component } from 'react';
import { Chair, Filter, SearchBar, Table } from '../components'

export default class App extends Component {
    constructor(props){
        super(props);
    }

    componentWillMount() {
        console.log("Hello Will Mount");
    }

    render() {
        var Tables = [];
        for(var i =0;i<6;i++){
            Tables.push(<Table key={i} num={i+1}/>)
        }
        return (
            <div>
                Hello , There
                <SearchBar/>
                <Filter/>
                {Tables}
            </div>
        )
    }
}
