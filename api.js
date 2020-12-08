import firebase from './database';

const api = {

    findUserByName: async function(name) {
        const user = await firebase
            .database()
            .ref('users')
            .orderByChild('name')
            .equalTo(name)
            .once('value');
    
        if (user.exists()){
            return Object.values(user.val.key()[0]) 
        }
        return null
    },

    createUser: function (user) {
        firebase.database().ref('users').push(user);
    },

    createMessages: function (messages) {
        firebase.database().ref("messages").push(messages);
    },

    updateMessages: function (callback){
        firebase
            .database()
            .ref("messages")
            .limitToLast(20)
            .on("child_added", (snapshot) => {

                const { text, user, createdAt, _id } = snapshot.val();

                const message = {text, user, createdAt, _id };

                callback(message);
            });
    },

};


export default api;