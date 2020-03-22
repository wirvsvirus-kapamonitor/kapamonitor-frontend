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
                        value={props.street}
                        name={'street'}
                        onChange={event => props.setFormAttribute(event.target.name, event.target.value)}
                        id="outlined-basic"
                        label="Straße"
                        variant="outlined"/>
                    <div className={classes.space}/>
                    <TextField
                        className={classes.textFieldSmall}
                        value={props.number}
                        name={'number'}
                        onChange={event => props.setFormAttribute(event.target.name, event.target.value)}
                        id="outlined-basic"
                        label="Hausnummer"
                        variant="outlined"/>
                </div>
                <div className={classes.besideWrapper}>
                    <TextField
                        className={classes.textFieldSmall}
                        value={props.postalCode}
                        name={'postalCode'}
                        onChange={event => props.setFormAttribute(event.target.name, event.target.value)}
                        id="outlined-basic"
                        label="Postleitzahl"
                        variant="outlined"/>
                    <div className={classes.space}/>
                    <TextField
                        className={classes.textField}
                        value={props.city}
                        name={'city'}
                        onChange={event => props.setFormAttribute(event.target.name, event.target.value)}
                        id="outlined-basic"
                        label="Stadt"
                        variant="outlined"/>
                </div>
                <FormControlLabel
                    className={classes.checkBox}
                    control={
                        <Checkbox
                            checked={props.internet}
                            onChange={event => props.setFormAttribute(event.target.name, event.target.value)}
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

    street: state.registerUnit.street,
    number: state.registerUnit.number,
    postalCode: state.registerUnit.postalCode,
    city: state.registerUnit.city,
    internet: state.registerUnit.internet,

})

const mapDispatchToProps = {
    setFormAttribute

};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Second);
