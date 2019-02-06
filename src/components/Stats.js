import React,{ Component } from 'react';
import { connect } from 'react-redux';

class Stats extends Component {
    render(){
        
        return <div>Points: {this.props.points}</div>
    }

}

const mapStateToProps = (state) =>{
    return {
         points: state.points
    };
}

export default connect(mapStateToProps)(Stats);