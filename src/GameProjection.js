import React, { Component } from 'react';
const classNames = require('classnames');

class GameProjection extends Component {
  constructor(props) {
    super(props);
    this.state = { isShowingTrends: false };

    this.handleDetailsClick = this.handleDetailsClick.bind(this);
  }

  handleDetailsClick() {
    this.setState((prevState) => (
      {isShowingTrends: !prevState.isShowingTrends}
    ));
  }

  renderTrends() {
    const { last5 } = this.props.game;
    console.warn(last5);
    const isHomeFavored = last5.homeTotal > last5.awayTotal;
    const isAwayFavored = !isHomeFavored;
    const homeRowClasses = classNames(
      'projection-row',
      {
        'winner-last5': isHomeFavored,
      }
    );
    const awayRowClasses = classNames(
      'projection-row',
      {
        'winner-last5': isAwayFavored,
      }
    );
    return (
      <div className="last5-container">
        <div className="projection-row">
          <div className="projection-row-section">
            <div className="projection-value">
              {last5.home.homeTeam}
            </div>
          </div>
          <div className="projection-row-section">
            <div className="projection-value number">
              GF: {last5.home.goalsFor} GA: {last5.home.goalsAgainst}<br/>Streak: {last5.home.streak}
            </div>
          </div>
        </div>
        <div className="projection-row">
          <div className="projection-row-section">
            <div className="projection-value">
              {last5.away.awayTeam}
            </div>
          </div>
          <div className="projection-row-section">
            <div className="projection-value number">
              GF: {last5.away.goalsFor} GA: {last5.away.goalsAgainst}<br/>Streak: {last5.away.streak}
            </div>
          </div>
        </div>
        <div className={homeRowClasses}>
          <div className="projection-row-section">
            <div className="projection-sub-label">
              Home~5
            </div>
            <div className="projection-value">
              {last5.home.homeTeam}
            </div>
          </div>
          <div className="projection-row-section">
            <div className="projection-sub-label">
              Home~5
            </div>
            <div className="projection-value number">
              {last5.homeTotal}
            </div>
          </div>
        </div>
        <div className={awayRowClasses}>
          <div className="projection-row-section">
            <div className="projection-sub-label">
              Away~5
            </div>
            <div className="projection-value">
              {last5.away.awayTeam}
            </div>
          </div>
          <div className="projection-row-section">
            <div className="projection-sub-label">
              Away~5
            </div>
            <div className="projection-value number">
              {last5.awayTotal}
            </div>
          </div>
        </div>
        <div className="projection-row">
          <div className="projection-row-section">
            <div className="projection-value">
              Total~5
            </div>
          </div>
          <div className="projection-row-section">
            <div className="projection-value number">
              {last5.gameTotal}
            </div>
          </div>
        </div>
        <div className="projection-row">
          <div className="projection-row-section">
            <div className="projection-value">
              Value~5
            </div>
          </div>
          <div className="projection-row-section">
            <div className="projection-value number">
              <strong>{last5.algorithmScore}</strong>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const { game } = this.props;
    const isHomeFavored = game.homeTotal > game.awayTotal;
    const isAwayFavored = !isHomeFavored;
    const homeRowClasses = classNames(
      'projection-row',
      {
        'winner': isHomeFavored,
      }
    );
    const awayRowClasses = classNames(
      'projection-row',
      {
        'winner': isAwayFavored,
      }
    );
    return (
      <div className="projection">
        <div className={homeRowClasses}>
          <div className="projection-row-section">
            <div className="projection-sub-label">
              Home
            </div>
            <div className="projection-value">
              {game.homeTeam}
            </div>
          </div>
          <div className="projection-row-section">
            <div className="projection-sub-label">
              Home
            </div>
            <div className="projection-value number">
              {game.homeTotal}
            </div>
          </div>
        </div>
        <div className={awayRowClasses}>
          <div className="projection-row-section">
            <div className="projection-sub-label">
              Away
            </div>
            <div className="projection-value">
              {game.awayTeam}
            </div>
          </div>
          <div className="projection-row-section">
            <div className="projection-sub-label">
              Away
            </div>
            <div className="projection-value number">
              {game.awayTotal}
            </div>
          </div>
        </div>
        <div className="projection-row">
          <div className="projection-row-section">
            <div className="projection-value">
              Total
            </div>
          </div>
          <div className="projection-row-section">
            <div className="projection-value number">
              {game.gameTotal}
            </div>
          </div>
        </div>
        <div className="projection-row">
          <div className="projection-row-section">
            <div className="projection-value">
              Value
            </div>
          </div>
          <div className="projection-row-section">
            <div className="projection-value number">
              <strong>{game.algorithmScore}</strong>
            </div>
          </div>
        </div>
        <div className="projection-row projection-show-details">
          <span className="show-details-text" onClick={this.handleDetailsClick}>
            {this.state.isShowingTrends ? "Hide trends" : "Show trends"}
          </span>
        </div>
        {this.state.isShowingTrends ? this.renderTrends() : null}
      </div>
    );
  }
}

export default GameProjection;