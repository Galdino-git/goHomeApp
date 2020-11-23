import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default ({history}) => (
    <View style={style.base}>
            <View style={style.motorista}>
                <Text>Nome do motorista - Destino</Text>
            </View>
            <View style={style.vagas}>
                <Text>Vagas X</Text>
            </View>
    </View>

);


const style = StyleSheet.create({
    base:{
        width: '100%',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#333',
        paddingTop: 24,
        paddingBottom: 24,
        paddingLeft: 36,
        paddingRight: 36,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    motorista:{

    }


});