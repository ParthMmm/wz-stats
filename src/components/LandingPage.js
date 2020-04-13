import React, {Component} from 'react';
import '../App.css';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

const API = require('call-of-duty-api')({ platform: "battle" });


class LandingPage extends Component{



  componentDidMount(){
    API.MWwz('joji#11314').then(data => {
        console.log(data);  // see output
    }).catch(err => {
        console.log(err);
    });
    const br = this.pro
  }
  render(){
    return(
      <Jumbotron fluid>
        <Container>
          <h1>WZ Stats</h1>
          <p>Warzon stats.</p>
        </Container>
      </Jumbotron>
    );
  }
}

export default LandingPage
