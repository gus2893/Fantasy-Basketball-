import React from 'react';
import {Grid, Card, Button, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { shotMade,shotMissed, gotRebound, gotAssist, gotSteal, gotBlock, gotTurnover } from '../actions';
import FGPercentage from './FGPercentage';

const ShowStats = (props) =>{
    console.log(props.statsToShow);
    return (
        <Grid>
        <Grid.Row columns={4}>
          <Grid.Column>
        <Card>
            <Card.Content header='Points' textAlign='center' />
            <Card.Content textAlign='center'>
                <Header as='h1'>{props.statsToShow.points}</Header>
            </Card.Content>
            <Card.Content header='Fantasy Points' textAlign='center' />
            <Card.Content textAlign='center'>
                <Header as='h1'>{(props.statsToShow.fantasyPoints).toFixed(1)}</Header>
            </Card.Content>
        </Card>
          </Grid.Column>
          <Grid.Column>
        <Card>
            <Card.Content header='Fiel Goal %' textAlign='center' />
            <Card.Content textAlign='center'>
                <Header as='h1'>
                    <FGPercentage made={props.statsToShow.twoAtt[0]} att={props.statsToShow.twoAtt[1]} />
                </Header>
            </Card.Content>
            <Card.Content textAlign='center'> 
                {props.statsToShow.twoAtt[0]}/{props.statsToShow.twoAtt[1]}
            </Card.Content>
            <Card.Content extra >
            <Button.Group size='mini' fluid>
                <Button positive onClick={() => props.shotMade(2)}>Make a 2</Button>
                <Button.Or />
                <Button negative onClick={() => props.shotMissed(2)}>Miss a 2</Button>
            </Button.Group>
            </Card.Content>
        </Card>
          </Grid.Column>
          <Grid.Column>
        <Card>
            <Card.Content header='3PT Field Goal %' textAlign='center' />
            <Card.Content textAlign='center'>
                <Header as='h1'>
                    <FGPercentage made={props.statsToShow.threeAtt[0]} att={props.statsToShow.threeAtt[1]} />
                </Header>
            </Card.Content>
            <Card.Content textAlign='center'> 
                {props.statsToShow.threeAtt[0]}/{props.statsToShow.threeAtt[1]}
            </Card.Content>
            <Card.Content extra>
            <Button.Group size='mini' fluid>
                <Button positive onClick={() => props.shotMade(3)}>Make a 3</Button>
                <Button.Or />
                <Button negative onClick={() => props.shotMissed(3)}>Miss a 3</Button>
                </Button.Group>
            </Card.Content>
        </Card>
          </Grid.Column>
          <Grid.Column>
        <Card>
            <Card.Content header='Assists' textAlign='center' />
            <Card.Content textAlign='center'>
                <Header as='h1'>{props.statsToShow.assists}</Header>
            </Card.Content>
            <Card.Content extra textAlign='center'>
                <Button content="Assist" positive fluid onClick={props.gotAssist}/>  
            </Card.Content>
        </Card>
          </Grid.Column>
        </Grid.Row>
    
        <Grid.Row columns={4}>
          <Grid.Column>
        <Card>
            <Card.Content header='Rebounds' textAlign='center' />
            <Card.Content textAlign='center'>
                <Header as='h1'>{props.statsToShow.rebounds}</Header>
            </Card.Content>
            <Card.Content extra textAlign='center'>
            <Card.Content textAlign='center'> 
                OFF: {props.statsToShow.oRebounds}, DEF: {props.statsToShow.dRebounds}
            </Card.Content>
            <Button.Group size='mini' fluid>
                <Button positive onClick={() => props.gotRebound('OFF')}>Off Reb</Button>
                <Button.Or />
                <Button positive onClick={() => props.gotRebound('DEF')}>Def Reb</Button>
            </Button.Group>  
            </Card.Content>
        </Card>
          </Grid.Column>
          <Grid.Column>
        <Card>
            <Card.Content header='Blocks' textAlign='center' />
            <Card.Content textAlign='center'>
                <Header as='h1'>{props.statsToShow.blocks}</Header>
            </Card.Content>
            <Card.Content extra textAlign='center'>
                <Button content="Block" positive fluid onClick={props.gotBlock}/>  
            </Card.Content>
        </Card>
          </Grid.Column>
          <Grid.Column>
        <Card>
            <Card.Content header='Steals' textAlign='center' />
            <Card.Content textAlign='center'>
                <Header as='h1'>{props.statsToShow.steals}</Header>
            </Card.Content>
            <Card.Content extra textAlign='center'>
                <Button content="Steal" positive fluid onClick={props.gotSteal}/>  
            </Card.Content>
        </Card>
          </Grid.Column>
          <Grid.Column>
        <Card>
            <Card.Content header='Turnovers' textAlign='center' />
            <Card.Content textAlign='center'>
                <Header as='h1'>{props.statsToShow.turnovers}</Header>
            </Card.Content>
            <Card.Content extra textAlign='center'>
                <Button content="Turnover" negative fluid onClick={props.gotTurnover}/>  
            </Card.Content>
        </Card>
          </Grid.Column>
        </Grid.Row>
    
    
      </Grid>
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
})(ShowStats)