import React from 'react'
import './player.css';
import { Paper, Typography } from '@material-ui/core';

export const Player = (props) => {    
    return (
        <Paper className="player-card" elevation={3}>
            <Typography variant="h3" component="h3" gutterBottom className="title">
                {props.name}
            </Typography>
            <Typography variant="h4" component="h5" gutterBottom className="score">
                Score: {props.score}
            </Typography>
        </Paper>        
    )
}
