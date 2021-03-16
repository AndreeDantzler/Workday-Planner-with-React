import React, { Component } from "react";
import moment from "moment";
   
class CurrentDay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDateTime: moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
    }
  }
  
  componentDidMount() {
    const interval = setInterval(() => this.updateTime(), 1000);
    this.setState({ interval });
  }
  
  componentWillUnmount() {
     clearInterval(this.state.interval);
  }
  
  updateTime(){
    this.setState({
      currentDateTime: moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
    });
  }

  render() {
    return (
      <p className="lead">
        { this.state.currentDateTime }
      </p>
    );
  }
}
  
export default CurrentDay;
