import React, { Component } from 'react';

import Typography from '@material-ui/core/Typography';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Authenticate from 'react-openidconnect';
import { swapThemeColors, toggleThemeMode } from '../store/settings/settings';
import PaddingLayout from '../components/PaddingLayout';


var OidcSettings = {
    authority: "https://kapamonitordev.b2clogin.com/kapamonitordev.onmicrosoft.com/B2C_1_susi",
    client_id: "1a779c89-f148-4322-991b-bc94c99ddd88",
    redirect_uri: "http://localhost:3000/signin-oidc",
    post_logout_redirect_uri: 'http://localhost:3000/',
    response_type: "id_token token",
  
    scope: "https://kapamonitordev.onmicrosoft.com/devapi/user_impersonation",
    filterProtocolClaims: true,
    loadUserInfo: true
};

class SigninOidc extends Component {
    constructor(props) {
        super(props);
        this.userLoaded = this.userLoaded.bind(this);
        this.userUnLoaded = this.userUnLoaded.bind(this);

        this.state = { user: undefined };
    }

    userLoaded(user) {
        if (user)
            this.setState({ "user": user });
    }

    userUnLoaded() {
        this.setState({ "user": undefined });
    }

    NotAuthenticated() {
        return <div>You are not authenticated, please click here to authenticate.</div>;
    }
    render() {
        return (
            <PaddingLayout>
                <Typography variant="headline">Login</Typography>
                <Authenticate OidcSettings={OidcSettings} userLoaded={this.userLoaded} userunLoaded={this.userUnLoaded} renderNotAuthenticated={this.NotAuthenticated}>
                    <div>If you see this you are authenticated.</div>
                </Authenticate>
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
