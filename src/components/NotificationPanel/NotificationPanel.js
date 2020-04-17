import React from "react";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import IconButton from "@material-ui/core/IconButton";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { connect } from 'react-redux';
import { setUser } from '../../store/user/actions';
import Badge from "@material-ui/core/Badge";
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles((theme) => ({
    // toolbarRoot: {
    //     paddingRight: 24
    // },
    // menuButton: {
    //     marginLeft: 12,
    //     marginRight: 36
    // },
    // title: {
    //     marginLeft: 12,
    // },
    // logo: {
    //     flexGrow: 1,
    // },
    // logoImg: {
    //     width: 85,
    // }
}));

function NotificationPanel(props) {
    // const { handleToggleDrawer } = props;
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        console.log('clicked')
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div>
            <IconButton color="inherit" onClick={handleClick}>
                <Badge badgeContent={4} color="secondary">
                    <NotificationsIcon />
                </Badge>
            </IconButton>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <List className={classes.root}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <ImageIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Photos" secondary="Jan 9, 2014" />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <WorkIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Work" secondary="Jan 7, 2014" />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <BeachAccessIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Vacation" secondary="July 20, 2014" />
                    </ListItem>
                </List>
                {/* <Typography>The content of the Popover.</Typography> */}
            </Popover>
        </div>
    )
};

const mapStateToProps = state => ({
    currentUser: state.user

})

const mapDispatchToProps = {
    setUser
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NotificationPanel);