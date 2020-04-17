import React from "react";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import IconButton from "@material-ui/core/IconButton";
import LanguageIcon from "@material-ui/icons/Language";
import { connect } from 'react-redux';
import { setUser } from '../../store/user/actions';
import Badge from "@material-ui/core/Badge";
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

import { useTranslation } from "react-i18next";


const useStyles = makeStyles((theme) => ({}));

function LanguageDropdown(props) {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const { t, i18n } = useTranslation();

    const changeLanguage = lng => {
        i18n.changeLanguage(lng);
        console.log(i18n);
    };


    return (
        <div>
            <IconButton color="inherit" onClick={handleClick}>
                <LanguageIcon />
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
                    {i18n.language != 'en' && <ListItem onClick={() => changeLanguage('en')}>
                        <ListItemText primary={t('Languages.English')} />
                    </ListItem>}
                    {i18n.language != 'de' && <ListItem  onClick={() => changeLanguage('de')}>
                        <ListItemText primary={t('Languages.German')} />
                    </ListItem>}
                </List>
            </Popover>
        </div>
    )
};

export default LanguageDropdown;