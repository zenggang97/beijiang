import React, { Component } from 'react';
import {  Chart, Geom, Axis, Tooltip, Coord} from "bizcharts";
import DataSet from "@antv/data-set";

class Year extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        const data = [
            { port: '清远市清新县婆角码头', tonnage: 710.59 },
            { port: '中央储备粮清远直属库', tonnage: 223.85 },
            { port: '清远深水港码头', tonnage: 327.75 },
            { port: '清新港区婆角作业区旺角多用途泊位码头', tonnage: 1132.02 },
            { port: '江口码头', tonnage: 52.38 },
            { port: '清远港连州港区津尾码头', tonnage: 140.17 },
            { port: '建材码头', tonnage: 270.86 },
            { port: '英德市联行水运有限公司东堓咀货运码头', tonnage: 847.98 },
            { port: '英德市望埠镇鸿运码头', tonnage: 638.26 },
            { port: '东山公司专用码头', tonnage: 884.66 },
            { port: '台泥(英德)水泥有限公司专用码头', tonnage: 703.33 ,} 
        ];
        const ds = new DataSet();
        const dv = ds.createView().source(data);
        dv.source(data).transform({
            type: "sort",

            callback(a, b) {
              // 排序依据，和原生js的排序callback一致
              return a.population - b.population > 0;
            }
        });
        const cols = {
            port: {
                alias: "码头"
            },
            tonnage: {
                alias: "货物吞吐量"
            }
        };    


        return (
            <div className='height_380'>
                <p className='rectangle'>码头年度货物吞吐量统计</p>
                <div className='year'>
                    <Chart height={330} padding={[0,20,30,200]} data={dv} scale={cols} forceFit>
                        <Coord transpose />
                        <Axis
                            name="port"
                            label={{
                                offset: 4,
                                textStyle: {
                                    fill: '#5f6ea4',
                                    fontSize: '11'
                                }
                            }}
                            line={{
                                stroke:'#131a42',
                                lineWidth:2
                            }}
                            tickLine ={null}
                        />
                        <Axis 
                            name="tonnage"
                            label={{
                                offset: 8,
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
                                fontFamily:'Bahnschrift',
                                padding:0
                            }}
                            itemTpl="<li data-index={index}>
                                        <p style='color:#999;font-size:12px;'>
                                            {name}:
                                            <span style='color:#ED0E6A;font: bold 18px Bahnschrift;'>
                                                {value}&nbsp;
                                            </span>万吨
                                        </p>
                                     </li>"
                        />
                        <Geom 
                            type="interval" 
                            position="port*tonnage" 
                            color='l(0)  0:#3f60ea00  1:#3f60ea'
                        />
                    </Chart>
                </div>
            </div>
        );
    }
}

export default Year;