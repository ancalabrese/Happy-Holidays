import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './Components/App/App';
import reportWebVitals from './reportWebVitals';
import ReactGa from 'react-ga'
import { Helmet } from 'react-helmet'

ReactDOM.render(
  <React.StrictMode>
    {/* <Helmet>
      <meta charSet="utf-8" />
      <title>Happy Code!</title> */}
      {/* <meta name="description" content="Online Christmas card" />
      <noscript>
        Online christmas card <br />
        You need to enable JavaScript to run this app.
      </noscript>
      <link rel="canonical" href="http://mysite.com/example" />
      <meta name="keywords" content="Christmas, Card, Christmas card,Christmas card online, wishes, new year" />
      <meta name="author" content="Antonio Calabrese" /> */}
    {/* </Helmet> */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
