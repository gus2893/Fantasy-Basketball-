import React from 'react';

const FGPercetage = ({made, att, fg}) =>{

    const percent = (att === 0) ? 0.0 : ((made/att)*100).toFixed(1);
    return (
    <div>{made}/{att} {percent}% {fg}</div>
    );
};

export default FGPercetage;