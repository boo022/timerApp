import React, {Component} from 'react';
import {View, Text, StyleSheet,StatusBar } from 'react-native';
import Button from '../Button';

function formatTime(time){
    let minutes = Math.floor(time/60);
    time -= minutes * 60;

    let seconds = parseInt(time % 60, 10);
    return (minutes<10 ? '0'+minutes : minutes )+':'+(seconds < 10 ? '0'+seconds : seconds);
}

class Timer extends Component{
    componentWillReceiveProps(nextProps){
        const currentProps = this.props;
        if(currentProps.isPlaying === false && nextProps.isPlaying === true){
            //start the interval
            const timeInterval = setInterval(() => {
                currentProps.addSecond()
            }, 1000);
            this.setState({
                timeInterval:timeInterval
            })
        }else if(currentProps.isPlaying === true && nextProps.isPlaying === false){
            //stop the interval
            clearInterval(this.state.timeInterval);
        }
    }

    render(){
        const { isPlaying, elapsedTime, timerDuration,startTimer, restartTimer } = this.props;
        return (
            <View style={styles.container}>
                <StatusBar barStyle={"light-content"}/>
                <View style={styles.upper}>
                    <Text  style={styles.timer}>{formatTime(timerDuration - elapsedTime)}</Text>
                </View>
                <View  style={styles.lower}>
                   {!isPlaying ? (
                   <Button iconName='play-circle' onPress={startTimer}/>) : 
                   <Button iconName='stop-circle' onPress={restartTimer}/>}
                </View>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#D9418C'
    },
    upper:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    lower:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    timer:{
        color:'white',
        fontSize:100,
        fontWeight:'100',
    }
});

export default Timer;