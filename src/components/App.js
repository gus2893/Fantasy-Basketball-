import React from 'react';
import Stats from './Stats';
import AddStats from './AddStats';
import { Container, Divider } from 'semantic-ui-react';

const App = () =>{
    return (
    <div>
        <Container>
            <Stats/>
            <Divider/>
            <AddStats/>
        </Container>

    </div>
    );
}
export default App;