//import de la libreria
import firebase from "firebase/app";
import "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqAEzakT9tJvDs9xjHhCFyaMy2e3yLzyo",
  authDomain: "crudreact-31487.firebaseapp.com",
  projectId: "crudreact-31487",
  storageBucket: "crudreact-31487.appspot.com",
  messagingSenderId: "560642981393",
  appId: "1:560642981393:web:4f26f1aaf054443efb3bb0"
};

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export {firebase}