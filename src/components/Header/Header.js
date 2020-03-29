import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@material-ui/icons/Notifications";
import PersonIcon from "@material-ui/icons/Person";
import Exit from "@material-ui/icons/ExitToApp";
import Typography from "@material-ui/core/Typography";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import * as firebase from 'firebase';
import { setUser } from '../../store/user/actions';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  toolbarRoot: {
    paddingRight: 24
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36
  },
  title: {
    marginLeft: 12,
  },
  logo: {
    flexGrow: 1,
  },
  logoImg: {
    width: 85,
  }
}));

 function Header (props){
  const { handleToggleDrawer } = props;
   const classes = useStyles();
  return (
    <AppBar position="fixed">
      <Toolbar disableGutters={true} classes={{ root: classes.toolbarRoot }}>
        {/*<IconButton*/}
        {/*  color="inherit"*/}
        {/*  aria-label="Open drawer"*/}
        {/*  onClick={handleToggleDrawer}*/}
        {/*  className={classes.menuButton}*/}
        {/*>*/}
        {/*  <MenuIcon />*/}
        {/*</IconButton>*/}
        <Typography
            variant="h4"
            color="inherit"
            noWrap
            className={classes.title}
        >
          KapaMonitor
        </Typography>
        <div className={classes.logo}>
          <img src="/kapa_hands.png" className={classes.logoImg}/>
        </div>
        <IconButton color="inherit">
          <Badge badgeContent={4} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton color="inherit">
          {/*<PersonIcon />*/}
          <Exit onClick={()=>{

            firebase.auth().signOut().then(res=>{
              props.setUser(null)

            }).catch(res=>{
              props.setUser(null)
            })}}/>

        </IconButton>
      </Toolbar>
    </AppBar>
  );
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
)(Header);
