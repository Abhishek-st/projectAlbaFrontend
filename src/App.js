import logo from './logo.svg';
// import Leaderboard from 'react-leaderboard';44
import CallBoard from './components/callBoard';
import Marks from './components/form';
import Home from './components/home';
import React,{ Component } from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";


class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>AlmaBetter</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/leaderboard">LeaderBoard</NavLink></li>
            <li><NavLink to="/postmarks">Post Marks</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
              <Route path="/leaderboard" component={CallBoard}/>
              <Route path="/postmarks" component={Marks}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
