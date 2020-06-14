import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    contactInput: {
        width: '100%',
        marginRight: 10,
    }
}));

function ContactInfo(props) {
    const classes = useStyles();

    return(
        <Grid container spacing={1} >
            <Grid item xs={12}>
                <Grid container justify="flex-start" alignItems="flex-end">
                    <TextField
                        className={classes.contactInput}
                        id="contactEmal"
                        label="Email"
                        defaultValue={props.contactInfo.email}
                        InputProps={{
                            readOnly: true,
                        }}/>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container justify="flex-start" alignItems="flex-end">
                    <TextField
                        className={classes.contactInput}
                        id="contactPhone"
                        label="Mobile"
                        defaultValue={props.contactInfo.mobile}
                        InputProps={{
                            readOnly: true,
                        }}/>
                </Grid>
            </Grid>
            <Grid item xs={6}>
                <Grid container justify="flex-start" alignItems="flex-end">
                    <TextField
                        className={classes.contactInput}
                        id="contactSkype"
                        label="Skype"
                        defaultValue={props.contactInfo.skype}
                        InputProps={{
                            readOnly: true,
                        }}/>
                </Grid>
            </Grid>
            <Grid item xs={6}>
                <Grid container justify="flex-start" alignItems="flex-end">
                    <TextField
                        className={classes.contactInput}
                        id="contactPlace"
                        label="Rooms"
                        defaultValue={props.contactInfo.rooms}
                        InputProps={{
                            readOnly: true,
                        }}/>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default ContactInfo;