import React from 'react';
import { connect } from 'react-redux';
import { twoMade, threeMade } from '../actions';
const AddStats = (props) => {
    console.log(props);
    return (
        <div>
            <button onClick={props.twoMade}>Two Pointer</button>
            <button onClick={props.threeMade}>Three Pointer</button>
        </div>
    );
}
const mapStateToProps= (state) => {
    return {
        points: state.points
    };
}

export default connect(mapStateToProps, {
    twoMade, threeMade
})(AddStats)

