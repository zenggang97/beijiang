import React, { Component } from 'react';
import { Chart, Geom, Axis,Tooltip} from "bizcharts";

class Mon extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        const data = [
            {
                month: "1月",
                acc: 84.0
            },
            {
                month: "2月",
              acc: 14.9
            },
            {
                month: "3月",
                acc: 17.0
            },
            {
                month: "4月",
                acc: 20.2
            },
            {
                month: "5月",
                acc: 55.6
            },
            {
              month: "6月",
              acc: 56.7
            },
            {
                month: "7月",
                acc: 63.2
            },
            {
                month: "8月",
                acc: 24.6
            },
            {
                month: "9月",
                acc: 74.0
            },
            {
                month: "10月",
                acc: 49.4
            },
            {
                month: "11月",
                acc: 66.3
            },{
                month: "12月",
                acc: 96.3
            }
        ];
        const cols = {
            month: {
                alias: "月份"
            },
            acc: {
                alias: "货物吞吐量"
            }
        };

        return (
            <div className='height_360' >
                <p className='rectangle'>北江月度货物吞吐量统计</p>
                <div className='mon'>
                    <Chart height={380} data={data} scale={cols} forceFit>
                        <Axis
                            name="month"
                            tickLine={null}
                            label={{
                                offset: 14,
                                textStyle: {
                                    fill: '#444c69',
                                    fontSize: '14',
                                    fontFamily:'Bahnschrift'
                                }
                            }}
                            line={{
                                stroke:'#131a42',
                                lineWidth:2
                            }}
                        />
                        <Axis
                            name="acc"
                            label={{
                                offset: 4,
                                textStyle: {
                                    fill: '#444c69',
                                    fontSize: '14',
                                    fontFamily:'Bahnschrift'
                                }
                            }}
                            grid = {{
                                type: 'line', // 网格的类型
                                lineStyle: {
                                stroke: '#131a42', // 网格线的颜色
                                lineDash:null
                                }
                            }}
                        />
                        <Tooltip
                        shared={false}
                        g2-tooltip={{
                            backgroundColor:'#3b3e61e6',
                            boxShadow:'0px 6px 15px #2b2e4a',
                            color:'#fff',
                            fontFamily:'Bahnschrift'
                        }}
                        itemTpl="<li data-index={index}>
                                    <p style='color:#999;font-size:12px;'>
                                        {name}:
                                        <span style='color:#ED0E6A;font: bold 18px Bahnschrift;'>
                                            {value}&nbsp;
                                        </span>万吨
                                    </p>
                                </li>"/>
                        <Geom 
                            type="area" 
                            position="month*acc" 
                            shape="smooth"
                            color='l(270)  0:#3f60ea00  0.5:#3f60ea'
                        />
                        <Geom 
                            type="line"
                            Active={false}
                            position="month*acc"
                            size={2}
                            color="#3f60ea"
                            shape="smooth"
                        />   
                    </Chart>
                </div>
            </div>
        );
    }
}

export default Mon;