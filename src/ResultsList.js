import React, { Component } from 'react';
import GameProjection from './GameProjection';

class ResultsList extends Component {
  render() {
    const { results, loading, error } = this.props;
    if (loading) {
      return 'Loading...';
    }

    if (error) {
      return 'Error';
    }

    if (results && results.length === 0) {
      return 'No games scheduled for the day';
    }

    if (results) {
      return (
        <div className="results-container">
          {results.map((item, index) => <GameProjection key={index} game={item}/>)}
        </div>
      );
    }

    return null;
  }
}

export default ResultsList;