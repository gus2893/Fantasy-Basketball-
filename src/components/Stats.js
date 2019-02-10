import React,{ Component } from 'react';
import PlayerCard from './PlayerCard';
import {Image, Grid, Card} from 'semantic-ui-react';
import { connect } from 'react-redux';
import playerImage from '../images/player.png';

class Stats extends Component {
    
    render(){
        return (
        <Grid columns={2}>
        <Grid.Column width={4}>
        <Image src={playerImage} circular/>
            <Card>
                
                <Card.Content>
                <Card.Header>LeBron Curry</Card.Header>
                <Card.Meta>PG/C</Card.Meta>
                <Card.Description>Golden State Lakers</Card.Description>
                </Card.Content>
            </Card>
        </Grid.Column>
        <Grid.Column width={12}>
            <PlayerCard stats={this.props}/>
        </Grid.Column>  
        </Grid>

       
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