import React, { Component, Fragment } from 'react'
import Navigation from '../components/UI/Navigation/Navigation';

class Layout extends Component {
    render() {
        return (
            <Fragment>
                <Navigation/>
                { this.props.children }
            </Fragment>
        )
    }
}

export default Layout
