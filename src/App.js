import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { connect } from 'react-redux';

import Setting from './containers/Setting';

import MainLayout from './layouts/MainLayout';
import EmptyLayout from './layouts/EmptyLayout';
import Register from './containers/Register/Register';
import Dashboard from './containers/Dashboard';
import Leaflet from './containers/Leaflet/Leaflet';
import UserNotice from './components/UserNotice/UserNotice';
import Sponsors from "./containers/Sponsors";


const NotFound = () => {
    return <div>NotFound</div>;
};

const DashboardRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={matchProps => (
                <MainLayout>
                    <Component {...matchProps} />
                </MainLayout>
            )}
        />
    );
};

const EmptyRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={matchProps => (
                <EmptyLayout>
                    <Component {...matchProps} />
                </EmptyLayout>
            )}
        />
    );
};

class App extends Component {


    render() {
        // const { settings } = this.props;

        return (
            <MuiThemeProvider>
                <CssBaseline/>
                <div style={{ height: '100vh' }}>
                    <Router>
                        <Switch>
                            <DashboardRoute path="/dashboard" component={Dashboard}/>
                            <DashboardRoute path="/map" component={Leaflet}/>
                            <DashboardRoute path="/register" component={Register}/>
                            <DashboardRoute path="/setting" component={Setting}/>
                            <DashboardRoute path="/sponsors" component={Sponsors}/>>
                            <DashboardRoute exact path="/" component={Dashboard}/>
                            <EmptyRoute component={NotFound}/>
                        </Switch>
                    </Router>
                </div>
                <UserNotice/>
            </MuiThemeProvider>
        );
    }

}

const mapStateToProps = state => ({
    userNoticeConfirmed: state.userNoticeConfirmed

})

export default connect(
    mapStateToProps,
    null
)(App);
