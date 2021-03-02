import React, { Component } from 'react';
import '../css/leader.css';

/**
   * @class Leaderboard
   * @desc Compares the score property of each user object
   * @param {Prop} users-an array of objects with name and score properties
   * @param {Prop} paginate-integer to determine how many users to display on each page
*/
class Leaderboard extends Component {
  constructor(props) {
    super(props);

    this.sortUsersByPercent = this.sortUsersByPercent.bind(this);
    this.sortUsersByName = this.sortUsersByName.bind(this);
    this.sortUsersByRoll = this.sortUsersByRoll.bind(this)
    this.sortUsersByPhysics = this.sortUsersByPhysics.bind(this)
    this.sortUsersByChemistry = this.sortUsersByChemistry.bind(this)
    this.sortUsersByMaths = this.sortUsersByMaths.bind(this)
    this.sortUsersByTotal = this.sortUsersByTotal.bind(this)
    this.filterRank = this.filterRank.bind(this);
    this.increasePage = this.increasePage.bind(this);
    this.decreasePage = this.decreasePage.bind(this);

    this.state = {
      users: this.props.users,
      ranking: [],
      asc: false,
      alph: false,
      page: 1,
      pageMax: 1,
    };
  }

  /**
     * @function componentDidMount
     * @desc Sorts users by score then adds a ranking key to each user object when the component loads. Then sets the ranking state
  */
  componentDidMount() {
    const ranking = this.state.users;
    const paginate = this.props.paginate;
    ranking.sort(this.comparePercent).reverse();
    ranking.map((user, index) => user.rank = index +1);
    ranking.map((user, index) => user.page = Math.ceil((index+1)/paginate));
    this.setState({ pageMax: ranking[ranking.length - 1].page})
    this.setState({ ranking: ranking});
  }

  /**
     * @function comparePercent
     * @desc Compares the score property of each user object
     * @param {Object, Object} user
  */
  comparePercent(a,b) {
    if (a.percent < b.percent)
      return -1;
    if (a.percent > b.percent)
      return 1;
    return 0;
  }

  /**
     * @function comparePercent
     * @desc Compares the score property of each user object
     * @param {Object, Object} user
  */
 compareTotal(a,b) {
    if (a.total < b.total)
      return -1;
    if (a.total > b.total)
      return 1;
    return 0;
  }


/**
  * @function compareRoll
     * @desc Compares the score property of each user object
     * @param {Object, Object} user
  */
 compareRoll(a,b) {
    if (a.roll < b.roll)
      return -1;
    if (a.roll > b.roll)
      return 1;
    return 0;
  }
  /**
     * @function comparePhysics
     * @desc Compares the name property of each user object alphabetically
     * @param {Object, Object} user
  */

  comparePhysics(a,b) {
    if (a.physics < b.physics)
      return -1;
    if (a.physics > b.physics)
      return 1;
    return 0;
  }
  /**
     * @function compareMaths
     * @desc Compares the name property of each user object alphabetically
     * @param {Object, Object} user
  */
  compareMaths(a,b) {
    if (a.maths < b.maths)
      return -1;
    if (a.maths > b.maths)
      return 1;
    return 0;
  }
  /**
     * @function compareChemistry
     * @desc Compares the name property of each user object alphabetically
     * @param {Object, Object} user
  */
  compareChemistry(a,b) {
    if (a.chemistry < b.chemistry)
      return -1;
    if (a.chemistry > b.chemistry)
      return 1;
    return 0;
  }

  /**
     * @function compareName
     * @desc Compares the name property of each user object alphabetically
     * @param {Object, Object} user
  */
  compareName(a,b) {
    if (a.name < b.name)
      return -1;
    if (a.name > b.name)
      return 1;
    return 0;
  }

  /**
     * @function sortUsersByScore
     * @desc Sorts the ranking by score either ascending or descending
  */
  sortUsersByPercent() {
    const ranking = this.state.ranking;
    const paginate = this.props.paginate;
    if(this.state.asc === true) {
      ranking.sort(this.comparePercent).reverse();
      ranking.map((user, index) => user.page = Math.ceil((index+1)/paginate));
      this.setState({ ranking: ranking});
      this.setState({ asc: false});
      this.setState({ alph: false});
    } else {
      ranking.sort(this.comparePercent);
      ranking.map((user, index) => user.page = Math.ceil((index+1)/paginate));
      this.setState({ ranking: ranking});
      this.setState({ asc: true});
      this.setState({ alph: false});
    }
  }

