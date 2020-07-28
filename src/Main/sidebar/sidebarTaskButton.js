import React, { Component } from 'react';
import './sidebarTaskButton.css';

class sidebarTaskButton extends Component {

    handleButtonClick() {
        let pagemode = 'task';
        this.props.handleActivityButton(this, pagemode)
    }

    constructor(props, context) {
        super(props, context);
        this.state = {
            id: this.props.id
        }
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    render() {
        const taskId = this.state.id;
        return (
            <button id={taskId} className="sidebarTaskButtonBox" onClick={()=>this.handleButtonClick()}>
                <div className="taskButton">Task Name</div>
            </button>
        );
    }

}


// function sidebarTaskButton(id) {
//     const taskId = id;
//     const pagemode = 'task';
//     return (
//         <button id={taskId} className="sidebarTaskButtonBox" onClick={() => {this.props.handleActivityButton(pagemode)}}>
//             <div className="taskButton">Task Name</div>
//         </button>
//     );
// }

// function showTaskPage(msg) {
//     console.log(msg)
//     this.props.handleActivityButton(msg)
// }

export default sidebarTaskButton;