import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import MailIcon from '@material-ui/icons/Mail';
import Badge from '@material-ui/core/Badge';
import { makeStyles } from '@material-ui/core/styles';

import MailShort from './MailShort.jsx'; 

const useStyles = makeStyles((theme) => ({
    root: {
        width: 330,
    },
}));

export default function MenuPopupState() {
    const classes = useStyles();

    return (
        <PopupState variant="popover" popupId="demo-popup-menu"  >
            {(popupState) => (
            <React.Fragment>
                <Badge badgeContent={2} color="secondary">
                    <MailIcon variant="contained" {...bindTrigger(popupState)}>
                        Open Menu
                    </MailIcon>
                </Badge>
                <Menu {...bindMenu(popupState)} className={classes.root}>
                    <div onClick={popupState.close}>
                        <MailShort 
                            msg='Hi, can you give me some money? Coronavirus, blah blah'
                            name='Will Smith'/>
                    </div>
                    <div onClick={popupState.close}>
                        <MailShort 
                            msg='Dude, how late can you be?'
                            name='Jesus'/>
                    </div>
                    <div onClick={popupState.close}>
                        <MailShort 
                            readed='true'
                            msg='Hi, you are vegan?'
                            name='Angelina Jolie'/>
                    </div>
                </Menu>
            </React.Fragment>
            )}
        </PopupState>
    );
}