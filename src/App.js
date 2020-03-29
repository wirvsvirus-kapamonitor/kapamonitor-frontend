import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { connect } from 'react-redux';

import MainLayout from './layouts/MainLayout';
import EmptyLayout from './layouts/EmptyLayout';

import * as firebase from 'firebase';
import firebaseConfig from './firebaseConfig';
import { setUser } from './store/user/actions';
import LoginPage from './containers/LoginPage';
import SignUpPage from './containers/SignUpPage';

import Dashboard from './containers/Dashboard';
import Leaflet from './containers/Leaflet/Leaflet';
import Setting from './containers/Setting';
import Register from './containers/Register/Register';

firebase.initializeApp(firebaseConfig);

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

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged((user)=> {
          this.props.setUser(user)
        });
    }

    render() {
        // const { settings } = this.props;

        return (

            <>
                <CssBaseline/>
                {this.props.user ?
                    // <LoginPage/>

                       <MuiThemeProvider>
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
                            </MuiThemeProvider>:
                    <div style={{ height: '100vh' }}>

                        <Router>
                            <Switch>
                                <Route path="/login" component={LoginPage}/>
                                <Route path="/sign-up" component={SignUpPage}/>
                                <Route exact path="/" component={LoginPage}/>
                                <EmptyRoute component={NotFound}/>
                            </Switch>
                        </Router>
                    </div>
                }




            </>


        );
    }

}

const mapStateToProps = state => ({
    user: state.user

})
const mapDispatchToProps = {
    setUser
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