  /**
     * @function sortUsersByTotal
     * @desc Sorts the ranking by score either ascending or descending
  */
 sortUsersByTotal() {
    const ranking = this.state.ranking;
    const paginate = this.props.paginate;
    if(this.state.asc === true) {
      ranking.sort(this.compareTotal).reverse();
      ranking.map((user, index) => user.page = Math.ceil((index+1)/paginate));
      this.setState({ ranking: ranking});
      this.setState({ asc: false});
      this.setState({ alph: false});
    } else {
      ranking.sort(this.compareTotal);
      ranking.map((user, index) => user.page = Math.ceil((index+1)/paginate));
      this.setState({ ranking: ranking});
      this.setState({ asc: true});
      this.setState({ alph: false});
    }
  }

  /**
     * @function sortUsersByRoll
     * @desc Sorts the ranking by score either ascending or descending
  */
 sortUsersByRoll() {
    const ranking = this.state.ranking;
    const paginate = this.props.paginate;
    if(this.state.asc === true) {
      ranking.sort(this.compareRoll).reverse();
      ranking.map((user, index) => user.page = Math.ceil((index+1)/paginate));
      this.setState({ ranking: ranking});
      this.setState({ asc: false});
      this.setState({ alph: false});
    } else {
      ranking.sort(this.compareRoll);
      ranking.map((user, index) => user.page = Math.ceil((index+1)/paginate));
      this.setState({ ranking: ranking});
      this.setState({ asc: true});
      this.setState({ alph: false});
    }
  }

  /**
     * @function sortUsersByName
     * @desc Sorts the ranking by name alphabetically either ascending or descending
  */
  sortUsersByName() {
    const ranking = this.state.ranking;
    const paginate = this.props.paginate;
    if(this.state.alph === true) {
      ranking.sort(this.compareName).reverse();
      ranking.map((user, index) => user.page = Math.ceil((index+1)/paginate));
      this.setState({ ranking: ranking});
      this.setState({ alph: false});
      this.setState({ asc: true});
    } else {
      ranking.sort(this.compareName);
      ranking.map((user, index) => user.page = Math.ceil((index+1)/paginate));
      this.setState({ ranking: ranking});
      this.setState({ alph: true});
      this.setState({ asc: true});
    }
  }

  /**
     * @function sortUsersByPhysics
     * @desc Sorts the ranking by name alphabetically either ascending or descending
  */
 sortUsersByPhysics() {
    const ranking = this.state.ranking;
    const paginate = this.props.paginate;
    if(this.state.alph === true) {
      ranking.sort(this.comparePhysics).reverse();
      ranking.map((user, index) => user.page = Math.ceil((index+1)/paginate));
      this.setState({ ranking: ranking});
      this.setState({ alph: false});
      this.setState({ asc: true});
    } else {
      ranking.sort(this.comparePhysics);
      ranking.map((user, index) => user.page = Math.ceil((index+1)/paginate));
      this.setState({ ranking: ranking});
      this.setState({ alph: true});
      this.setState({ asc: true});
    }
  }

  /**
     * @function sortUsersByChemistry
     * @desc Sorts the ranking by name alphabetically either ascending or descending
  */
 sortUsersByChemistry() {
    const ranking = this.state.ranking;
    const paginate = this.props.paginate;
    if(this.state.alph === true) {
      ranking.sort(this.compareChemistry).reverse();
      ranking.map((user, index) => user.page = Math.ceil((index+1)/paginate));
      this.setState({ ranking: ranking});
      this.setState({ alph: false});
      this.setState({ asc: true});
    } else {
      ranking.sort(this.compareChemistry);
      ranking.map((user, index) => user.page = Math.ceil((index+1)/paginate));
      this.setState({ ranking: ranking});
      this.setState({ alph: true});
      this.setState({ asc: true});
    }
  }

