import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import DashboardIcon from '@material-ui/icons/Dashboard';
import MapIcon from '@material-ui/icons/Map';
import SettingsIcon from '@material-ui/icons/Settings';
import CreateIcon from '@material-ui/icons/Create';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const styles = theme => ({
    root: {
        width: '100%',
        position: 'fixed',
        bottom: 0
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
});

const BottomNavigationBar = props => {
    const { open, classes } = props;
    const [value, setValue] = React.useState('dashboard');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
            <Link to="/dashboard">
                <BottomNavigationAction label="Dashboard" value="dashboard" icon={<DashboardIcon/>}/>
            </Link>
            <Link to="/map">
                <BottomNavigationAction label="Map" value="map" icon={<MapIcon/>}/>
            </Link>
            <Link to="/register"><BottomNavigationAction label="Register" value="register" icon={<CreateIcon/>}/></Link>
            <Link to={"setting"}><BottomNavigationAction label="Profile" value="profile" icon={<SettingsIcon/>}/></Link>

        </BottomNavigation>
    );
};

export default withStyles(styles)(BottomNavigationBar);
