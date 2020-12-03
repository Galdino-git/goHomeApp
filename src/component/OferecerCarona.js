import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 
import { CheckBox } from 'react-native-elements';

const OferecerCarona = ({navigation}) => {

    return(
        <View style={styles.base}>
            <Text>Nome do Passageiro</Text>
            <CheckBox
                color='#000'
                center
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checked={true}
            />

            <View style={styles.haveMessage}>
                <Text style={styles.countMessage}>X</Text>
                <FontAwesome name="commenting-o" size={20} color="black" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    base:{
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#333',
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    Text:{
        fontSize: 16,
        fontWeight: 'bold'
    },
    haveMessage:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    countMessage:{
        marginRight: 12,
    }
});

export default OferecerCarona;