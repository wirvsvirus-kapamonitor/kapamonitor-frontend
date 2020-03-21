import React from 'react';
import Typography from '@material-ui/core/Typography';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { swapThemeColors, toggleThemeMode } from '../../store/reducers/settings';
import CustomizedStepper from './CustomizedStepper';
import First from './Steps/First';
import Second from './Steps/Second';
import Third from './Steps/Third';
import Done from './Steps/Done';

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


function Register(props) {

    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(1);
    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (

        <div className={classes.root}>


            <Typography variant="h5">
                Unterbringung registrieren
            </Typography>
            <Typography variant="inherit">
                für Unternehmer, die über Unterbringungskapazitäten verfügen
            </Typography>

            <CustomizedStepper handleStepChange={handleStepChange}/>


            {activeStep === 0 ? <First/> : null}
            {activeStep === 1 ? <Second/> : null}
            {activeStep === 2 ? <Third/> : null}
            {activeStep === 3 ? <Done/> : null}

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
)(Register);
