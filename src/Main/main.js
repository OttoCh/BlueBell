import React, { Component } from 'react';
import Header from './header';
import Sidebar from './sidebar';
import Page from './page/page'
import SidebarTaskButton from './sidebar/sidebarTaskButton'
import './main.css';
import App from './materialtest';

class MainPage extends Component {

    
    handleActivityButton(e, pagemode) {
        // e.stopPropagation();
        console.log('handle activity is pressed');
        console.log(pagemode);
        this.setState({
            mode: pagemode
        });
    }

    constructor(props, context) {
        super(props, context);

        const sidebarTaskId = [1,2,3,4,5]
        const sidebarTaskList = []
        for (var e of sidebarTaskId) {
            sidebarTaskList.push(<SidebarTaskButton key={e} id={e} handleActivityButton={this.handleActivityButton}></SidebarTaskButton>)
        }

        this.state = {
            visible: false,
            sidebarTask: sidebarTaskList
        };

        this.toggleMenu = this.toggleMenu.bind(this);
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleActivityButton = this.handleActivityButton.bind(this);
    }


    toggleMenu() {
        this.setState({
            visible: !this.state.visible
        });
    }
    

    handleMouseDown(e) {
        this.toggleMenu();
        console.log("button is pressed");
        e.stopPropagation();
    }


    render() {
        return(
            <div id="allPage">
                <Header handleMouseDown={this.handleMouseDown}></Header>
                <div id="pageBody">
                    <Sidebar 
                    sidebarTask={this.state.sidebarTask} 
                    handleMouseDown={this.handleMouseDown} 
                    menuvisibility={this.state.visible}
                    handleActivityButton={this.handleActivityButton}></Sidebar>
                    <Page menuvisibility={this.state.visible} pagemode={this.state.mode}></Page>
                    <App></App>
                </div>
            </div>
        );
    }
}

// function MainPage() {
//     return (
//         <div>
//             <Header></Header>
//             <div id="pageBody">
//                 <Sidebar></Sidebar>
//                 <Page></Page>
//             </div>
//         </div>
//     );
// }

export default MainPage;