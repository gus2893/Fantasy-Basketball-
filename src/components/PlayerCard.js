import React from 'react';
import PerformanceRating from './PerformanceRating';
import ShowStats from './ShowStats';
import {Card} from 'semantic-ui-react';

const PlayerCard = ({stats})=>{
    return (
        <Card fluid>
        <Card.Content header="Today's Stats" />
        <Card.Content>
            <ShowStats statsToShow={stats}/>
        </Card.Content>
        <Card.Content extra>
          Performance Rating : <PerformanceRating fantasyPoints={stats.fantasyPoints}/>
        </Card.Content>
      </Card>
    );
}

export default PlayerCard;