import React from 'react';
import { connect } from 'react-redux';
import {Button} from 'semantic-ui-react';
import { gotRebound, gotSteal, gotBlock } from '../actions';

 const Defense = (props) => {

    return (
    <div>
        <div>
             <Button content="Rebound" positive onClick={() => props.gotRebound('DEF')}/>
        </div>
        <br/>
        <div>
             <Button content="Steal" positive onClick={props.gotSteal}/>
        </div>
        <br/>
        <div>
             <Button content="Block" positive onClick={props.gotBlock}/>
        </div>
    </div>
    );
}

 const mapStateToProps= (state) => {
    return {
        rebounds:state.totalRebounds,
        oRebounds: state.offRebounds,
        dRebounds: state.defRebounds,
        steals: state.steals,
        blocks: state.blocks,

   };
}

export default connect(mapStateToProps, {
   gotRebound, gotSteal, gotBlock,
})(Defense)