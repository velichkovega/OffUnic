import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { connect } from 'react-redux';
import profileFetch from './../../store/actions/profileFetch';

import AvatarSubtitle from './AvatarSubtitle.jsx';
import ProfileAvatar from './ProfileAvatar.jsx';
import MainInfo from './MainInfo';

class Profile extends Component {
    componentWillMount() {
        this.props.fetchProfileData(this.props.userInfo.id);
    }
    render() {
        if(!this.props.profileInfo.id) {
            return (
                <div>
                    Loading...
                </div>
            )
        } else {
            return (
                <Container maxWidth="lg">
                    <Grid container direction="row" justify="space-around" alignItems="flex-start">
                        <Grid item xs={12} md={3}>
                            <Box>
                                <ProfileAvatar avatarSrc={this.props.profileInfo.mainInfo.avatar}/>
                                <AvatarSubtitle maianInfo={this.props.profileInfo.mainInfo}/>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <MainInfo 
                                profileInfo={this.props.profileInfo}/>
                        </Grid>
                    </Grid>
                </Container>
            )
        }
        
    }
}

export default connect(
    state => ({
                profileInfo: state.profileInfo,
                userInfo: state.auth
            }),
    dispatch => ({
        fetchProfileData: (id) => {
            dispatch(profileFetch(id))
        }
    })
)(Profile);