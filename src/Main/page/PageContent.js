import React, { Component } from 'react';
import './page.css';
import Task from './task';
import TaskModel from './TaskModel';

class PageContent extends Component {

    TaskPageContent() {     
        var tModel = new TaskModel(
            false,
            'task number 1',
            new Date(),
            'description content',
            'resolution content'
        );
    
        return (
            <div id="contentPageBox">
                <div id="titlePageBox">Task Title</div>
                <div id="bulletPageBox">
                    <Task props={tModel}></Task>
                    <Task props={tModel}></Task>
                    <Task props={tModel}></Task>
                </div>
            </div>
        );
    }
    
    NotesPageContent() {
        return (
            <div id="contentPageBox">
                <div id="notesTitleBox">Notes Title</div>
                <div id="notesContentBox">
                    <input type="text" placeholder="notes main content"></input>
                </div>
            </div>
        );
    }
    
    render() {
        const taskMode = this.props.taskMode;
        let varPageContent;
        if(taskMode == 'task' ) {
            return <this.TaskPageContent/>;
        }
        else {
            return <this.NotesPageContent/>;
        }

        // return(
        //     {varPageContent}
        // );
    }

}

export default PageContent;