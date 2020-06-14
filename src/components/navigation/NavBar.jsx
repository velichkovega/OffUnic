import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import BusinessIcon from '@material-ui/icons/Business';

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    avatar: {
        width: 40,
        height: 40,
    },
    gridContainer: {
        paddingTop: 20,
    }
});

function NavBar(props) {
    const classes = useStyles();
    return (
        <div className={classes.list}
            role="presentation"
            onClick={props.toggleDrawer(false)}
            onKeyDown={props.toggleDrawer(false)}>
            <List>
                <Link to="/profile">
                    <ListItem button>
                        <ListItemIcon>
                            <Avatar className={classes.avatar} src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d8cc1748-ad44-4557-af39-813369af82b2/d98bhb0-3136a09b-26c4-44d4-a29a-aaa63130c348.jpg/v1/fill/w_1024,h_768,q_75,strp/adventure_time_avatar_pic_8_by_springtrappedfan_d98bhb0-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzY4IiwicGF0aCI6IlwvZlwvZDhjYzE3NDgtYWQ0NC00NTU3LWFmMzktODEzMzY5YWY4MmIyXC9kOThiaGIwLTMxMzZhMDliLTI2YzQtNDRkNC1hMjlhLWFhYTYzMTMwYzM0OC5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.PPaUONBjIV8x7m99-VAB9nOZrcMLZ8M2TQ_JljW51tI">N</Avatar>
                        </ListItemIcon>
                        <ListItemText primary={'Fin the Human'} secondary={'Online'} secondaryTypographyProps={true}/>
                    </ListItem>
                </Link>
                <Divider />
                <Link to="/">
                    <ListItem button>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Home'} />
                    </ListItem>
                </Link>
                <Link to="/rooms">
                    <ListItem button>
                        <ListItemIcon>
                            <BusinessIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Office rooms'} />
                    </ListItem>
                </Link>
            </List>
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    )
}

export default NavBar;