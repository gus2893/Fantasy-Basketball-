import React from 'react';
import { connect } from 'react-redux';
import { shotMade,shotMissed, gotRebound, gotAssist, gotSteal, gotBlock, gotTurnover } from '../actions';
const AddStats = (props) => {
    return (
        <div>
            <button onClick={() => props.shotMade(2)}>Two Pointer</button>
            <button onClick={() => props.shotMade(3)}>Three Pointer</button>
            <button onClick={() => props.shotMissed(2)}>Two Pointer Miss</button>
            <button onClick={() => props.shotMissed(3)}>Three Pointer Miss</button>
            <button onClick={props.gotAssist}>Assist</button>
            <button onClick={() => props.gotRebound('OFF')}>Offensive Rebound</button>
            <button onClick={() => props.gotRebound('DEF')}>Defensive Rebound</button>
            <button onClick={props.gotSteal}>Steal</button>
            <button onClick={props.gotBlock}>Block</button>
            <button onClick={props.gotTurnover}>Turnover</button>
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

