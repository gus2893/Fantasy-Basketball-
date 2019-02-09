import React,{ Component } from 'react';
import PlayerCard from './PlayerCard';
import { connect } from 'react-redux';


class Stats extends Component {
    
    render(){

        return (
        <div>
            <PlayerCard stats={this.props}/>
        </div>
        );
    }

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
        threeAtt: state.threeAttempts,
        fantasyPoints: state.fantasyPoints

   };
}

export default connect(mapStateToProps)(Stats);