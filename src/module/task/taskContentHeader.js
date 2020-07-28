import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import './taskContent.css';

export function TaskContentHeader() {
    return(
        <Grid container direction="row" justify="space-around" alignItems="center" wrap="nowrap" className="TaskItemBox" spacing={2}>
            <Grid item xs={1}>
                <Typography variant="overline" gutterBottom  xs={1}></Typography>
            </Grid>
            <Grid item xs={3}>
                <Typography variant="overline" gutterBottom  xs={1}>Task</Typography>
            </Grid>
            <Grid item xs={3}>
                <Typography variant="overline" gutterBottom xs={1}>Description</Typography>
            </Grid>
            <Grid item xs={3}>
                <Typography variant="overline" gutterBottom xs={1}>Resolution</Typography>
            </Grid>
            <Grid item xs={1}>
                <Typography variant="overline" gutterBottom xs={1}>Created</Typography>
            </Grid>
            <Grid item xs={1}>
                <Typography variant="overline" gutterBottom xs={1}>Finished</Typography>
            </Grid>
        </Grid>

    );
}

export default TaskContentHeader;