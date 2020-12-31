import React from 'react'
import Style from './App.module.css';
import '../UI/WishBox/RoundWishBox/RoundWishBox'
import RoundWishBox from '../UI/WishBox/RoundWishBox/RoundWishBox';
import Snow from '../UI/Snow/Snow'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Bubble from '../UI/Bubble/Bubble';
import ReactGa from 'react-ga';

function App() {
  const bubbles = Array(130);
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i] = <Bubble key={i} />
  }

  const onLinkClick = (link) => {
    ReactGa.event({
        category: "Website reach out",
        action: "Clicked on contact item: " + link,
    });

    window.open(link, '_blank', 'noopener', 'me', 'noreferrer');
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
      </Row>
      <div className={Style.credits} onClick={() => onLinkClick("https://antonio-calabrese.com")}>
        Created By: <u>Antonio Calabrese</u>
      </div>
    </Container>
  );
}

export default App;
