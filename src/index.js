import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

// const routs = (
//   < BrowserRouter >
//      <div>
//         <ul>
//            <li>
//               <Link to="/">Home</Link>
//            </li>
//            <li>
//               <Link to="/leaderboard">LeaderBoard</Link>
//            </li>
//            <li>
//               <Link to="/postmarks">Post Marks</Link>
//            </li>
//         </ul>
//         <Route exact path="/" component={App} />
//         <Route path="/leaderboard" component={CallBoard} />
//         <Route path="/postmarks" component={Forms} />
//      </div>
//   </ BrowserRouter >
// );

ReactDOM.render(
  <App/>, 
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
