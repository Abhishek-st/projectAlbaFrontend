
import Leaderboard from './Leaderboard'
import React,{ Component } from 'react';

class CallBoard extends Component {
  constructor(props) {
  super(props);
  this.state = {
    users: [],
    paginate: 5
  };

  let url = "http://localhost:8000/api/leaderBoard/"
  fetch(url)
      .then(response => response.json())
      .then(data =>  this.setState({users:data, paginate:5}))
      .catch(error => console.error('Error:', error));

  console.log(this.state.users)

}

componentDidMount() {
    // 



}

  render() {

    if(!this.state.users.length)
        return null;

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

export default CallBoard;