import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  //Cole sua Configuração do Firebase aqui
  const firebaseConfig = {
    apiKey: "AIzaSyD_tCS_YH7GKcbRhFKp8USCXu5GI0GJSlg",
    authDomain: "projeto-71-1a700.firebaseapp.com",
    projectId: "projeto-71-1a700",
    storageBucket: "projeto-71-1a700.appspot.com",
    messagingSenderId: "272297387254",
    appId: "1:272297387254:web:289f18ab2fb9b43e0278d7"
  } 
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
