import React, { Component } from 'react';

import Typography from '@material-ui/core/Typography';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { swapThemeColors, toggleThemeMode } from '../store/settings/settings';
import PaddingLayout from '../components/PaddingLayout';

import Oidc from 'oidc-client';
import axios from 'axios';


var OidcSettings = {};

class SigninOidc extends Component {
    constructor(props) {
        super(props);


    }

    componentDidMount() {

        var userManager = new Oidc.UserManager(); 
        userManager.signinCallback().then(res => {
            console.log(res);
        });
    }


    onButtonClick = () => {
        var config = {
            authority: "https://kapamonitordev.b2clogin.com/kapamonitordev.onmicrosoft.com/B2C_1_susi",
            client_id: "1a779c89-f148-4322-991b-bc94c99ddd88",
            redirect_uri: "http://localhost:3000/signin-oidc",
            post_logout_redirect_uri: 'http://localhost:3000/',
            response_type: "id_token token",
            response_type: "code",
            //scope: "https://kapamonitordev.onmicrosoft.com/devapi/user_impersonation",
            filterProtocolClaims: true,
            loadUserInfo: true
        };
        
        var userManager = new Oidc.UserManager(config);
        userManager.signinRedirect();
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