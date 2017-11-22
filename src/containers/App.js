import React, { Component } from 'react';

import { connect } from 'react-redux';
import { browserHistory,Link } from 'react-router';
import { isEqual, isEmpty } from 'lodash/lang';


export default class App extends Component {
    componentWillMount() {

    }

    render() {
        const childrenWithProps = React.Children.map(this.props.children, (child) => {
            return React.cloneElement(child, {
                location
            });
        });

        return (
            <div>
                {childrenWithProps}
            </div>
        )
    }
}






