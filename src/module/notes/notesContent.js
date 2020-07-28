import React from 'react';
import {
    Box,
    TextField
} from '@material-ui/core';
import './notesContent.css';

export function NotesContent(props) {
    return(
        <Box width={1} height={0.9}>
            <input type="text" id="notesTitle" placeholder="Notes Title"></input>
            <textarea id="notesTextInput"></textarea>
        </Box>
    );
}

export default NotesContent;