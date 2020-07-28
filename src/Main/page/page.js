import React, { Component } from 'react';
import './page.css';
import Task from './task';
import TaskModel from './TaskModel';
import PageContent from './PageContent';
// import Clock from './Clock';

class Page extends Component {

    render() {
        var mode = this.props.pagemode;

        var visibility = "show";
        if(this.props.menuvisibility) {
            visibility = "hide";
        }
        return (
            <div id="mainPageBox" className={visibility}>
                {/* <Clock></Clock> */}
                <PageContent taskMode={mode} ></PageContent>
            </div>
        );
    }
}

// function TaskModel(tick, taskName, createDate, description, resolution) {
//     this.tick = tick;
//     this.taskName = taskName;
//     this.createDate = createDate;
//     this.description = description;
//     this.resolution = resolution;
// }

// function Page() {
//     var tModel = new TaskModel(
//         false,
//         'task number 1',
//         new Date(),
//         'description content',
//         'resolution content'
//     );

//     console.log(tModel.taskName);

//     return (
//         <div id="mainPageBox">
//             {/* <Clock></Clock> */}
//             <div id="contentPageBox">
//                 <div id="titlePageBox">Task Title</div>
//                 <div id="bulletPageBox">
//                     <Task props={tModel}></Task>
//                     <Task props={tModel}></Task>
//                     <Task props={tModel}></Task>
//                 </div>
//             </div>
//         </div>
//     );
// }

// class page extends React.Component {
//     render() {
//         return (
//             <div id="mainPageBox">
//                 { this.props.date.toLocaleTimeString() }
//                 <div id="contentPageBox"></div>
//                 <div id="titlePageBox"></div>
//                 <div id="bulletPageBox"></div>
//             </div>
//         );
//     }
// }

export default Page;