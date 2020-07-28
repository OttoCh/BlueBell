import React, { Component } from 'react';
import './sidebarNoteButton.css';

class sidebarNoteButton extends Component {

    handleButtonClick() {
        let pagemode = 'notes';
        this.props.handleActivityButton(this, pagemode)
    }

    constructor(props, context) {
        super(props, context);
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }



    render() {
        return (
            <button className="sidebarNoteButtonBox" onClick={()=>this.handleButtonClick()}>
                <div className="noteButton">Notes Name</div>
            </button>
        );
    }
}


// function sidebarNoteButton(props) {
//     const handleActivityButton = this.props.handleActivityButton;
//     const pagemode = 'notes';
//     return (
//         <button className="sidebarNoteButtonBox">
//             <div className="noteButton" onClick={()=>this.handleActivityButton()}>Notes Name</div>
//         </button>
//     );
// }

export default sidebarNoteButton;