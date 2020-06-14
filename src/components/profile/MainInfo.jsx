import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

import ContactInfo from './ContactInfo.jsx';
import AboutInfo from './AboutInfo.jsx';
import WorkDays from './WorkDays.jsx';
import Documents from './Documents.jsx';

const useStyles = makeStyles(theme => ({
    container: {
        paddingTop: theme.spacing(3),
    },
    title: {
        fontSize: 22,
    },
    dividerTitle: {
        marginBottom: 15,
    },
    contactInput: {
        width: '100%',
        marginRight: 10,
    }
}));

function MainInfo(props) {
    const classes = useStyles();
    let contactInfo = {
        mobile: props.profileInfo.mainInfo.mobile,
        skype: props.profileInfo.mainInfo.skype,
        rooms: props.profileInfo.mainInfo.rooms,
        email: props.profileInfo.mainInfo.mail,
    }

    return(
        <div className={classes.container}>
            <Typography className={classes.title}>
                Contacts
            </Typography>   
            <Divider className={classes.dividerTitle} component="div"/>
            <Grid container direction="row" justify="space-between">
                <Grid xs={6} item>
                    <ContactInfo contactInfo={contactInfo}/>
                </Grid>
                <Grid xs={6} item>
                    <AboutInfo 
                        aboutText={props.profileInfo.mainInfo.about}
                        skills={props.profileInfo.skills}/>
                </Grid>
            </Grid>
            <WorkDays workDays={props.profileInfo.workDays}/>
            {props.profileInfo.lvl < 1 ? '' : <Documents />}
            
        </div>
    )
}

export default MainInfo;