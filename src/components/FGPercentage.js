import React from 'react';

const FGPercetage = ({made, att}) =>{

    const percent = (att === 0) ? 0.0 : ((made/att)*100).toFixed(1);
    return (
    <div> {percent}%</div>
    );
};

export default FGPercetage;