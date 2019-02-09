import React from 'react';
import PerformanceRating from './PerformanceRating';
import {Card, Image} from 'semantic-ui-react';

const PlayerCard = ({stats})=>{
    
    return (
        <Card>
            <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' />
            <Card.Content>
            <Card.Header>Test Name</Card.Header>
            <Card.Meta>SG/SF</Card.Meta>
            <Card.Description>Atlanta Hawks</Card.Description>
            </Card.Content>
            <Card.Content extra>
               Performance Rating : <PerformanceRating fantasyPoints = {stats.fantasyPoints}/>
            </Card.Content>
        </Card>
    );
}

export default PlayerCard;