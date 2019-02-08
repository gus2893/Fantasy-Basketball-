export const shotMade = (points) =>{
    return{
        type: 'SHOT_MADE',
        payload: {
           points
        }
    };
}

export const shotMissed = (points) => {
    return {
        type: 'SHOT_MISSED',
        payload: {
            points
        }
    };
}

export const gotRebound =(typeOfRebound) =>{
    return{
        type:'GOT_REBOUND',
        payload:{
            typeOfRebound
        }
    };
};

export const gotAssist = () =>{
    return{
        type:'GOT_ASSIST'
    }
};

export const gotSteal = () =>{
    return{
        type:'GOT_STEAL'
    }
};

export const gotBlock = () =>{
    return{
        type:'GOT_BLOCK'
    }
};

export const gotTurnover = () =>{
    return{
        type:'GOT_TURNOVER'
    }
};
