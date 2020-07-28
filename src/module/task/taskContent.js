import React from 'react';
import {
    Box,
    GridList,
    Grid,
    Typography
} from '@material-ui/core';
import TaskContentItem from './taskContentItem';
import TaskContentHeader from './taskContentHeader';
import './taskContent.css';

function renderer(tasklist) {
    return React.createElement(
        TaskContentItem,
        {tasklist},
        {}   
    )
}


export function TaskContent(props) {
    return(
        <Box width={1} height={0.9}>
            <Box width={1}>
                <input type="text" placeholder="TaskTitle" value={props.taskData.taskTitle}></input>
            </Box>
            <br/>
                <TaskContentHeader></TaskContentHeader>
            <GridList containers col={1}>
                {props.taskData.data.map(task  => renderer(task) )}
            </GridList>
        </Box>
    );
}

export default TaskContent;