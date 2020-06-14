import React, { Component } from 'react';
import Container from '@material-ui/core/Container';

import News from './News.jsx';
import KPIshort from './KPIshort.jsx';
import Chart from './Chart.jsx';

class Home extends Component {
    render () {
        return(
            <Container maxWidth="lg">
                <News />
                <KPIshort />
                <Chart />
            </Container>
        )
    }
}

export default Home;