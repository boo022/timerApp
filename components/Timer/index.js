import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators as actions } from '../../reducer';
import Timer from './presenter';


function mapStateToProps(state){
     const { isPlaying, elapsedTime, timerDuration} = state;
     return {
         isPlaying,
         elapsedTime,
         timerDuration
     }
}

function mapDispatchToProps(dispatch){
    console.log("applyStartTimer")
    return {
        startTimer: bindActionCreators(actions.startTimer, dispatch),
        restartTimer: bindActionCreators(actions.restartTimer, dispatch),
        addSecond: bindActionCreators(actions.addSecond,dispatch),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer);