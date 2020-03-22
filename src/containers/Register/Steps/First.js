import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { setFormAttribute} from '../../../store/register/actions';
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

    return (
        <div className={classes.root}>

            <FormControl className={classes.formControl}>
                <div className={classes.besideWrapper}>
                    <TextField
                        className={classes.textField}
                        value={props.lastName}
                        name={'lastName'}
                        onChange={event => props.setFormAttribute(event.target.name, event.target.value)}
                        id="ln-input"
                        label="Nachname"
                        variant="outlined"/>
                    <div className={classes.space}/>
                    <TextField
                        className={classes.textField}
                        value={props.firstName}
                        name={'firstName'}
                        onChange={event => props.setFormAttribute(event.target.name, event.target.value)}
                        id="fn-input"
                        label="Vorname"
                        variant="outlined"/>
                </div>

                <TextField className={classes.textField}
                           value={props.email}
                           name={'email'}
                           onChange={event => props.setFormAttribute(event.target.name, event.target.value)}
                           id="email-intpu"
                           label="Email"
                           variant="outlined"/>
                <TextField className={classes.textField}
                           value={props.phone}
                           name={'phone'}
                           onChange={event => props.setFormAttribute(event.target.name, event.target.value)}
                           id="phone-input"
                           label="Telefonnummer"
                           variant="outlined"/>

            </FormControl>
        </div>
    );
}

const mapStateToProps = state => ({

    firstName: state.registerUnit.firstName,
    lastName: state.registerUnit.lastName,
    email: state.registerUnit.email,
    phone: state.registerUnit.phone

})

const mapDispatchToProps = {
    setFormAttribute

};

export default connect(mapStateToProps, mapDispatchToProps)(First);
