import React, { Component } from 'react';

import Typography from '@material-ui/core/Typography';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { swapThemeColors, toggleThemeMode } from '../store/settings/settings';
import PaddingLayout from '../components/PaddingLayout';
import * as firebase from 'firebase'

var OidcSettings = {};
var provider = new firebase.auth.EmailAuthProvider();


class SigninOidc extends Component {
    constructor(props) {
        super(props);


    }

    componentDidMount() {

    }


    onButtonClick = () => {
        console.log('hey')
        firebase.auth().signInWithPopup(provider).then(function (result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });
    }

    render() {
        return (
            <PaddingLayout>
                <Typography variant="headline">SignIn</Typography>
                <button onClick={this.onButtonClick}>Click!</button>
            </PaddingLayout>
        );
    }

}

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            toggleThemeMode: checked => toggleThemeMode(checked),
            swapThemeColors: checked => swapThemeColors(checked)
        },
        dispatch
    );
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SigninOidc);
