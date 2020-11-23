import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, CheckBox} from 'react-native';

// const [isSelected, setSelection] = useState(false);

export default ({history}) => (
    <View style={style.base}>
            <View style={style.motorista}>
                <Text>Nome do passageiro</Text>
                {/* <CheckBox 
                    value={isSelected}
                    onValueChange={setSelection}
                    style={style.checkBox}
                /> */}
            </View>
            <View style={style.vagas}>
                <Text>Nova Mensagem</Text>
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