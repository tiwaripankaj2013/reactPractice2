import React from "react";
import '../css/clock.css';

class Digitalclock extends React.Component{
    constructor() {
        super();
        this.state = { 
          time: new Date()
        };
    }
    startTime() {
        this.setState({
           time: new Date() 
        });
      }
    componentDidMount() {
      this.interval = setInterval(() =>
      this.startTime(), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }  
   render(){
    return (
        <React.Fragment>
           <div className="clock">
            <div className="clock-inner">
              <p>{this.state.time.toLocaleTimeString()}</p>
            </div>
            </div>
        </React.Fragment>
      );
   }
}

export default Digitalclock;

