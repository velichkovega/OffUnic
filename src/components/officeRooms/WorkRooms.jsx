import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
    container: {
        marginTop: theme.spacing(2),
    },
    title: {
        fontSize: 22,
    },
    subTitle: {
        fontSize: 16,
        margin: '5px 0',
    },
    subTitleCount: {
        fontWeight: 'bold',
    },
    frontEnd: {
        color: 'green',
        borderColor: 'green'
    },
    backEnd: {
        color: 'blue',
        borderColor: 'blue'
    },
    qa: {
        color: 'orange',
        borderColor: 'orange'
    },
    panelDetailsContainer: {
        paddingTop: theme.spacing(2),
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 20,
    },
    inputRoot: {
        color: 'inherit',
        backgroundColor: 'rgba(0, 0, 0, 0.04)'
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    }
}));



function WorkRooms() {
    const classes = useStyles();
    
    return(
        <div className={classes.container}>
            <Grid container justify="space-between" alignItems="center" spacing={2}>
                <Grid item md={3}>
                    <Typography variant="h2">
                        Working Rooms
                    </Typography>
                </Grid>
                <Grid item >
                    <div  className={classes.search}>
                        <Paper >
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                                <InputBase
                                    placeholder="Search…"
                                    classes={{
                                        root: classes.inputRoot,
                                        input: classes.inputInput,
                                    }}
                                    inputProps={{ 'aria-label': 'search' }}/>   
                        </Paper>
                    </div>
                </Grid>
            </Grid>
            <Divider />
            <Grid container justify="space-between" className={classes.gridContainer} spacing={2}>
                <Grid item md={6} >
                    <div className={classes.panelDetailsContainer}>
                        <ExpansionPanel defaultExpanded={false}>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1c-content">
                                <Typography className={classes.heading}>Rooms: 712. Project: Group Booking</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails >
                                <Grid container justify="flex-start" className={classes.gridContainer} spacing={1}>
                                    <Grid item>
                                        <Chip label="Paleanichko A." className={classes.frontEnd} variant="outlined"/>
                                    </Grid>
                                    <Grid item>
                                        <Chip label="Franchuk I." className={classes.backEnd} variant="outlined"/>
                                    </Grid>
                                    <Grid item>
                                        <Chip label="Levchenko I." className={classes.qa} variant="outlined"/>
                                    </Grid>
                                    <Grid item>
                                        <Chip label="Poleva A." />
                                    </Grid>
                                    <Grid item>
                                        <Chip label="Herbe A." />
                                    </Grid>
                                    <Grid item>
                                        <Chip label="Gavdan U." />
                                    </Grid>
                                    <Grid item>
                                        <Chip label="Tarashchuk K." />
                                    </Grid>
                                </Grid>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    </div>
                </Grid>
                <Grid item md={6}>
                    <div className={classes.panelDetailsContainer}>
                        <ExpansionPanel defaultExpanded={false}>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1c-content">
                                <Typography className={classes.heading}>Rooms: 703, 704, 705. Project: Booked</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails >
                                <Grid container justify="flex-start" className={classes.gridContainer} spacing={1}>
                                    <Grid item>
                                        <Chip label="Darya Bagmet" className={classes.frontEnd} variant="outlined"/>
                                    </Grid>
                                    <Grid item>
                                        <Chip label="Volodymyr Lakodei" className={classes.frontEnd} variant="outlined"/>
                                    </Grid>
                                    <Grid item>
                                        <Chip label="Ievgenia Miroshko" className={classes.frontEnd} variant="outlined"/>
                                    </Grid>
                                    <Grid item>
                                        <Chip label="Olexander Grishkevich" className={classes.frontEnd} variant="outlined"/>
                                    </Grid>
                                    <Grid item>
                                        <Chip label="Maksim Chichirkoza" className={classes.frontEnd} variant="outlined"/>
                                    </Grid>
                                    <Grid item>
                                        <Chip label="Alexander Loyko" className={classes.frontEnd} variant="outlined"/>
                                    </Grid>
                                    <Grid item>
                                        <Chip label="Dmitriy Beskrestnov" className={classes.backEnd} variant="outlined"/>
                                    </Grid>
                                    <Grid item>
                                        <Chip label="Alexander Chernega" className={classes.backEnd} variant="outlined"/>
                                    </Grid>
                                    <Grid item>
                                        <Chip label="Dmitry Yadov" className={classes.backEnd} variant="outlined"/>
                                    </Grid>
                                    <Grid item>
                                        <Chip label="Marina Chichick" className={classes.qa} variant="outlined"/>
                                    </Grid>
                                    <Grid item>
                                        <Chip label="Artem Zaitsev" className={classes.qa} variant="outlined"/>
                                    </Grid>
                                    <Grid item>
                                        <Chip label="Dmytro Atamaniuk" className={classes.qa} variant="outlined"/>
                                    </Grid>
                                    <Grid item>
                                        <Chip label="Artem Starchenko" className={classes.qa} variant="outlined"/>
                                    </Grid>
                                    <Grid item>
                                        <Chip label="Olena Derebera" />
                                    </Grid>
                                    <Grid item>
                                        <Chip label="Sofiia Baranets" />
                                    </Grid>
                                    <Grid item>
                                        <Chip label="Olha Shmyhovska" />
                                    </Grid>
                                </Grid>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    </div>
                </Grid>
                <Grid item md={6}>
                    <div className={classes.panelDetailsContainer}>
                        <ExpansionPanel defaultExpanded={false}>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1c-content">
                                <Typography className={classes.heading}>Rooms: 714, 715, 716. Project: Tripnet</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails >
                                <Grid container justify="flex-start" className={classes.gridContainer} spacing={1}>
                                    <Grid item>
                                        <Chip label="Darya Bagmet" className={classes.frontEnd} variant="outlined"/>
                                    </Grid>
                                    <Grid item>
                                        <Chip label="Volodymyr Lakodei" className={classes.frontEnd} variant="outlined"/>
                                    </Grid>
                                    <Grid item>
                                        <Chip label="Ievgenia Miroshko" className={classes.frontEnd} variant="outlined"/>
                                    </Grid>
                                    <Grid item>
                                        <Chip label="Olexander Grishkevich" className={classes.frontEnd} variant="outlined"/>
                                    </Grid>
                                    <Grid item>
                                        <Chip label="Maksim Chichirkoza" className={classes.frontEnd} variant="outlined"/>
                                    </Grid>
                                    <Grid item>
                                        <Chip label="Alexander Loyko" className={classes.frontEnd} variant="outlined"/>
                                    </Grid>
                                    <Grid item>
                                        <Chip label="Dmitriy Beskrestnov" className={classes.backEnd} variant="outlined"/>
                                    </Grid>
                                    <Grid item>
                                        <Chip label="Alexander Chernega" className={classes.backEnd} variant="outlined"/>
                                    </Grid>
                                    <Grid item>
                                        <Chip label="Dmitry Yadov" className={classes.backEnd} variant="outlined"/>
                                    </Grid>
                                    <Grid item>
                                        <Chip label="Marina Chichick" className={classes.qa} variant="outlined"/>
                                    </Grid>
                                    <Grid item>
                                        <Chip label="Artem Zaitsev" className={classes.qa} variant="outlined"/>
                                    </Grid>
                                    <Grid item>
                                        <Chip label="Dmytro Atamaniuk" className={classes.qa} variant="outlined"/>
                                    </Grid>
                                    <Grid item>
                                        <Chip label="Artem Starchenko" className={classes.qa} variant="outlined"/>
                                    </Grid>
                                    <Grid item>
                                        <Chip label="Olena Derebera" />
                                    </Grid>
                                    <Grid item>
                                        <Chip label="Sofiia Baranets" />
                                    </Grid>
                                    <Grid item>
                                        <Chip label="Olha Shmyhovska" />
                                    </Grid>
                                </Grid>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    </div>
                </Grid>
                <Grid item md={6} >
                    <div className={classes.panelDetailsContainer}>
                        <ExpansionPanel defaultExpanded={false}>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1c-content">
                                <Typography className={classes.heading}>Rooms: 717. Project: 1Map</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails >
                                <Grid container justify="flex-start" className={classes.gridContainer} spacing={1}>
                                    <Grid item>
                                        <Chip label="Paleanichko A." className={classes.frontEnd} variant="outlined"/>
                                    </Grid>
                                    <Grid item>
                                        <Chip label="Franchuk I." className={classes.backEnd} variant="outlined"/>
                                    </Grid>
                                    <Grid item>
                                        <Chip label="Levchenko I." className={classes.qa} variant="outlined"/>
                                    </Grid>
                                    <Grid item>
                                        <Chip label="Poleva A." />
                                    </Grid>
                                    <Grid item>
                                        <Chip label="Herbe A." />
                                    </Grid>
                                    <Grid item>
                                        <Chip label="Gavdan U." />
                                    </Grid>
                                    <Grid item>
                                        <Chip label="Tarashchuk K." />
                                    </Grid>
                                </Grid>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    </div>
                </Grid>
                <Grid item md={6} >
                    <div className={classes.panelDetailsContainer}>
                        <ExpansionPanel defaultExpanded={false}>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1c-content">
                                <Typography className={classes.heading}>Rooms: 721. Project: NLP</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails >
                                <Grid container justify="flex-start" className={classes.gridContainer} spacing={1}>
                                    <Grid item>
                                        <Chip label="Paleanichko A." className={classes.frontEnd} variant="outlined"/>
                                    </Grid>
                                    <Grid item>
                                        <Chip label="Franchuk I." className={classes.backEnd} variant="outlined"/>
                                    </Grid>
                                    <Grid item>
                                        <Chip label="Levchenko I." className={classes.qa} variant="outlined"/>
                                    </Grid>
                                    <Grid item>
                                        <Chip label="Poleva A." />
                                    </Grid>
                                    <Grid item>
                                        <Chip label="Herbe A." />
                                    </Grid>
                                    <Grid item>
                                        <Chip label="Gavdan U." />
                                    </Grid>
                                    <Grid item>
                                        <Chip label="Tarashchuk K." />
                                    </Grid>
                                </Grid>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    </div>
                </Grid>
                <Grid item md={6} >
                    <div className={classes.panelDetailsContainer}>
                        <ExpansionPanel defaultExpanded={false}>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1c-content">
                                <Typography className={classes.heading}>Rooms: 724. Project: SEO</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails >
                                <Grid container justify="flex-start" className={classes.gridContainer} spacing={1}>
                                    <Grid item>
                                        <Chip label="Paleanichko A." className={classes.frontEnd} variant="outlined"/>
                                    </Grid>
                                    <Grid item>
                                        <Chip label="Franchuk I." className={classes.backEnd} variant="outlined"/>
                                    </Grid>
                                    <Grid item>
                                        <Chip label="Levchenko I." className={classes.qa} variant="outlined"/>
                                    </Grid>
                                    <Grid item>
                                        <Chip label="Poleva A." />
                                    </Grid>
                                    <Grid item>
                                        <Chip label="Herbe A." />
                                    </Grid>
                                    <Grid item>
                                        <Chip label="Gavdan U." />
                                    </Grid>
                                    <Grid item>
                                        <Chip label="Tarashchuk K." />
                                    </Grid>
                                </Grid>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default WorkRooms;