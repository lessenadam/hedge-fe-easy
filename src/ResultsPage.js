import React, { Component } from 'react';
import queryString from 'query-string';
import { Link } from 'react-router-dom'
import axios from 'axios';
import ResultsList from './ResultsList';

// const mockData = JSON.parse('[{"date":"Oct 09 18","homeTeam":"Vancouver Canucks","awayTeam":"Carolina Hurricanes","homeTotal":3.3887195121951224,"awayTotal":3.9583333333333335,"gameTotal":7.347052845528456,"algorithmScore":"1.3644"},{"date":"Oct 09 18","homeTeam":"Colorado Avalanche","awayTeam":"Columbus Blue Jackets","homeTotal":3.753658536585366,"awayTotal":2.5484126984126982,"gameTotal":6.302071234998064,"algorithmScore":"2.1696"},{"date":"Oct 09 18","homeTeam":"Toronto Maple Leafs","awayTeam":"Dallas Stars","homeTotal":5.595731707317072,"awayTotal":4.071428571428571,"gameTotal":9.667160278745644,"algorithmScore":"1.8889"},{"date":"Oct 09 18","homeTeam":"Calgary Flames","awayTeam":"Nashville Predators","homeTotal":1.6726371951219514,"awayTotal":2.7142857142857144,"gameTotal":4.386922909407666,"algorithmScore":"2.6333"},{"date":"Oct 09 18","homeTeam":"San Jose Sharks","awayTeam":"Philadelphia Flyers","homeTotal":4.170731707317072,"awayTotal":2.744444444444444,"gameTotal":6.915176151761516,"algorithmScore":"2.3095"},{"date":"Oct 09 18","homeTeam":"Los Angeles Kings","awayTeam":"Winnipeg Jets","homeTotal":1.1469512195121951,"awayTotal":2.9857142857142853,"gameTotal":4.1326655052264805,"algorithmScore":"6.7765"}]');

//
// Enter a real scoresUrl below, or use the mock data above
//
const scoresUrl = 'http://ec2-34-220-105-24.us-west-2.compute.amazonaws.com:8080/results';

class ResultsPage extends Component {
  state = {
    loading: false,
    results: null,
    error: null,
  };

  componentDidMount() {
    const { month, day, year } = queryString.parse(this.props.location.search)
    if (!month || !day || !year) {
      this.props.history.replace('/admin-scores');
    } else {
      // console.warn('fetching data here');
      this.setState({
        loading: true,
      });
      const params = {
        month,
        day,
        year,
      };
      axios.get(scoresUrl, { params })
        .then(res => {
          console.warn(res.data);
          this.setState({
            loading: false,
            results: res.data,
          });
        })
        .catch(err => {
          console.warn(err);
          this.setState({
            loading: false,
            error: err,
          });
        });
      // this.setState({
      //   results: mockData,
      // });
    }
  }

  render() {
    return (
      <div>
        <h1>ResultsPage</h1>
        <ResultsList loading={this.state.loading} results={this.state.results} error={this.state.error} />
        <div>
          <Link to="/admin-scores"><button>Select another date</button></Link>
        </div>
      </div>
    );
  }
}

export default ResultsPage;