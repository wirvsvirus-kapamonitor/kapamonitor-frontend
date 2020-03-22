import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { swapThemeColors, toggleThemeMode } from '../../../store/settings/settings';
import { setFormAttribute } from '../../../store/register/actions';

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
        flexGrow: 1
    },
    textFieldSmall: {
        marginTop: theme.spacing(2),
        flexGrow: 2
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
    },
    checkBox:{
        marginTop: theme.spacing(2),
        width: '100%',
        flexGrow: 1,
    }
}));


function Second(props) {

    const classes = useStyles();
    const [state, setState] = useState({
        street: '',
        number: '',
        postalCode: '',
        city: '',
        address: '',

    })
    const handleChange = prop => event => {

        setState({
            [prop]: event.target.value,
        })

        console.log(event.target, prop)
    }

    const [locationType, setLocationType] = React.useState('hotel');

    const handleChangeSelect = event => {
        setLocationType(event.target.value);
    };

    const [internet, setInternet] = React.useState(false);
    const handleChangeInternet = event => {
        internet ? setInternet(false) : setInternet(true)
    };


    return (
        <div className={classes.root}>
            <FormControl className={classes.formControl}>

                <Select
                    variant="outlined"
                    className={classes.selectEmpty}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={locationType}
                    onChange={handleChangeSelect}
                >
                    <MenuItem value={'hotel'}>Hotel</MenuItem>
                    <MenuItem value={'gym'}>Turnhalle</MenuItem>
                    <MenuItem value={'open-space'}>Freie Fläche</MenuItem>
                </Select>
                <FormHelperText>Art der Lokalität</FormHelperText>
                <div className={classes.besideWrapper}>
                    <TextField
                        className={classes.textField}
                        value={state.street}
                        name={'street'}
                        onChange={handleChange('street')}
                        id="outlined-basic"
                        label="Straße"
                        variant="outlined"/>
                    <div className={classes.space}/>
                    <TextField
                        className={classes.textFieldSmall}
                        value={state.number}
                        name={'number'}
                        onChange={handleChange('number')}
                        id="outlined-basic"
                        label="Hausnummer"
                        variant="outlined"/>
                </div>
                <div className={classes.besideWrapper}>
                    <TextField
                        className={classes.textFieldSmall}
                        value={state.postalCode}
                        name={'postalCode'}
                        onChange={handleChange('postalCode')}
                        id="outlined-basic"
                        label="Postleitzahl"
                        variant="outlined"/>
                    <div className={classes.space}/>
                    <TextField
                        className={classes.textField}
                        value={state.city}
                        name={'city'}
                        onChange={handleChange('city')}
                        id="outlined-basic"
                        label="Stadt"
                        variant="outlined"/>
                </div>
                <FormControlLabel
                    className={classes.checkBox}
                    control={
                        <Checkbox
                            checked={internet}
                            onChange={handleChangeInternet}
                            name="checkedB"
                            color="primary"
                            label="Indeterminate"
                        />
                    }
                    label="Lokalität besitzt Internetzugang"
                />

            </FormControl>
        </div>
    );
}

const mapStateToProps = state => ({

    firstName: state.registerUnit.firstName,
    lastName: state.registerUnit.lastName,
    email: state.registerUnit.email

})

const mapDispatchToProps = {
    setFormAttribute

};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Second);
