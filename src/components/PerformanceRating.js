import React from 'react';
import {Rating} from 'semantic-ui-react';

const PerformanceRating = ({fantasyPoints}) => {
    var currentRating =0;
    if(fantasyPoints>50){currentRating = 5;}
    else if(fantasyPoints>35){currentRating = 4;}
    else if(fantasyPoints>25){currentRating = 3;}
    else if(fantasyPoints>15){currentRating = 2;}
    else if(fantasyPoints>5){currentRating = 1;}
    
    return <Rating maxRating={5} rating={currentRating} icon='star' size='mini' disabled/>
}

export default PerformanceRating;