import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import { 
    // Grid, 
    // TextField, 
    // Container, 
    Box, 
    AppBar, 
    Toolbar, 
    Typography,
    TextField
    // Paper 
  } 
    from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import './mainpage.css';
import Navbar from './navbar';
import NotesContent from './notes/notesContent';
import TaskContent from './task/taskContent';

// export default function Main() {
export class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            visibility: "hide",
            page: ""
        };
        this.handleNavbarClick = this.handleNavbarClick.bind(this);
    }

    taskData = {
        "taskTitle": "the task title",
        "data": [ {
                "taskCheckbox": true,
                "taskName": "the task name",
                "taskDescription": "the task description",
                "taskResolution": "the task resolution",
                "taskCreated": "06/07 14:00",
                "taskFinished": "06/07 15:00"
            },
            {
                "taskCheckbox": false,
                "taskName": "the task name 2",
                "taskDescription": "the task description 2",
                "taskResolution": "the task resolution 2",
                "taskCreated": "06/07 15:00",
                "taskFinished": "06/07 16:00"
            }
        ]
    }

    navbarList = {
        "task": [
            "Task 1",
            "Task 2",
            "Task 3",
            "Task 4",
            "Task 5"
        ],
        "notes": [
            "notes 1",
            "notes 2",
            "notes 3",
            "notes 4",
            "notes 5"
        ]
    }


    handleMenu() {
        if(this.state.visibility == 'hide') {
            this.setState({
                visibility: 'show'
            })
        }
        else {
            this.setState({
                visibility: 'hide'
            })
        }
    }

    handleNavbarClick(e) {
        // console.log(e.currentTarget);
        this.setState({
            page: e.currentTarget.value
        })
    }

    pageRenderer(page, data) {
        if(page=="task") {
            var taskData = data;
            return React.createElement(
                TaskContent,
                {taskData},
                {}
            )
        }
        else if(page=="note") {
            return React.createElement(
                NotesContent,
                {},
                {}
            )
        }
        else return <br/>
    }

    render() {
        return (
            <div className="root">
                <Box className="headerBox">
                    <AppBar>
                        <Toolbar >
                            <IconButton color="white" aria-label="menu" component="span" onClick={this.handleMenu.bind(this)}>
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h5" component="h5">
                                Journal of ABC
                            </Typography>
                        </Toolbar>
                    </AppBar>
                </Box>
                <Box className={this.state.visibility} id="bodyBox" height={1}>
                    {this.pageRenderer(this.state.page, this.taskData)}
                    {/* <NotesContent></NotesContent>
                    <TaskContent taskData={this.taskData}></TaskContent> */}
                </Box>
                <Box className={this.state.visibility} id="navbarBox">
                    <Navbar handleClick={this.handleNavbarClick} navbarList={this.navbarList}></Navbar>
                </Box>
            </div>
        );
    }
}

export default Main;