  /**
     * @function sortUsersByMaths
     * @desc Sorts the ranking by name alphabetically either ascending or descending
  */
 sortUsersByMaths() {
    const ranking = this.state.ranking;
    const paginate = this.props.paginate;
    if(this.state.alph === true) {
      ranking.sort(this.compareMaths).reverse();
      ranking.map((user, index) => user.page = Math.ceil((index+1)/paginate));
      this.setState({ ranking: ranking});
      this.setState({ alph: false});
      this.setState({ asc: true});
    } else {
      ranking.sort(this.compareMaths);
      ranking.map((user, index) => user.page = Math.ceil((index+1)/paginate));
      this.setState({ ranking: ranking});
      this.setState({ alph: true});
      this.setState({ asc: true});
    }
  }
  /**
     * @function filterRank
     * @desc Filters through the ranking to find matches and sorts all matches by score
     * @param {String} search input
  */
  filterRank(e) {
    const ranking = this.state.users;
    console.log(ranking)
    const paginate = this.props.paginate;
    const newRanking = [];
    const inputLength = e.target.value.length
    for(var i = 0; i < ranking.length; i++) {
      const str = ranking[i].name.slice(0, inputLength).toLowerCase();
      if(str === e.target.value.toLowerCase()) {
        newRanking.push(ranking[i]);
      }
    }
    newRanking.sort(this.comparePercent).reverse();
    newRanking.map((user, index) => user.page = Math.ceil((index+1)/paginate));
    this.setState({ ranking: newRanking});
    if(newRanking.length>0){
        this.setState({ page: 1});
        this.setState({ pageMax: newRanking[newRanking.length - 1].page})
    }



  }

  /**
     * @function increasePage
     * @desc Increments page by one
     * @param {Event} Click
  */
  increasePage(e) {
    let page = this.state.page;
    if(page < this.state.pageMax){
      page += 1;
    }
    this.setState({ page: page});
  }

  /**
     * @function increasePage
     * @desc Decrements page by one
     * @param {Event} Click
  */
  decreasePage(e) {
    let page = this.state.page;
    if(page > 1){
      page -= 1;
    }
    this.setState({ page: page});
  }

  /**
     * @function render
     * @desc renders jsx
  */
  render() {
    return (
      <div>
        <table id="lBoard" className="table table-striped">
          <tbody className='ranking'>
            <tr>
              {/* <td colspan="10000"><h3>Leaderboard</h3></td> */}
            </tr>
            <tr>
              <td colSpan="10000">
                <form onChange={this.filterRank}>
                  Name: <input type="search" name="search" placeholder="Search for Name"/>
                </form>
              </td>
            </tr>
            <tr className="thead-dark"> 
              <td scope="col" className='rank-header sortScore' onClick={ this.sortUsersByPercent }> Rank </td>
              <td className='rank-header sortAlpha' onClick={ this.sortUsersByName }> Roll No </td>
              <td className='rank-header sortAlpha' onClick={ this.sortUsersByName }> Name </td>
              <td className='rank-header' onClick={ this.sortUsersByPercent }> Percentage </td>
              <td className='rank-header' onClick={ this.sortUsersByPhysics }> Physics </td>
              <td className='rank-header' onClick={ this.sortUsersByChemistry }> Chemistry </td>
              <td className='rank-header' onClick={ this.sortUsersByMaths }> Maths </td>
              <td className='rank-header' onClick={ this.sortUsersByMaths }> Total </td>
            </tr>
            {
            this.state.ranking.map((user, index) =>
               <tr className='ranking' key={index}>
                { user.page == this.state.page ? <td className='data'>{ user.rank }</td> : null }
                { user.page == this.state.page ? <td className='data'>{ user.roll }</td> : null }
                { user.page == this.state.page ? <td className='data'>{ user.name }</td> : null }
                { user.page == this.state.page ? <td className='data'>{ user.percent }</td> : null }
                { user.page == this.state.page ? <td className='data'>{ user.physics }</td> : null }
                { user.page == this.state.page ? <td className='data'>{ user.chemistry }</td> : null }
                { user.page == this.state.page ? <td className='data'>{ user.maths }</td> : null }
                { user.page == this.state.page ? <td className='data'>{ user.total }</td> : null }
               </tr>
             )
           }
          </tbody>
        </table>
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <button className='decrement btn btn-primary' onClick={ this.decreasePage }>prev</button>
            </div>
            {/* <div className="col-sm">
              { this.state.page == 1 ? null: <button onClick={ this.decreasePage }> { this.state.page - 1 }</button>}
              <button> { this.state.page }</button>
              { this.state.page < this.state.pageMax ? <button onClick={ this.increasePage }> { this.state.page + 1 }</button>: null }

            </div> */}
            <div className="col-sm">
                        <button className='increment btn btn-primary' onClick={ this.increasePage }>next</button>
            </div>
            
          </div>
        </div>


      </div>
    );
  }
}
export default Leaderboard;