import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';

import { FontAwesome } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 

const Evaluation = ({navigation}) =>{

const [rating, setRating] = useState(null);


    return(
        <View style={styles.base}>
            <Text style={styles.title}>Avalie sua Carona</Text>
            <View style={styles.starLines}>
                {rating >= 1 ? 
                  (
                    <TouchableWithoutFeedback onPress={() => setRating(1)}>
                      <FontAwesome name="star" size={48} style={styles.rating}/>
                    </TouchableWithoutFeedback>
                  ):(
                    <TouchableWithoutFeedback onPress={() => setRating(1)}>
                      <Feather name="star" size={48} style={styles.rating} />
                    </TouchableWithoutFeedback>
                  )
                }
                {rating >= 2 ? 
                  (
                    <TouchableWithoutFeedback onPress={() => setRating(2)}>
                      <FontAwesome name="star" size={48} style={styles.rating}/>
                    </TouchableWithoutFeedback>
                  ):(
                    <TouchableWithoutFeedback onPress={() => setRating(2)}>
                      <Feather name="star" size={48} style={styles.rating} />
                    </TouchableWithoutFeedback>
                  )
                }
                {rating >= 3 ? 
                  (
                    <TouchableWithoutFeedback onPress={() => setRating(3)}>
                      <FontAwesome name="star" size={48} style={styles.rating}/>
                    </TouchableWithoutFeedback>
                  ):(
                    <TouchableWithoutFeedback onPress={() => setRating(3)}>
                      <Feather name="star" size={48} style={styles.rating} />
                    </TouchableWithoutFeedback>
                  )
                }
                {rating >= 4 ? 
                  (
                    <TouchableWithoutFeedback onPress={() => setRating(4)}>
                      <FontAwesome name="star" size={48} style={styles.rating}/>
                    </TouchableWithoutFeedback>
                  ):(
                    <TouchableWithoutFeedback onPress={() => setRating(4)}>
                      <Feather name="star" size={48} style={styles.rating} />
                    </TouchableWithoutFeedback>
                  )
                }
                {rating >= 5 ? 
                  (
                    <TouchableWithoutFeedback onPress={() => setRating(5)}>
                      <FontAwesome name="star" size={48} style={styles.rating}/>
                    </TouchableWithoutFeedback>
                  ):(
                    <TouchableWithoutFeedback onPress={() => setRating(5)}>
                      <Feather name="star" size={48} style={styles.rating} />
                    </TouchableWithoutFeedback>
                  )
                }
                
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
    },
    btnStartLine:{
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
  rating:{
    color: 'gold',  
  }
});

export default Evaluation;