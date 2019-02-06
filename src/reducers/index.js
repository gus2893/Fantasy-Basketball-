import {combineReducers} from 'redux';

const pointsScored = (points= 0, action) =>{
    if(action.type === 'TWO_MADE'){
        return points+2;
    }
    else if(action.type === 'THREE_MADE'){
        return points+3;
    }

    return points;
}

export default combineReducers({
    points: pointsScored
})