import logo from './logo.svg';
// import Leaderboard from 'react-leaderboard';44
import Leaderboard from './components/Leaderboard'
import './App.css';
import React,{ Component } from 'react';

class App extends Component {
  constructor(props) {
  super(props);
  this.state = {
    users: [{name: "Tj", percent: 1, physics:92.2, chemistry:90.1, maths:75, total:240, roll:1156},
            {name: "Chris", percent: 69, physics:92.4, chemistry:80.0, maths:75, total:240, roll:1156},
            {name: "Dave", percent: 17, physics:92.6, chemistry:95.0, maths:75, total:240, roll:1156},
            {name: "Ben", percent: 11, physics:92.2, chemistry:96.0, maths:75, total:240, roll:1156},
            {name: "Caty", percent: 21, physics:91.2, chemistry:60.0, maths:75, total:240, roll:1156},
            {name: "Miller", percent: 33, physics:90.2, chemistry:90.2, maths:75, total:240, roll:1156},
            {name: "Zack", percent: 88, physics:94.2, chemistry:94.0, maths:75, total:240, roll:1156},
            {name: "Sam", percent: 42, physics:95.2, chemistry:93.0, maths:75, total:240, roll:1156},
            {name: "Nicky", percent: 22, physics:96.2, chemistry:70.0, maths:75, total:240, roll:1156}],
    paginate: 3
  };
}
  render() {
    return (
      <div>
        <center>
        <div >
        <Leaderboard users={this.state.users} paginate={this.state.paginate}/>
      </div>
        </center>
      </div>

    );
  }
}

export default App;
