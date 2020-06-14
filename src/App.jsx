import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router } from "react-router-dom";
import customeTheme from './js/customeTheme';
import { connect } from 'react-redux';
import 'typeface-roboto';
import './styles/index.scss';
import asynkGet from './store/actions/testAsynk'

import ContentRoot from './components/ContentRoot.jsx';
import Navigation from './components/navigation/Navigation.jsx';

class App extends Component {
  // testDispLocal = () => {
  //   this.props.testDisp('test')
  // }
  // mochData = () => {
  //   return (this.props.testThunk('asdasdasd'))
  // }
  render() {
    return (
      <ThemeProvider theme={customeTheme}>
        <Router>
          <div className="App">
            <Navigation />
            <ContentRoot />
            {/* <div onClick={this.testDispLocal}>Kry Kry</div>
            <div onClick={this.mochData}>Myau Myau</div> */}
          </div>
        </Router>
      </ThemeProvider>
    );
  }
}

// export default connect(
//   state => ({testStore: state}),
//   dispatch => ({
//     testThunk: (as) => {
//       dispatch(asynkGet(as));
//     },
//     testDisp: (text) => {
//       dispatch({type: 'TEST_TYPE', payload: text})
//     }
//   })
// )(App);

export default App;
