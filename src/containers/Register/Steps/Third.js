import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { swapThemeColors, toggleThemeMode } from '../../../store/settings/settings';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
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
    seperator: {
        height: 15,
    },
    checkBox: {
        marginTop: theme.spacing(2),
        width: '100%',
        flexGrow: 1,
    }
}));


function Third(props) {

    const classes = useStyles();
    const [state, setState] = useState({
        bedsWithDevicesCarpet: '',
        bedsWithoutDevicesCarpet: '',

        bedsWithDevices: '',
        bedsWithoutDevices: '',

        washbasins: '',
        showers: '',
        toilets: '',

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

                <FormHelperText>Betten mit Teppichboden</FormHelperText>
                <div className={classes.besideWrapper}>
                    <TextField
                        className={classes.textFieldSmall}
                        value={props.bedsWithDevicesCarpet}
                        name={'bedsWithDevicesCarpet'}
                        onChange={event => props.setFormAttribute(event.target.name, event.target.value)}
                        // onChange={handleChange('bedsWithDevicesCarpet')}
                        id="outlined-basic"
                        label="Mit Beatmungsgerät"
                        variant="outlined"/>
                    <div className={classes.space}/>
                    <TextField
                        className={classes.textFieldSmall}
                        value={props.bedsWithoutDevicesCarpet}
                        name={'bedsWithoutDevicesCarpet'}
                        onChange={event => props.setFormAttribute(event.target.name, event.target.value)}
                        // onChange={handleChange('bedsWithoutDevicesCarpet')}
                        id="outlined-basic"
                        label="Ohne Beatmungsgerät"
                        variant="outlined"/>
                </div>
                <div className={classes.seperator}/>
                <FormHelperText>Betten mit Sonstigem Boden</FormHelperText>
                <div className={classes.besideWrapper}>
                    <TextField
                        className={classes.textField}
                        value={props.bedsWithDevices}
                        name={'bedsWithDevices'}
                        onChange={event => props.setFormAttribute(event.target.name, event.target.value)}
                        // onChange={handleChange('bedsWithDevices')}
                        id="outlined-basic"
                        label="Mit Beatmungsgerät"
                        variant="outlined"/>
                    <div className={classes.space}/>
                    <TextField
                        className={classes.textField}
                        value={props.bedsWithoutDevices}
                        name={'bedsWithoutDevices'}
                        onChange={event => props.setFormAttribute(event.target.name, event.target.value)}
                        // onChange={handleChange('bedsWithoutDevices')}
                        id="outlined-basic"
                        label="Ohne Beatmungsgerät"
                        variant="outlined"/>

                </div>

                <TextField
                    className={classes.textField}
                    value={props.washbasins}
                    name={'washbasins'}
                    onChange={event => props.setFormAttribute(event.target.name, event.target.value)}
                    // onChange={handleChange('washbasins')}
                    id="outlined-basic"
                    label="Anzahl Waschbecken"
                    variant="outlined"/>
                <TextField
                    className={classes.textField}
                    value={props.showers}
                    name={'showers'}
                    onChange={event => props.setFormAttribute(event.target.name, event.target.value)}
                    // onChange={handleChange('showers')}
                    id="outlined-basic"
                    label="Anzahl Duschen"
                    variant="outlined"/>

                <TextField
                    className={classes.textField}
                    value={props.toilets}
                    name={'toilets'}
                    onChange={event => props.setFormAttribute(event.target.name, event.target.value)}
                    // onChange={handleChange('toilets')}
                    id="outlined-basic"
                    label="Anzahl Toiletten"
                    variant="outlined"/>



            </FormControl>

        </div>
    );
}

const mapStateToProps = state => ({

    bedsWithDevicesCarpet: state.registerUnit.bedsWithDevicesCarpet,
    bedsWithoutDevicesCarpet: state.registerUnit.bedsWithoutDevicesCarpet,
    bedsWithDevices: state.registerUnit.bedsWithDevices,
    bedsWithoutDevices: state.registerUnit.bedsWithoutDevices,
    washbasins: state.registerUnit.washbasins,
    showers: state.registerUnit.showers,
    toilets: state.registerUnit.toilets,

})

const mapDispatchToProps = {
    setFormAttribute
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Third);
