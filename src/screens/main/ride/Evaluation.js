import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import { FontAwesome } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 

const Evaluation = ({navigation}) =>{
    return(
        <View style={styles.base}>
            <Text style={styles.title}>Avalie sua Carona</Text>
            <View style={styles.starLines}>
                <FontAwesome name="star" size={48} color="black" />
                <FontAwesome name="star" size={48} color="black" />
                <FontAwesome name="star" size={48} color="black" />
                <Feather name="star" size={48} color="black" />
                <Feather name="star" size={48} color="black" />
            </View>
            <View style={styles.btnLine}>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Menu")}>
                    <Text style={styles.btnText}>Avaliar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    base:{
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 24,
        paddingLeft: 12,
        paddingRight: 12
    },
    title:{
        fontSize: 24,
        fontWeight: '700',
        textAlign: 'center'
    },
    starLines:{
        marginTop: 120,
        flexDirection: 'row',
        paddingLeft: 24,
        paddingRight: 24,
        justifyContent: 'space-between',
        alignItems: 'center',
    }, btnStartLine:{
    paddingTop: 16,
    paddingBottom: 16,
    alignItems: 'center'
  },
  btnStart:{
    paddingTop: 12,
    paddingBottom: 12,
    borderWidth: 1,
    borderColor: 'green',
    alignItems: 'center',
    width: 160,
    borderRadius: 50
  },
  btnStartText:{
    fontSize: 16,
    fontWeight: '700'
  },
  btnLine:{
    marginTop: 48,
    paddingTop: 16,
    paddingBottom: 16,
    alignItems: 'center'
  },
  btn:{
    paddingTop: 12,
    paddingBottom: 12,
    borderWidth: 1,
    borderColor: 'green',
    alignItems: 'center',
    width: 160,
    borderRadius: 50
  },
  btnText:{
    fontSize: 16,
    fontWeight: '700'
  },
});

export default Evaluation;