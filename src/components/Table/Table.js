import React, { Component } from 'react';
import Chair from '../Chair';

class Table extends Component{
    constructor (props) {
        super(props);
    }

    render(){
        const { data, dragEmployee, num, draggedChair, dragOverChair } = this.props;
        return (
            <div className="table_space">
                <div className="chair_container disp_inli">
                    <Chair dragComponent={dragEmployee}
                           draggable={true}
                           chairData={data.chairs[0]}
                           tableIndex={num-1}
                           index={0}
                           {...this.props}
                    />

                    <Chair dragComponent={dragEmployee}
                           draggable={true}
                           chairData={data.chairs[1]}
                           tableIndex={num-1}
                           index={1}
                           {...this.props}
                    />
                    </div>
                <div className="table_container disp_block" >
                    <h2 style={{color: "#696969", marginLeft: 'auto', marginRight:'auto',textAlign:'center'}}>Table {this.props.num}</h2>
                </div>
                <div className="chair_container disp_inli">
                    <Chair dragComponent={dragEmployee}
                           draggable={true}
                           chairData={data.chairs[2]}
                           tableIndex={num-1}
                           index={2}
                           dragged={draggedChair}
                           {...this.props}
                    />

                    <Chair dragComponent={dragEmployee}
                           draggable={true}
                           chairData={data.chairs[3]}
                           tableIndex={num-1}
                           index={3}
                           dragged={draggedChair}
                           {...this.props}
                    />
                </div>
            </div>
        )

    }
}

export default Table;
