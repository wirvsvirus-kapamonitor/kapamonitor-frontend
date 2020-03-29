import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import DashboardIcon from '@material-ui/icons/Dashboard';
import MapIcon from '@material-ui/icons/Map';
import CreateIcon from '@material-ui/icons/Create';
import LoginIcon from '@material-ui/icons/LockOpen';
import { makeStyles } from '@material-ui/core/styles';
import { setNavigation } from '../../store/register/actions';
import { connect } from 'react-redux';

import { useHistory } from "react-router-dom";

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        position: 'fixed',
        bottom: 0,
        zIndex: 99
    },
    drawerPaper: {
        position: 'fixed',
        top: theme.spacing.unit * 8,
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        width: theme.spacing.unit * 8,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing.unit * 9
        }
    }
}));


const BottomNavigationBar = props => {
    const history = useHistory();

    const classes = useStyles();
    const { open } = props;
    const [value, setValue] = React.useState('dashboard');

    const handleChange = (event, newValue) => {
        setValue(newValue);
        // console.log(newValue)
        props.setNavigation(newValue)
        history.push('/' + newValue)
    };
    return (
        <BottomNavigation value={props.nav} onChange={handleChange} className={classes.root}>
            {/*<Link to="/dashboard" onClick={()=>handleChange("dashboard")}>*/}
            <BottomNavigationAction label="Übersicht" value="dashboard" icon={<DashboardIcon/>}/>
            {/*</Link>*/}
            {/*<Link to="/map" onClick={()=>handleChange("map")}>*/}
            <BottomNavigationAction label="Karte" value="map" icon={<MapIcon/>}/>
            {/*</Link>*/}
            {/*<Link to="/register" onClick={()=>handleChange("register")}>*/}
            // <BottomNavigationAction label="Hinzufügen" value="register" icon={<CreateIcon/>}/>
            <BottomNavigationAction label="Signin" value="signin-oidc" icon={<LoginIcon/>}/>
            {/*</Link>*/}
            {/*<Link to={"setting"}><BottomNavigationAction label="Profile" value="profile" icon={<SettingsIcon/>}/></Link>*/}

        </BottomNavigation>
    );
};


const mapStateToProps = state => ({
    nav: state.registerUnit.nav
})

const mapDispatchToProps = {
    setNavigation
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BottomNavigationBar);
