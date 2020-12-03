import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';


class Map extends Component {

    render(){
        return(
            <View style={style.map}>
            </View>
        );
    }
}


const style = StyleSheet.create({
    map:{
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#333',
        width: '90%',
        height: 320,
    },
});

export default Map;