import React from 'react';
import Offense from './Offense';
import Defense from './Defense';
import { Icon, Segment, Grid, Header, Divider} from 'semantic-ui-react';

const AddStats = () => {
    return (
        <div>
            <Segment>
                <Grid columns={2} stackable textAlign='center'>
                    <Divider vertical>Or</Divider>
                    <Grid.Row verticalAlign='middle'>
                        <Grid.Column>
                            <Header as='h3' icon>
                                <Icon name='superpowers' />
                                Offense
                            </Header>
                                <Offense/>
                        </Grid.Column>
                        <Grid.Column>
                            <Header as="h3" icon>
                                <Icon name='shield' />
                                Defense
                            </Header>
                                <Defense/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        </div>
    );
}

export default AddStats;

