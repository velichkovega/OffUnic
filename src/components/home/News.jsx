import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    title: {
        fontSize: 22,
        paddingTop: 15,
    },
    gridContainer: {
        paddingTop: 15,
        paddingBottom: 30,
    }
}));

function News() {
    const classes = useStyles();

    return(
        <div>
            <Typography align="left" className={classes.title} component="h2">
                Last news: 
            </Typography>
            <Grid container direction="row" className={classes.gridContainer} justify="space-around" alignItems="center" spacing={2}>
                <Grid item md={4}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="140"
                                image="https://upload.wikimedia.org/wikipedia/ru/c/c1/South_Park_S22_E09.jpg"
                                title="Contemplative Reptile"/>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Unfulfilled
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    "Unfulfilled" is the ninth episode of the twenty-second season of the American animated television series South Park.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
                            </Button>
                            <Button size="small" color="primary">
                                Learn More
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item md={4}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="140"
                                image="https://upload.wikimedia.org/wikipedia/ru/thumb/8/8c/Mysterion_Rises.jpg/300px-Mysterion_Rises.jpg"
                                title="Contemplative Reptile"/>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Mysterion Rises
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    "Mysterion Rises" is the twelfth episode of the fourteenth season of animated television series South Park
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
                            </Button>
                            <Button size="small" color="primary">
                                Learn More
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item md={4}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="140"
                                image="https://media2.giphy.com/media/d31ws07vnvFHaC3K/source.gif"
                                title="Contemplative Reptile"/>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Die Hippie, Die
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Die Hippie, Die" is the second episode in the ninth season of the American animated television series South Park
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
                            </Button>
                            <Button size="small" color="primary">
                                Learn More
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
            <Divider />
        </div>
    )
}

export default News;