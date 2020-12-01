import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  // Your firebase credentials
  apiKey: "AIzaSyBaFUlvUsZE8imPjrrzgdf65dUmSWkeO7c",
  authDomain: "sarajubala-shishu-vidyapith.firebaseapp.com",
  databaseURL: "https://sarajubala-shishu-vidyapith.firebaseio.com",
  projectId: "sarajubala-shishu-vidyapith",
  storageBucket: "sarajubala-shishu-vidyapith.appspot.com",
  messagingSenderId: "415824601105",
  appId: "1:415824601105:web:a163a5c7f2afc08c0311b0",
  measurementId: "G-YS5CM3MZBB"

});

const db = firebaseApp.firestore();
const storage = firebase.storage();

export { db ,storage };

export default firebase
