import React, { Component } from 'react';

import Typography from '@material-ui/core/Typography';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { swapThemeColors, toggleThemeMode } from '../store/settings/settings';
import PaddingLayout from '../components/PaddingLayout';


var OidcSettings = {};

class SigninOidc extends Component {
    constructor(props) {
        super(props);


    }

    componentDidMount() {

    }


    onButtonClick = () => {
        console.log('hey')
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
