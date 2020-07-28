import React, { Component } from 'react';
import SidebarTaskButton from './sidebar/sidebarTaskButton'
import SidebarNoteButton from './sidebar/sidebarNoteButton'
import './sidebar.css';

class Sidebar extends Component {

    // handleActivityButton(e) {
    //     // e.stopPropagation();
    //     console.log('handle activity is pressed')
    // }


    constructor(props, context) {
        super(props, context);
        // this.handleActivityButton = this.handleActivityButton.bind(this);
    }

    render() {
        // const handleActivityButton = this.props.handleActivityButton;
        var visibility = "show sidebarBox";
        if(this.props.menuvisibility) {
            visibility = "hide sidebarBox";
        }

        return(
            <div id="sidebarContainer" className={visibility}>
                <div id="sidebarTaskListBox">
                    {/* {this.props.sidebarTask} */}
                    <SidebarTaskButton handleActivityButton={this.props.handleActivityButton}></SidebarTaskButton>
                </div>
                <div id="sidebarNotepadBox">
                    <SidebarNoteButton handleActivityButton={this.props.handleActivityButton}></SidebarNoteButton>
                </div>
                <div id="sidebarShopBox"></div>
            </div>
        );
    }

}

export default Sidebar;

// function Sidebar() {
//     const sidebarTaskId = [1,2,3,4,5]
//     const sidebarTaskList = []
//     for (var e of sidebarTaskId) {
//         sidebarTaskList.push(<SidebarTaskButton key={e} id={e}></SidebarTaskButton>)
//     }
//     return (
//         <div className="sidebarBox">
//             <div id="sidebarTaskListBox">
//                 {sidebarTaskList}
//             </div>
//             <div id="sidebarNotepadBox">
//                 <SidebarNoteButton></SidebarNoteButton>
//             </div>
//             <div id="sidebarShopBox"></div>
//         </div>
//     );
// }

// export default Sidebar;