import React from 'react';
import {Card, Image, Icon} from 'semantic-ui-react';
const PlayerCard = ()=>{
    return (
        <Card>
            <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' />
            <Card.Content>
            <Card.Header>Test Name</Card.Header>
            <Card.Meta>SG/SF</Card.Meta>
            <Card.Description>Atlanta Hawks</Card.Description>
            </Card.Content>
            <Card.Content extra>
            <a>
                <Icon name='user' />
               Performance Rating
            </a>
            </Card.Content>
        </Card>
    );
}

export default PlayerCard;