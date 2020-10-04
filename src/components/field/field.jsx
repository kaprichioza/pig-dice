import React from 'react'
import './field.css';
import { Button, Typography } from '@material-ui/core';

export const Field = (props) => {

    return (
        <div className="field">
            <Typography variant="h4" component="h5" className="currentScore">{props.total}</Typography>
            <div className="dice">
                <div className="left-dice">
                    <img src={props.leftDice} alt="dice"></img>
                </div>
                <div className="right-dice">
                    <img src={props.rightDice} alt="dice"></img>
                </div>
            </div>
            <Button onClick={props.onDiceThrown} disabled={props.canNotThrow} className="button">Throw The Dice</Button>
        </div>
    )
}
