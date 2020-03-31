import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import NotificationsIcon from "@material-ui/icons/Notifications";
import PersonIcon from "@material-ui/icons/Person";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";

const styles = theme => ({
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
  },
  imprint: {
    marginRight: 50,
  }
});

const Header = props => {
  const { classes, handleToggleDrawer } = props;
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

        <Typography
            color="inherit"
            noWrap
            className={classes.imprint}
        >
          <Link href="/imprint" color="inherit">
            Impressum
          </Link>
        </Typography>

        <IconButton color="inherit">
          <Badge badgeContent={4} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton color="inherit">
          <PersonIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(Header);
