import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';


class Carona extends Component{
    static defaultProps = {
        name: '',
        destino: '',
        vagas: ''
    }

    state = {
    }


    render(){
        const {state, props} = this;

        return(
            <View style={styles.base}>
                <Text>{props.name} - {props.destino}</Text>
                <Text>Vagas {props.vagas}</Text>
            </View>
        );
    }
}



// const Carona = ({navigation}) => {

//     return(
//         <View style={styles.base}>
//             <Text>Nome motorista - destino</Text>
//             <Text>Vagas X</Text>
//         </View>
//     );
// }

const styles = StyleSheet.create({
    base:{
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#333',
        padding: 24,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    Text:{
        fontSize: 16,
        fontWeight: 'bold'
    }
});

export default Carona;