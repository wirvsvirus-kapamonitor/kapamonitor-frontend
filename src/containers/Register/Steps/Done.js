import React from 'react';
import Typography from '@material-ui/core/Typography';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { swapThemeColors, toggleThemeMode } from '../../../store/settings/settings';

const useStyles = makeStyles(theme => ({
    root: {
        marginTop:20,
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));


function Done(props) {

    const classes = useStyles();

    return (

        <div className={classes.root}>


            <Typography variant="inherit">
               Vielen Dank für die Registrierung!
            </Typography>


        </div>
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
)(Done);
