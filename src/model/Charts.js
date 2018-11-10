import React, { Component } from 'react';
import Dam from "./ChartList/Dam";
import Mon from "./ChartList/Mon";
import Year from "./ChartList/Year";


class Charts extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="width_4" >
                <Dam />
                <Mon />
                <Year />
            </div>
        );
    }
}

export default Charts;