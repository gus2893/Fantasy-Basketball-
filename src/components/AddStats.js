import React from 'react';
import { connect } from 'react-redux';
import { shotMade,shotMissed, gotRebound, gotAssist, gotSteal, gotBlock, gotTurnover } from '../actions';
import {Button } from 'semantic-ui-react';

const AddStats = (props) => {
    return (
        <div>
            <Button onClick={() => props.shotMade(2)}>Two Pointer</Button>
            <Button onClick={() => props.shotMade(3)}>Three Pointer</Button>
            <Button onClick={() => props.shotMissed(2)}>Two Pointer Miss</Button>
            <Button onClick={() => props.shotMissed(3)}>Three Pointer Miss</Button>
            <Button onClick={props.gotAssist}>Assist</Button>
            <Button onClick={() => props.gotRebound('OFF')}>Offensive Rebound</Button>
            <Button onClick={() => props.gotRebound('DEF')}>Defensive Rebound</Button>
            <Button onClick={props.gotSteal}>Steal</Button>
            <Button onClick={props.gotBlock}>Block</Button>
            <Button onClick={props.gotTurnover}>Turnover</Button>
        </div>
    );
}
const mapStateToProps= (state) => {
    return {
        points: state.points,
        rebounds:state.totalRebounds,
        oRebounds: state.offRebounds,
        dRebounds: state.defRebounds,
        assists : state.assists,
        steals: state.steals,
        blocks: state.blocks,
        turnovers: state.turnovers,
        twoAtt: state.twoAttempts,
        threeAtt: state.threeAttempts

   };
}

export default connect(mapStateToProps, {
    shotMade, gotRebound,gotAssist, gotSteal, gotBlock, gotTurnover, shotMissed
})(AddStats)

