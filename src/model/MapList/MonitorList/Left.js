import React, { Component } from 'react';
import {Chart,Axis,Tooltip, Legend, Facet,} from "bizcharts";
import DataSet from "@antv/data-set";

class Left extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    
    render() {
        const data = [
            {
                all: 65129,
                area: "外籍船舶",
                profit: 166
            },
            {
                all: 65129,
                area: "清远船舶",
                profit: 243
            },
            {
                all: 65129,
                area: "韶关船舶",
                profit: 275
            },
            {
                all: 65129,
                area: "广州船舶",
                profit: 98
            },
            {
                all: 65129,
                area: "惠州船舶",
                profit: 196
            },
            {
                all: 65129,
                area: "肇庆船舶",
                profit: 213
            },
            {
                all: 65129,
                area: "江门船舶",
                profit: 111
            },
            {
                all: 65129,
                area: "其他船舶",
                profit: 223
            },
            {
                all: 76528,
                area: "外籍船舶",
                profit: 123
            },
            {
                all: 76528,
                area: "清远船舶",
                profit: 70
            },
            {
                all: 76528,
                area: "韶关船舶",
                profit: 23
            },
            {
                all: 76528,
                area: "广州船舶",
                profit: 219
            },
            {
                all: 76528,
                area: "惠州船舶",
                profit: 130
            },
            {
                all: 76528,
                area: "肇庆船舶",
                profit: 171
            },
            {
                all: 76528,
                area: "江门船舶",
                profit: 139
            },
            {
                all: 76528,
                area: "其他船舶",
                profit: 92
            }
        ];
    
        const { DataView } = DataSet;
    
        return (
             <div className="height_380_left height_380">
                 <p className='rectangle'>交通量统计(离开/进入)北江</p>
                 <ul className='justify_around'>
                    <li className='flex_align_center color_11'>进入船舶</li>
                    <li className='flex_align_center color_11'>离开船舶</li>
                </ul>
                <div className='pie'>
                    <Chart height={310} data={data} padding={[-15, 'auto', 45, 'auto']} forceFit>
                        <Axis name="percent" />
                        <Tooltip 
                            showTitle={false}
                            g2-tooltip={{
                                backgroundColor:'#3b3e61e6',
                                boxShadow:'0px 6px 15px #2b2e4a',
                                color:'#fff',
                                fontFamily:'Bahnschrift'
                            }}
                            itemTpl="<li data-index={index}>
                                        <p style=&quot;color:#999;font-size:12px;&quot;>
                                            {name}:
                                            <span style=&quot;color:#ED0E6A;font: bold 18px Bahnschrift;&quot;>
                                                {value}&nbsp;
                                            </span>
                                        </p>
                                     </li>" 
                        />
                        <Legend  offsetY={-20}/>
                        <Facet
                            type="rect"
                            fields={["all"]}
                            padding={50}
                            colTitle={{
                                offsetY: 95,
                                style: {
                                    fontSize: 36,
                                    fontWeight:600,
                                    fontFamily:"Bahnschrift",
                                    textAlign: "center",
                                    fill: "#fff"
                                }
                            }}
                            eachView={(view, facet) => {
                                const data = facet.data;
                                const dv = new DataView();
                                dv.source(data).transform({
                                    type: "percent",
                                    field: "profit",
                                    dimension: "area",
                                    as: "percent"
                                });
                                view.source(dv, {
                                    percent: {
                                        formatter: val => {
                                            return (val * 100).toFixed(2) + "%"; 
                                        }
                                    }
                                });
                                view.coord("theta", {
                                    innerRadius: 0.65
                                });
                                
                                view.intervalStack()
                                    .position("percent")
                                    .color("area", ['#375eff', '#ff0069'])
                                    .label("profit", {
                                        formatter:(val) => {
                                            return val+" 艘";    
                                        },
                                        textStyle:{
                                            fill: '#7c95ff', // 文本的颜色
                                            fontWeight: 'bold', // 文本粗细 
                                            fontSize: 16,
                                            fontFamily:"Bahnschrift", 
                                        },
                                        labelLine:{
                                            lineWidth: 2, // 线的粗细
                                        },
                                        offset: 12
                                    })
                                    .style({
                                        lineWidth: 2,
                                        stroke: "#090918"
                                    }); 
                                
                                }    
                            }
                        /> 
                    </Chart>
                </div>
             </div>
        );
    }
}

export default Left;