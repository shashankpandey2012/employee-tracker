import React, {Component} from 'react';
import {isNaN} from 'lodash/lang';

class Chair extends Component {
    constructor(props) {
        super(props);

        this.onDrag = this.onDrag.bind(this);
        this.onDragEnd = this.onDragEnd.bind(this);
        this.onDragStart = this.onDragStart.bind(this);
        this.onDragOver = this.onDragOver.bind(this);
        this.onDragEnter = this.onDragEnter.bind(this);
        this.onDragLeave = this.onDragLeave.bind(this);
        this.onDrop = this.onDrop.bind(this);
        this.onMouseOver = this.onMouseOver.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
    }

    changeColor(color) {
        document.getElementById(`${this.props.tableIndex}${this.props.index}`).style.backgroundColor = color;
    }

    onDrag(e) {
        this.props.closeHover(this.props.tableIndex,this.props.index);
        this.props.dragComponent(this.props.tableIndex, this.props.index)
    }

    onDragEnd(e) {
        this.changeColor("#8B4513");
    }

    onDragStart(e) {
        this.changeColor("red");
    }

    onDragOver(e) {
        e.preventDefault();
        this.props.dragOverChair(this.props.tableIndex, this.props.index);
    }

    onDragEnter(e) {
        e.preventDefault();
        this.changeColor("blue");
    }

    onDragLeave(e) {
        e.preventDefault();
        this.props.dragLeaveChair();
        this.changeColor("#696969");
    }

    onDrop(e) {
        e.preventDefault();
        this.changeColor("#8B4513");
        this.props.dropEmployee();
    }

    onMouseOver(e){
        e.preventDefault();
        this.changeColor("green");
        this.props.hoverEmployee(this.props.tableIndex,this.props.index);
    }

    onMouseLeave(e){
        e.preventDefault();
        this.changeColor('#8B4513');
        this.props.closeHover(this.props.tableIndex,this.props.index);
    }

    render() {
        const {chairData, index, tableIndex, draggedChair, draggable,hoverdetails} = this.props;
        const occupied = chairData.occupied;
        const matched = chairData.matched;
        const hover = chairData.hover;
        return (
            <div className="employee_chairs chair_top">
                {occupied &&
                <div className="half-circle"
                    id={`${tableIndex}${index}`}
                    style={matched ? {background: "#20B2AA"} : {background: "#8B4513"}}
                    draggable={draggable}
                    onDrag={this.onDrag}
                    onDragEnd={this.onDragEnd}
                    onDragStart={this.onDragStart}
                    onMouseEnter={this.onMouseOver}
                    onMouseLeave={this.onMouseLeave}
                >

                </div>
                }
                {hover &&
                <div className="employee_details ">
                    <b>Name:</b> {hoverdetails.name}
                    <br/>
                    <b>Team Id:</b> {hoverdetails.team_id}
                    <br/>
                    <b>Designation:</b>{hoverdetails.designation}
                    <br/>
                    <b>Current Project:</b>{hoverdetails.current_project}
                    <br/>
                </div>
                }
                {!occupied &&
                <div className="half-circle chair_bottom"
                    id={`${tableIndex}${index}`} style={{background: "#696969"}}
                    draggable={false}
                    onDragOver={this.onDragOver}
                    onDragEnter={this.onDragEnter}
                    onDragLeave={this.onDragLeave}
                    onDrop={this.onDrop}
                >

                </div>
                }
            </div>

        )
    }
}

export default Chair;
