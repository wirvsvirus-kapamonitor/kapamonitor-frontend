import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux';
import { setUser } from '../store/user/actions';
import { Link } from 'react-router-dom';
import * as firebase from 'firebase';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

function SignUpPage() {
    const classes = useStyles();
    const [email, setEmail] = React.useState('');
    const [pw, setPw] = React.useState('');
    const [loading, setLoading] = React.useState(false)
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('submit!', email, pw)
        if (email.includes('@') && pw) {
            firebase.auth().createUserWithEmailAndPassword(email, pw).then((res) => {
                console.log(res)
            }).catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // ...
            });
        }


    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        {/*<Grid item xs={12} sm={6}>*/}
                        {/*    <TextField*/}
                        {/*        autoComplete="fname"*/}
                        {/*        name="firstName"*/}
                        {/*        variant="outlined"*/}
                        {/*        required*/}
                        {/*        fullWidth*/}
                        {/*        id="firstName"*/}
                        {/*        label="First Name"*/}
                        {/*        autoFocus*/}
                        {/*    />*/}
                        {/*</Grid>*/}
                        {/*<Grid item xs={12} sm={6}>*/}
                        {/*    <TextField*/}
                        {/*        variant="outlined"*/}
                        {/*        required*/}
                        {/*        fullWidth*/}
                        {/*        id="lastName"*/}
                        {/*        label="Last Name"*/}
                        {/*        name="lastName"*/}
                        {/*        autoComplete="lname"*/}
                        {/*    />*/}
                        {/*</Grid>*/}
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                value={pw}
                                autoComplete="current-password"
                                onChange={e => setPw(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" color="primary"/>}
                                label="I want to receive inspiration, marketing promotions and updates via email."
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={handleSubmit}
                        className={classes.submit}
                    >
                        Sign Up
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            {/*<LinkMat variant="body2">*/}
                            <Link to="/login">Already have an account? Sign in</Link>
                            {/*</LinkMat>*/}
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={5}>
                <Copyright/>
            </Box>
        </Container>
    );
}

const mapStateToProps = state => ({
    currentUser: state.user

})
const mapDispatchToProps = {
    setUser
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUpPage);
