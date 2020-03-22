import React from 'react';
import Typography from '@material-ui/core/Typography';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { swapThemeColors, toggleThemeMode } from '../../store/settings/settings';
import CustomizedStepper from './CustomizedStepper';
import First from './Steps/First';
import Second from './Steps/Second';
import Third from './Steps/Third';
import Done from './Steps/Done';
import { setActiveStep } from '../../store/register/actions';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
        marginTop: theme.spacing.unit * 7,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    wrapper: {
        marginTop: 20,
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
}));


function Register(props) {

    const classes = useStyles();

    const handleStepChange = (step) => {
        props.setActiveStep(step);
    };

    return (

        <div className={classes.root}>


            <Typography variant="h5">
                Unterbringung registrieren
            </Typography>
            <Typography variant="inherit">
                Für Unternehmer, die über Unterbringungskapazitäten verfügen
            </Typography>

            <CustomizedStepper handleStepChange={handleStepChange}/>

            <div className={classes.wrapper}>
                {props.activeStep === 0 ? <First/> : null}
                {props.activeStep === 1 ? <Second/> : null}
                {props.activeStep === 2 ? <Third/> : null}
                {props.activeStep === 3 ? <Done/> : null}
            </div>


        </div>
    );
}

const mapStateToProps = state => ({

    activeStep: state.registerUnit.activeStep,


})

const mapDispatchToProps = {
    setActiveStep

};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Register);
