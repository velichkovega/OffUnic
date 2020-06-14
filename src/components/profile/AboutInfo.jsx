import React from 'react';
// import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles(theme => ({
    panelDetailsWrapper: {
        maxWidth: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(0.5),
        },
    },
    aboutMeText: {
        fontSize: 12,
    }
}));

function AboutInfo(props) {
    const classes = useStyles();
    // const handleDelete = () => {
    //     // onDelete add to component for acc close icon
    //     console.info('You clicked the Chip.');
    // };
    return(
        <div>
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <Typography>My skills</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={classes.panelDetailsWrapper}>
                    {props.skills.main.map((elem, index) => {
                        return (
                            <Chip size="small" label={elem} key={index} color="primary"/>
                        )
                    })}
                    {props.skills.second.map((elem, index) => {
                        return (
                            <Chip size="small" label={elem} key={index} color="default"/>
                        )
                    })}
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <Typography>Something about me</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={classes.panelDetailsWrapper}>
                    <Typography className={classes.aboutMeText}>
                        {props.aboutText}
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    )
}

export default AboutInfo;