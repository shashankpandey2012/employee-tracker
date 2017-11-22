import React from 'react';
import { browserHistory, Link } from 'react-router';

const Welcome =()=> {
    return (
        <div >
            <h2>Welcome to Office</h2>
            <Link to={'/office'}><button>Click Here to See Your Employees</button></Link>
        </div>
    )
} ;

export default Welcome;
