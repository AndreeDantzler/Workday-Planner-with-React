import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave } from '@fortawesome/free-solid-svg-icons'
import moment from "moment";

class TimeBlock extends Component {
  constructor(props) {
    super(props);

    this.data = JSON.parse(localStorage.getItem("scheduler")) || {};

    this.state = {
      value: this.data[this.props.time] || "",
    };

    this.possibleHour = [
      "12AM",
      "1AM",
      "2AM",
      "3AM",
      "4AM",
      "5AM",
      "6AM",
      "7AM",
      "8AM",
      "9AM",
      "10AM",
      "11AM",
      "12PM",
      "1PM",
      "2PM",
      "3PM",
      "4PM",
      "5PM",
      "6PM",
      "7PM",
      "8PM",
      "9PM",
      "10PM",
      "11PM",
    ];

    this.currentHour = moment().format("ha").toUpperCase();

    this.pastTime = this.possibleHour.slice(0, this.possibleHour.indexOf(this.currentHour));
    this.futureTime = this.possibleHour.slice(this.possibleHour.indexOf(this.currentHour) + 1);
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  }

  saveNote = () => {
    const key = this.props.time;
    this.data[key] = this.state.value;
    localStorage.setItem("scheduler", JSON.stringify(this.data));
  }

  render() {
    let className = "";

    if (this.props.time === this.currentHour) {
      className = "present";
    } else if (this.pastTime.includes(this.props.time)) {
      className = "past"
    } else if (this.futureTime.includes(this.props.time)) {
      className = "future"
    }

    return (
      <div className="row">
        <div className="col hour">{this.props.time}</div>
        <textarea className={`col-10 ${className}`} value={this.state.value} onChange={this.handleChange}></textarea>
        <div className="col saveBtn" onClick={this.saveNote}>
          <FontAwesomeIcon icon={faSave} />
        </div>
      </div>
    );
  }
}

export default TimeBlock;
