import React, { Component } from 'react';
import { Chart, Geom,Axis, Tooltip,Coord,Legend,} from "bizcharts";
import DataSet from "@antv/data-set";

class Dam extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {

        const data = [
            {
              State: "清远水利枢纽",
              "上游积聚船舶": 189,
              "下游积聚船舶": 314
            },
            {
              State: "飞来峡水利枢纽",
              "上游积聚船舶": 239,
              "下游积聚船舶": 225
            }
        ];
        const ds = new DataSet();
        const dv = ds.createView().source(data);
        dv.transform({
            type: "fold",
            fields: [ "上游积聚船舶", "下游积聚船舶"],
            // 展开字段集
            key: "水利枢纽",
            // key字段
            value: "船舶数量",
            // value字段
            retains: ["State"] // 保留字段集，默认为除fields以外的所有字段
        });


        return (
            <div className='height_340'>
                <p className='rectangle'>船闸聚积情况统计</p>
                <div>
                    <Chart height={310} data={dv} padding={[15, 30, 60, 125]} forceFit>
                        <Legend />
                        <Coord transpose />
                        <Axis
                            name="State"
                            tickLine={null}
                            label={{
                                offset: 14,
                                textStyle: {
                                    fill: '#ff106e',
                                    fontSize: '14',
                                    fontFamily:'Bahnschrift',
                                    fontWeight:600
                              }
                            }}
                            line={{
                                stroke:'#131a42',
                                lineWidth:3
                            }}
                        />
                        <Axis 
                            name="船舶数量" 
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
                                            </span>艘
                                        </p>
                                     </li>"
                        />
                        <Geom
                            type="intervalStack"
                            position="State*船舶数量"
                            color={["水利枢纽", ['#4466f4e6', '#ff106ee6']]}
                        />
                    </Chart>
                </div>
            </div>
        );
    }
}

export default Dam;