import React, { Component } from 'react';

class DatePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: ''
    };

    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleDateChange(event) {
    console.warn(event.target.value);
    const selectedDate = event.target.value;
    this.setState({
      selectedDate
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.warn(this.state.selectedDate);
    const date = new Date(this.state.selectedDate);
    this.props.history.push(`/admin-scores/results?month=${date.getUTCMonth() + 1}&day=${date.getUTCDate()}&year=${date.getUTCFullYear()}`);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="schedule">Select a day to get projections for:</label>
            <input
              type="date"
              id="schedule"
              name="schedule"
              value={this.state.selectedDate}
              onChange={this.handleDateChange}
              />
          </div>
          <div>
            Your selected date: {this.state.selectedDate}
          </div>
          <div>
            <button
              disabled={!this.state.selectedDate}
            >
              Get projections!
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default DatePage;