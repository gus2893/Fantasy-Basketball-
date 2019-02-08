import React from 'react';
import {Button, Divider} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { shotMade,shotMissed, gotRebound, gotAssist, gotSteal, gotBlock, gotTurnover } from '../actions';

 const Offense = (props) => {
    return (
        <div>
            <div>
                <Button.Group>
                <Button positive onClick={() => props.shotMade(2)}>Make a 2</Button>
                <Button.Or />
                <Button negative onClick={() => props.shotMissed(2)}>Miss a 2</Button>
                </Button.Group>
            </div>
            <br/>
            <div>
                <Button.Group>
                <Button positive onClick={() => props.shotMade(3)}>Make a 3</Button>
                <Button.Or />
                <Button negative onClick={() => props.shotMissed(3)}>Miss a 3</Button>
                </Button.Group>
            </div>
            <br/>
            <div>
                <Button content="Assist" positive onClick={props.gotAssist}/>
            </div>
            <br/>
            <div>
                <Button content="Rebound"  positive onClick={() => props.gotRebound('OFF')}/>
            </div>
            <br/>
            <div>
                <Button content="Turnover"  negative onClick={props.gotTurnover}/>
            </div>
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
})(Offense)