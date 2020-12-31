import React from 'react'
import Style from './App.module.css';
import '../UI/WishBox/RoundWishBox/RoundWishBox'
import RoundWishBox from '../UI/WishBox/RoundWishBox/RoundWishBox';
import Snow from '../UI/Snow/Snow'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Bubble from '../UI/Bubble/Bubble';

function App() {
  const bubbles = Array(130);
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i] = <Bubble key={i} />
  }

  return (
    <Container fluid>
      <Snow />
      <div id="#bubbles">
        {bubbles}
      </div>
      <Row className={[Style['main-content'], "flex-grow-1", "align-items-center", "justify-content-center"].join(" ")}>
        <Col className={"align-items-center"} xs={{ span: 12 }} md={{ span: 6 }} lg={{ span: 4 }} >
          <RoundWishBox />
        </Col>
        <Row>
          <Col className={"align-items-end"}>
            <p>Created By:<a href="https://antonio-calabarese.com/">Antonio Calabrese</a></p>
          </Col>
        </Row>

      </Row>
    </Container>
  );
}

export default App;
