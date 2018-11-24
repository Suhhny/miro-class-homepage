import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
    render(){
        return (
            <Switch>
                <Route exact path = '/' component = { () => { "Project" } }/>
            </Switch>
        );
    }
}

// App.propTypes = {

// }

// App.defaultProps = {

// }

const mapStateToProps = (state) => {
    return {};
}

const mapDispatchToProps = (dispatch) => {
    return {};
}

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default withRouter(AppContainer);