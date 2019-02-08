import React,{ Component } from 'react';
import FGPercentage from './FGPercentage';
import { connect } from 'react-redux';


class Stats extends Component {
    render(){
        return (
        <div>
            <div>
                Points: {this.props.points} 
                <FGPercentage made={this.props.twoAtt[0]} att={this.props.twoAtt[1]} fg='2FG'/>
                <FGPercentage made={this.props.threeAtt[0]} att={this.props.threeAtt[1]} fg='3FG'/>
            </div>
            <div>Assists: {this.props.assists}</div>
            <div>Rebounds: {this.props.rebounds} (OFF:{this.props.oRebounds}, DEF:{this.props.dRebounds})</div>
            <div>Steals: {this.props.steals}</div>
            <div>Blocks: {this.props.blocks}</div>
            <div>Turnovers: {this.props.turnovers}</div>
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
        threeAtt: state.threeAttempts

   };
}

export default connect(mapStateToProps)(Stats);