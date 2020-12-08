import React,{useEffect} from 'react';
import {View, Text} from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat';
import api from '../../../../../api';

const ChatScreen = (props) =>{
  const messages = [];

  function atualizaMensagens(message){
    messages.push(message)
  }

  useEffect(() =>{
    console.disableYellowBox = true;
    api.updateMessages(atualizaMensagens);
  }, []);


  const user =  { 
      _id: '1', 
      userName: 'gustavo', 
      avatar: 'http://placeimg.com/140/140/any',
    };

  function onSendMessage(messages){
    messages.forEach((messages) => {
      messages.createdAt = new Date().getTime();
      api.createMessages(messages)

    })
  }

  return (
    <GiftedChat 
      user={user} 
      messages={messages} 
      onSend={onSendMessage}
    />
  );
};

export default ChatScreen;