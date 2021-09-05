//Your web app's Firebase configuration.
var firebaseConfig = {
    apiKey: "AIzaSyCBt5pZ2KPFoWoGIRGfSTX7MjFaWCt50Bg",
    authDomain: "knnproj.firebaseapp.com",
    projectId: "knnproj",
    storageBucket: "knnproj.appspot.com",
    messagingSenderId: "631962106497",
    appId: "1:631962106497:web:f3407e687026a52b166b80"
};
//Initialize Firebase.
firebase.initializeApp(firebaseConfig);


const auth = firebase.auth();
// const db = firebase.firestore();