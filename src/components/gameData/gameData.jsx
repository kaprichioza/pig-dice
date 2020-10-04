import React from 'react'
import './gameData.css';
import { Accordion, AccordionDetails, AccordionSummary, Button, Paper, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export const GameData = (props) => {
    return (
        <div className="data-container">
            <div className="rules">
                <div className="accordion">
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography  variant="h5" component="h6">Rules</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography  component="h6">
                                <p><b>Step 1: </b>
                    Roll two dice for your first turn.<br /></p>
                                <p><b>Step 2: </b>
                    Enter points on the score sheet if the number rolled is two, three, four, five, or six points. If you roll a one, you lose all the points you accumulated during that turn, and you lose your turn.<br /></p>
                                <p><b>Step 3: </b>
                    Continue rolling the die until you're happy with the number of points you've scored. Then, "hold" by handing the die over to your opponent, and track all points earned during your turn.<br /></p>
                                <p><b>Step 4: </b>
                    Reach 100 points first and win the game.</p>
            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
            <div className="button-hold">
                <Button className="button" variant="contained" color="primary" onClick={props.onHoldScore} disabled={props.holdDisabled}>
                    Hold
            </Button>
            </div>
            <div className="game-context">
                <Paper>
                    <div className="container">
                        <div className="count-wins">Wins: {props.wins}</div>
                        <div className="count-lose">Loses: {props.loses}</div>
                    </div>
                    <Button className="button">Start Game</Button>
                </Paper>
            </div>
        </div>
    )
}