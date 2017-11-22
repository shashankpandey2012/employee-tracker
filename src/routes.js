import React from 'react';
import { Route, IndexRoute,Router } from 'react-router';
import App from './containers/App';
import Office from './containers/Office';
import Welcome from './containers/Welcome';



export default store => (

        <Route path="/" component={App}>
            <IndexRoute component={Welcome}/>
            <Route path="/office" component={Office}/>
        </Route>


)
