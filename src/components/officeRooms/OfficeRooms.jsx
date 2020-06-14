import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import WorkRooms from './WorkRooms.jsx';
import CommonInfo from './CommonInfo.jsx';
import OtherRooms from './OtherRooms.jsx';

class OfficeRooms extends Component {
    render() {
        return(
            <Container maxWidth="lg">
                <Grid container justify="space-between" spacing={2}>
                    <Grid item md={2} >
                        <CommonInfo />
                    </Grid>
                    <Grid item md={10}>
                        <WorkRooms />
                        <OtherRooms />
                    </Grid>
                </Grid>
            </Container>
        )
    }
}

export default OfficeRooms;