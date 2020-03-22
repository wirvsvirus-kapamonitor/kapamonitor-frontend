import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Check from '@material-ui/icons/Check';
import SettingsIcon from '@material-ui/icons/Settings';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import VideoLabelIcon from '@material-ui/icons/VideoLabel';
import StepConnector from '@material-ui/core/StepConnector';
import Button from '@material-ui/core/Button';
import { resetAttr, setActiveStep } from '../../store/register/actions';
import { connect } from 'react-redux';

const QontoConnector = withStyles({
    alternativeLabel: {
        top: 10,
        left: 'calc(-50% + 16px)',
        right: 'calc(50% + 16px)',
    },
    active: {
        '& $line': {
            borderColor: '#784af4',
        },
    },
    completed: {
        '& $line': {
            borderColor: '#784af4',
        },
    },
    line: {
        borderColor: '#eaeaf0',
        borderTopWidth: 3,
        borderRadius: 1,
    },
})(StepConnector);

const useQontoStepIconStyles = makeStyles({
    root: {
        flexGrow: 1,
        color: '#eaeaf0',
        display: 'flex',
        height: 22,
        alignItems: 'center',
    },
    active: {
        color: '#784af4',
    },
    circle: {
        width: 8,
        height: 8,
        borderRadius: '50%',
        backgroundColor: 'currentColor',
    },
    completed: {
        color: '#784af4',
        zIndex: 1,
        fontSize: 18,
    },
});

function QontoStepIcon(props) {
    const classes = useQontoStepIconStyles();
    const { active, completed } = props;

    return (
        <div
            className={clsx(classes.root, {
                [classes.active]: active,
            })}
        >
            {completed ? <Check className={classes.completed}/> : <div className={classes.circle}/>}
        </div>
    );
}

QontoStepIcon.propTypes = {
    active: PropTypes.bool,
    completed: PropTypes.bool,
};

const ColorlibConnector = withStyles({
    alternativeLabel: {
        top: 22,
    },
    active: {
        '& $line': {
            backgroundImage:
                'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
        },
    },
    completed: {
        '& $line': {
            backgroundImage:
                'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
        },
    },
    line: {
        height: 3,
        border: 0,
        backgroundColor: '#eaeaf0',
        borderRadius: 1,
    },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
    root: {
        backgroundColor: '#ccc',
        zIndex: 1,
        color: '#fff',
        width: 50,
        height: 50,
        display: 'flex',
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    active: {
        backgroundImage:
            'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
        boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    },
    completed: {
        backgroundImage:
            'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    },
});

function ColorlibStepIcon(props) {
    const classes = useColorlibStepIconStyles();
    const { active, completed } = props;

    const icons = {
        1: <SettingsIcon/>,
        2: <GroupAddIcon/>,
        3: <VideoLabelIcon/>,
    };

    return (
        <div
            className={clsx(classes.root, {
                [classes.active]: active,
                [classes.completed]: completed,
            })}
        >
            {icons[String(props.icon)]}
        </div>
    );
}

ColorlibStepIcon.propTypes = {
    active: PropTypes.bool,
    completed: PropTypes.bool,
    icon: PropTypes.node,
};

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        marginTop: 20,
    },
    buttonWrapper: {
        marginTop: theme.spacing(3),
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',

    },

    button: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

function getSteps() {
    return ['1', '2', '3'];
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return 'Erforderliche Daten hier angeben:';
        case 1:
            return 'Erforderliche Daten hier angeben:';
        case 2:
            return 'Erforderliche Daten hier angeben:';
        default:
            return 'Unknown step';
    }
}

function CustomizedStepper(props) {
    const classes = useStyles();
    const steps = getSteps();

    const handleNext = () => {

        props.setActiveStep(props.activeStep + 1)

    };

    const handleBack = () => {
        props.setActiveStep(props.activeStep - 1)

    };

    const handleReset = () => {
        props.setActiveStep(0)
        //reset
        props.resetAttr()
    };

    return (
        <div className={classes.root}>

            <Stepper alternativeLabel activeStep={props.activeStep} connector={<QontoConnector/>}>
                {steps.map(label => (
                    <Step key={label}>
                        <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>

            <div>
                {props.activeStep === steps.length ? (
                    <div className={classes.buttonWrapper}>

                        <Button onClick={handleReset} className={classes.button}>
                            Nochmal
                        </Button>
                    </div>
                ) : (
                    <div>
                        {/*<Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>*/}
                        <div className={classes.buttonWrapper}>
                            <Button disabled={props.activeStep === 0} onClick={handleBack} className={classes.button}>
                                Zurück
                            </Button>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleNext}
                                className={classes.button}
                            >
                                {props.activeStep === steps.length - 1 ? 'Fertig' : 'Weiter'}
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

const mapStateToProps = state => ({

    activeStep: state.registerUnit.activeStep,


})

const mapDispatchToProps = {
    setActiveStep,
    resetAttr
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomizedStepper);
