import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import DraftsIcon from '@material-ui/icons/Drafts';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    iconWrapper: {
        display: 'flex',
        alignItems: 'center',
    },
    icon: {
        width: '30px',
        minWidth: '36px',
    },
}));
function MailShort(props) {
    const classes = useStyles();

    return (
        <MenuItem>
            <Grid container direction="row" wrap="nowrap">
                <Grid item className={classes.iconWrapper}>
                    <ListItemIcon className={classes.icon} style={{color: props.readed ? 'gray' : 'red'}}>
                        <DraftsIcon fontSize="small" />
                    </ListItemIcon>
                </Grid>
                <Grid item zeroMinWidth>
                    <b>
                        From: {props.name}
                    </b>
                    <Typography noWrap>
                        {props.msg}
                    </Typography>
                </Grid>
            </Grid>
        </MenuItem>
    )

}

export default MailShort;