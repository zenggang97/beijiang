import React, { Component } from 'react';
import Left from "./MonitorList/Left";
import Right from "./MonitorList/Right";

class Monitor extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="flex topSee" >
                <Left  />
                <Right  />
            </div>
        );
    }
}

export default Monitor;