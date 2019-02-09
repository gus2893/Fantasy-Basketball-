import React from 'react';
import {Rating} from 'semantic-ui-react';

const PerformanceRating = ({fantasyPoints}) => {
    console.log(fantasyPoints);
    return <Rating maxRating={5} defaultRating={3} icon='star' size='mini' disabled/>
}

export default PerformanceRating;