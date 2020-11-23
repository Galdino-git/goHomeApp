import React, {Component} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import SearchRideScreen from '../ride/SearchRideScreen';

export default ({history}) => (
  <View style={styles.base}>
    <View style={styles.map}>

    </View>
    <View style={styles.buttonLine}>
      <TouchableOpacity style={styles.btn} onPress={() => history.push("/SearchRideScreen")}>
        <Text style={styles.btnText}>Buscar carona</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={() => history.push("/StartRideScreen")}>
        <Text style={styles.btnText}>Oferecer carona</Text>
      </TouchableOpacity>
    </View>
  </View>
);



const styles = StyleSheet.create({
  base:{
    padding: 12,
  },
  map: {
    borderWidth: 2,
    borderColor: '#000',
    height: 480,
    marginBottom: 36,
  },
  buttonLine:{
    alignItems: 'center',
  },
  btn:{
    width: 200,
    height: 48,
    borderWidth: 3,
    borderColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 24,
    marginBottom: 24
  },
  btnText:{
    fontSize: 16,
    fontWeight: 'bold',
    paddingTop: 6,
    paddingBottom: 6
  }


  
});

