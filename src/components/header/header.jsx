import React from 'react'
import { Typography } from '@material-ui/core';
import './header.css';

export const Header = () => {
    return (
        <header className="header">
            <Typography variant="h3" component="h3" gutterBottom className="title">
                Dice Pig
            </Typography>
        </header>
    )
}
