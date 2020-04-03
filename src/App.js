import React, { Component,useEffect,useState } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { connect } from 'react-redux';
import { MuiThemeProvider } from '@material-ui/core/styles';
import MainLayout from './layouts/MainLayout';
import EmptyLayout from './layouts/EmptyLayout';

import * as firebase from 'firebase';
import { config } from './config';
import { setUser } from './store/user/actions';
import LoginPage from './containers/LoginPage';
import SignUpPage from './containers/SignUpPage';

import Dashboard from './containers/Dashboard';
import Leaflet from './containers/Leaflet/Leaflet';
import Setting from './containers/Setting';
import Register from './containers/Register/Register';
import UserNotice from './components/UserNotice/UserNotice';

firebase.initializeApp(config.firebaseConfig);

const NotFound = () => {
    return <Redirect path="/login" component={LoginPage}/>;
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

function onAuthStateChange(callback) {
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            callback({loggedIn: true});
        } else {
            callback({loggedIn: false});
        }
    });
}
function App(props) {
    const [user, setUser] = useState( {loggedIn: false} );
    useEffect(() => {
        const unsubscribe = onAuthStateChange(setUser);
        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <>      {
            user.loggedIn ? <MuiThemeProvider>
                <CssBaseline/>
                <div style={{ height: '100vh' }}>
                    <Router>
                        <Switch>
                            <DashboardRoute path="/dashboard" component={Dashboard}/>
                            <DashboardRoute path="/map" component={Leaflet}/>
                            <DashboardRoute path="/register" component={Register}/>
                            <DashboardRoute path="/setting" component={Setting}/>
                            <DashboardRoute exact path="/" component={Dashboard}/>
                            <EmptyRoute component={NotFound}/>
                        </Switch>
                    </Router>
                </div>
                <UserNotice/>
            </MuiThemeProvider> : <div style={{ height: '100vh' }}>

                <Router>
                    <Switch>
                        <Route path="/login" component={LoginPage}/>
                        <Route path="/sign-up" component={SignUpPage}/>
                        <Route exact path="/" component={LoginPage}/>
                        <EmptyRoute component={NotFound}/>
                    </Switch>
                </Router>
            </div>
        }</>
    )


}

const mapStateToProps = state => ({


})
const mapDispatchToProps = {
    setUser
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
