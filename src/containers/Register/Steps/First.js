import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { swapThemeColors, toggleThemeMode } from '../../../store/reducers/settings';

import { Paper } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,

    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        backgroundColor: "#B2ACFA"
    },
}));




function First(props) {

    const classes = useStyles();

    return (

        <Paper  className={classes.paper}>


            <Typography variant="h5">
                First
            </Typography>
            <Typography variant="inherit">
                für Unternehmer, die über Unterbringungskapazitäten verfügen
            </Typography>



        </Paper>
    );
}

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
)(First);
