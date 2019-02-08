import {combineReducers} from 'redux';

const pointsScored = (points= 0, action) =>{
    if(action.type === 'SHOT_MADE'){
        return points + action.payload.points;
    }

    return points;
};

const twoAttempts = (attempts = [0,0], action) =>{
    if(action.type === 'SHOT_MISSED')
    {
       
        return [attempts[0],attempts[1]+1];
    }
    if(action.type === 'SHOT_MADE')
    {
        return [attempts[0]+1,attempts[1]+1];
    }
    return attempts;
}
const threeAttempts = (attempts = [0,0], action) =>{
    
    if(action.type === 'SHOT_MISSED' && action.payload.points === 3)
    {
        
        attempts[1] = attempts[1]+1; 
        return attempts;
    }
    if(action.type === 'SHOT_MADE' && action.payload.points === 3)
    {
        attempts =  attempts.map(function(i){
            return i+1;
        })
        return attempts;
    }
    return attempts;
}

const reboundsGrabbed = (rebounds= 0, action,OFF=0,DEF=0) =>{
    if(action.type === 'GOT_REBOUND'){
        return rebounds+1;  
    }
    return rebounds;  
}

const offensiveRebounds = (OFF=0,action)=>{
    if(action.type === 'GOT_REBOUND' && action.payload.typeOfRebound === 'OFF'){
        return OFF+1;
    }
    return OFF;
}

const defensiveRebounds = (DEF=0,action)=>{
    if(action.type === 'GOT_REBOUND' && action.payload.typeOfRebound === 'DEF'){
        return DEF+1;
    }
    return DEF;
}

const gotAssist = (assists=0, action) =>{
    if(action.type === 'GOT_ASSIST'){
        return assists+1;
    }
    return assists;
}

const gotTurnover = (turnovers=0, action) =>{
    if(action.type === 'GOT_TURNOVER'){
        return turnovers+1;
    }
    return turnovers;
}

const gotBlock = (block=0, action) =>{
    if(action.type === 'GOT_BLOCK'){
        return block+1;
    }
    return block;
}

const gotSteal = (steals=0, action) =>{
    if(action.type === 'GOT_STEAL'){
        return steals+1;
    }
    return steals;
}

const fantasyPoints = (fpoints = 0, action) => {
    switch(action.type){
        case 'SHOT_MADE':
            return (action.payload.points === 3) ? fpoints+3 : fpoints+2
            
        case 'SHOT_MISSED':
            return fpoints -1;

        case 'GOT_REBOUND':
            return fpoints +1.2;
            
        case 'GOT_ASSIST':
            return fpoints +1.5;
            
        case 'GOT_STEAL':
            return fpoints+3;
        
        case 'GOT_BLOCK':
            return fpoints+3;
        
        case 'GOT_TURNOVER':
            return fpoints-1;
        
        default: return fpoints;

    }

}


export default combineReducers({
    points: pointsScored,
    totalRebounds: reboundsGrabbed,
    offRebounds: offensiveRebounds,
    defRebounds: defensiveRebounds,
    assists: gotAssist,
    steals: gotSteal,
    blocks: gotBlock,
    turnovers: gotTurnover,
    twoAttempts: twoAttempts,
    threeAttempts: threeAttempts,
    fantasyPoints: fantasyPoints,

})