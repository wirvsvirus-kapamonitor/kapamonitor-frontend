import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { swapThemeColors, toggleThemeMode } from '../../../store/reducers/settings';
import { setLastname,setFirstname,setEmail } from '../../../store/reducers/registerUnit';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        marginBottom: 50,
    },
    formControl: {
        margin: theme.spacing(1),
        marginLeft: 0,
        width: '100%',
        minWidth: 120,
        maxWidth: 400,
    },
    textField: {
        marginTop: theme.spacing(2),
        width: '100%',
    },
    besideWrapper: {
        display: 'flex',
        flexDirection: 'row',

    },
    textFieldBeside: {
        marginTop: theme.spacing(2),
        width: '100%',
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    space: {
        width: 20
    }
}));


function First(props) {
    const classes = useStyles();
    const [state, setState] = useState({
        lastName: '',
        firstName: '',
        email: '',
        phone: '',
        address: '',
    })

    const handleChange = prop => event => {

        setState({
            [prop]: event.target.value,
        })


        console.log(event.target, prop)
    }


    return (
        <div className={classes.root}>

            <FormControl className={classes.formControl}>
                <div className={classes.besideWrapper}>
                    <TextField
                        className={classes.textField}
                        value={props.lastName}
                        name={'firstName'}
                        onChange={event => props.setLastname(event.target.value)}
                        id="outlined-basic"
                        label="Nachname"
                        variant="outlined"/>
                    <div className={classes.space}/>
                    <TextField
                        className={classes.textField}
                        value={props.firstName}
                        name={'firstName'}
                        onChange={event => props.setFirstname(event.target.value)}
                        id="outlined-basic"
                        label="Vorname"
                        variant="outlined"/>
                </div>

                <TextField className={classes.textField}
                           value={props.email}
                           name={'firstName'}
                           onChange={event => props.setEmail(event.target.value)}
                           id="outlined-basic"
                           label="Email"
                           variant="outlined"/>
                <TextField className={classes.textField}
                           value={state.phone}
                           name={'phone'}
                           onChange={handleChange('phone')}
                           id="outlined-basic"
                           label="Telefonnummer"
                           variant="outlined"/>

            </FormControl>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        firstName: state.registerUnit.firstName,
        lastName: state.registerUnit.lastName,
        email: state.registerUnit.email,
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            setLastname: value => setLastname(value),
            setFirstname: value => setFirstname(value),
            setEmail: value => setEmail(value),
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
