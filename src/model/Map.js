import React, { Component } from 'react';
import Monitor from "./MapList/Monitor";
import Amap from "./MapList/Amap";


class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="width_6">
                <Monitor  />
                <Amap />
            </div>
        );
    }
}

export default Map;