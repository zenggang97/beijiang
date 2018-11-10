import React, { Component } from 'react';


class Right extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data: [
                {
                    title:'危险品船',
                    num:2356,
                    bgimg:'icon_danger'
                },
                {
                    title:'客船',
                    num:2356,
                    bgimg:'icon_person'
                },
                {
                    title:'普通货船',
                    num:2356,
                    bgimg:'icon_cargo'
                },
                {
                    title:'集装箱船',
                    num:2356,
                    bgimg:'icon_container'
                },
                {
                    title:'散货船',
                    num:2356,
                    bgimg:'icon_box'
                },
                {
                    title:'其他船舶',
                    num:2356,
                    bgimg:'icon_other'
                } 
            ],
            sum: 0
         };
    }

    getSum=() => {
        let data =this.state.data;
        let sum =0;
        for(var i=0;i<data.length;i++){
            sum +=data[i].num;
        }
        this.setState({
            sum:sum
        })
    }
    componentDidMount() {
        this.getSum(); 
    }

    render() {
        return (
            <div className='height_380_right height_380' >
                <p className='rectangle'>近3小时船舶监控</p>
                <div className='justify_center'>
                    <p className="flex_align_center">
                        船舶总数:&nbsp;<span className='color_1'>{this.state.sum}</span>
                    </p>
                </div>
                <ul className='flex padding_30'>
                    {
                        this.state.data.map((value,key) => {
                            return (
                                <li className='flex_align_center justify_center Monitor_li' key={key}>
                                    <div className='Monitor_icon'>
                                        <div className={value.bgimg}></div>
                                    </div>
                                    <div className=' marging_10'>
                                        <p className='color_2'>{value.num}</p>
                                        <p className='color_3'>{value.title}</p>
                                    </div>
                                </li> 
                            )
                        })
                    }  
                </ul> 
            </div>
        );
    }
}

export default Right;