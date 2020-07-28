import React from 'react';
import { 
    Box,
    Grid,
    Checkbox,
    TextField
} from '@material-ui/core';
import './taskContent.css';


export class TaskContentItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            checkboxValue: props.tasklist.taskCheckbox,
            taskNameValue: props.tasklist.taskName,
            taskDescriptionValue: props.tasklist.taskDescription,
            taskResolutionValue: props.tasklist.taskResolution,
            taskCreatedValue: props.tasklist.taskCreated,
            taskFinishedValue: props.tasklist.taskFinished
        }
        this.checkboxHandler = this.checkboxHandler.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
    }

    checkboxHandler() {
        this.setState({
            checkboxValue: !this.state.checkboxValue
        })
    }

    changeHandler(e) {
        console.log(e.target)
        if(e.target.name == "taskItemName")
            this.setState({
                taskNameValue: e.target.value
            })
        else if(e.target.name == "taskitemDescription")
            this.setState({
                taskDescriptionValue: e.target.value
            })
        else if(e.target.name == "taskItemResolution")
            this.setState({
                taskResolutionValue: e.target.value
            })
    }

// export function TaskContentItem(props) {
    render() {
        return(
            <Grid container direction="row" justify="space-around" alignItems="center" wrap="nowrap" className="TaskItemBox" spacing={2}>
                 <Grid item xs={1}>
                    <Checkbox className="taskCheckbox" xs={1} checked={this.state.checkboxValue} onClick={this.checkboxHandler}></Checkbox>
                </Grid>
                <Grid item xs={3}>
                    <input type="text" name="taskItemName" placeholder="Task" className="taskName" value={this.state.taskNameValue} onChange={this.changeHandler}></input>
                </Grid>
                <Grid item xs={3}>
                    <input type="text" name="taskitemDescription" placeholder="Description" className="taskDescription" value={this.state.taskDescriptionValue} onChange={this.changeHandler}></input>
                </Grid>
                <Grid item xs={3}>
                    <input type="text" name="taskItemResolution" placeholder="Resolution" className="taskResolution" value={this.state.taskResolutionValue} onChange={this.changeHandler}></input>
                </Grid>
                <Grid item xs={1}>
                    <input type="text" name="taskItemCreatedTime" placeholder="Created Time" className="taskCreatedTime" value={this.state.taskCreatedValue} disabled></input>
                </Grid>
                <Grid item xs={1}>
                    <input type="text" name="taskitemFinishedTime" placeholder="Finished Time" className="taskFinishedTime" value={this.state.taskFinishedValue} disabled></input>
                </Grid>
            </Grid>
        );
    }
}

export default TaskContentItem;