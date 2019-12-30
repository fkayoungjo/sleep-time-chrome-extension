import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import sleep from './sleep.png';


class App extends Component {
  render() {

    return (
    <div className= 'home'>
      <header className= 'head'>
        <Container>
          <Row className= 'row'>
            <Col>
              <p>SLEEPY<br></br>
              CORNER</p>
            </Col>
            <Col>
              <img src={sleep} alt="sleep" width="100" height="100"/>
            </Col>
          </Row>
        </Container>
      </header>
    </div>
    )
  }
}

export default App;
