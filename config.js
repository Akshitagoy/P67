import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyBcby1l8hrd0_h24OYjgYi5IGKGDrH2Zsc",
        authDomain: "team-voting-app-33008.firebaseapp.com",
        projectId: "team-voting-app-33008",
        storageBucket: "team-voting-app-33008.appspot.com",
        messagingSenderId: "417260288788",
        appId: "1:417260288788:web:9f4845938bd658d7f32001"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();