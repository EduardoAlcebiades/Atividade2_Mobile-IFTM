import firebase from "firebase";

import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB6mKbMBUqsCeXRKKS6YZXtibJb0rwg",
  authDomain: "atividade-1---pdm-5b1a3.firebaseapp.com",
  databaseURL: "https://atividade-1---pdm-5b1a3-default-rtdb.firebaseio.com",
  projectId: "atividade-1---pdm-5b1a3",
  storageBucket: "atividade-1---pdm-5b1a3.appspot.com",
  messagingSenderId: "380224354237",
  appId: "1:380224354237:web:0f2c2af636fee577a284d4",
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const usersDB = firebaseApp.database().ref().child("users");
