import React, { Component } from 'react';
import { Map,Markers } from 'react-amap';

const colors = [
    {color:'#ff0000'},
    {color:'#ff9234'},
    {color:'#04dead'},
    {color:'#4ef037'},
    {color:'#f6490d'},
    {color:'#bff4ed'},
];

class Amap extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            markers: [
                {
                    position: [113.267408,23.809369],
                    type:"cargo"
                },
                {
                    position: [113.264417,23.79974],
                    type:"danger"
                },
                {
                    position: [113.257293,23.795657],
                    type:"people"
                },
                {
                    position: [113.256864,23.794714],
                    type:"container"
                },
                {
                    position: [113.24708,23.789609],
                    type:"box"
                },
                {
                    position: [113.24605,23.789217],
                    type:"other"
                },
                {
                    position: [113.238926,23.784661],
                    type:"cargo"
                },
                {
                    position: [113.055033,23.692835],
                    type:"danger"
                },
                {
                    position: [113.000101,23.687805],
                    type:"people"
                },
                {
                    position: [112.997698,23.681202],
                    type:"container"
                },
                {
                    position: [112.971948,23.647241],
                    type:"box"
                },
                {
                    position: [112.958902,23.606036],
                    type:"other"
                },
                {
                    position: [113.102411,23.697236],
                    type:"cargo"
                },
                {
                    position: [113.199743,23.738256],
                    type:"danger"
                },
                {
                    position: [113.220171,23.758054],
                    type:"people"
                },
                {
                    position: [113.1891,23.711382],
                    type:"container"
                },
                {
                    position: [113.180517,23.698965],
                    type:"box"
                },
                {
                    position: [113.153051,23.697236],
                    type:"other"
                },
                {
                    position: [113.145155,23.701009],
                    type:"cargo"
                },
                {
                    position: [113.134683,23.705095],
                    type:"danger"
                },
                {
                    position: [113.133138,23.705881],
                    type:"people"
                },
                {
                    position: [113.23047,23.77832],
                    type:"container"
                },
                {
                    position: [113.206781,23.743598],
                    type:"box"
                },
                {
                    position: [113.261884,23.840669],
                    type:"other"
                },
                {
                    position: [113.258108,23.816958],
                    type:"cargo"
                },
                {
                    position: [112.798612,23.137049],
                    type:"danger"
                },
                {
                    position: [112.798612,23.137049],
                    type:"people"
                },
                {
                    position: [112.835004,23.02145],
                    type:"container"
                },
                {
                    position: [112.598798,23.161672],
                    type:"box"
                },
                {
                    position: [112.964093,22.827299],
                    type:"other"
                },
                {
                    position: [113.053357,22.806413],
                    type:"cargo"
                },
                {
                    position: [112.808912,23.191971],
                    type:"danger"
                },
                {
                    position: [112.886502,23.343994],
                    type:"people"
                },
                {
                    position: [112.837751,23.257596],
                    type:"container"
                },
                {
                    position: [112.814405,23.080841],
                    type:"box"
                },
                {
                    position: [112.841184,23.006914],
                    type:"other"
                },
                {
                    position: [112.878263,22.956975],
                    type:"cargo"
                },
                

            ]
         };
    }

    renderMarker(extData){
        if (extData.type === "cargo"){
          return <div style={colors[0]}>⦁</div>;
        }else if(extData.type === "danger"){
            return <div style={colors[1]}>⦁</div>;
        }
        else if(extData.type === "people"){
            return <div style={colors[2]}>⦁</div>;
        }
        else if(extData.type === "container"){
            return <div style={colors[3]}>⦁</div>;
        }
        else if(extData.type === "box"){
            return <div style={colors[4]}>⦁</div>;
        }else{
            return <div style={colors[5]}>⦁</div>;
        }
        
    }

    render() {
        return (
            <div className='relative height_740' >
                <Map 
                    amapkey={'db5165a3b2dd82367db75afcd40f4fe3'}
                    mapStyle="amap://styles/e80898bd3771b93bf548683b39b28b30" 
                    features={ ['bg', 'road']}
                    pitch={70}
                    viewMode="3D"
                    skyColor='#090918'
                    rotation={-10}
                    zoom={10}  
                    center={[113.484522,23.378854]}
                >
                    <Markers 
                        markers={this.state.markers}
                        render={this.renderMarker}
                        offset={[-5,-13]}
                    />
                </Map>
                <div className='fugai'></div>
            </div>
        );
    }
}

export default Amap;