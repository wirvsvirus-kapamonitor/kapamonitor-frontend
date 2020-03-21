import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { swapThemeColors, toggleThemeMode } from '../store/reducers/settings';

const Register = props => (
    <div>
        <Typography variant="headline">Register</Typography>
        <Card>
            <CardContent>
                <Typography>

                </Typography>
            </CardContent>
        </Card>
    </div>
);

const mapStateToProps = state => {
    return {
        settings: state.settings
    };
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
)(Register);
