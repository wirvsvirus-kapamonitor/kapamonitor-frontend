import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { swapThemeColors, toggleThemeMode } from '../../../store/reducers/settings';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,

    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));


function Second(props) {

    const classes = useStyles();
    const [state, setState] = useState({
        firstName: "",
        lastName:"",
        email:"",
        phone:""
    })

    const handleChange = prop => event => {

        setState({
            [prop]: event.target.value,
        })

        console.log(event.target, prop)
    }


    return (
        <div className={classes.root}>
            <Typography variant="h5">
                Second
            </Typography>

            <form className={classes.root} noValidate autoComplete="off">
                <TextField value={state.firstName}
                           name={'firstName'}
                           onChange={handleChange('firstName')}
                           id="outlined-basic"
                           label="Vorname"
                           variant="outlined"/>
                <TextField value={state.lastName}
                           name={'firstName'}
                           onChange={handleChange('lastName')}
                           id="outlined-basic"
                           label="Nachname"
                           variant="outlined"/>
                <TextField value={state.email}
                           name={'firstName'}
                           onChange={handleChange('email')}
                           id="outlined-basic"
                           label="Email"
                           variant="outlined"/>
                           <TextField value={state.phone}
                           name={'phone'}
                           onChange={handleChange('phone')}
                           id="outlined-basic"
                           label="Telefonnummer"
                           variant="outlined"/>

            </form>
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
)(Second);
