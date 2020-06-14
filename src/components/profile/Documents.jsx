import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';

const useStyles = makeStyles(theme => ({
    container: {
        paddingTop: theme.spacing(3),
    },
    title: {
        fontSize: 22,
    },
    button: {
        marginTop: 10,
    }
}));

function Documents() {
    const classes = useStyles();

    return(
        <div className={classes.container}>
            <Typography className={classes.title}>Documents</Typography>
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <Typography>Employment contract</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <div>
                        <Typography component="div" className={classes.aboutMeText}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </Typography>
                        <Button variant="contained" color="primary" className={classes.button} endIcon={<AssignmentIndIcon />}>
                            Show contract
                        </Button>
                    </div>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <Typography>NDA</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <div>
                        <Typography component="div" className={classes.aboutMeText}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </Typography>
                        <Button variant="contained" color="primary" className={classes.button} endIcon={<AssignmentIndIcon />}>
                            Show contract
                        </Button>
                    </div>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <Typography>Taxes and fees</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <div>
                        <Typography component="div" className={classes.aboutMeText}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </Typography>
                        <Button variant="contained" color="primary" className={classes.button} endIcon={<AssignmentIndIcon />}>
                            Show contract
                        </Button>
                    </div>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    )
}

export default Documents;