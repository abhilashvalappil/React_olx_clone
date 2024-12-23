import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDm1GPPc0I0IUCSNOxbL19B0v1UX8a58gs",
    authDomain: "olx-clone-89b9f.firebaseapp.com",
    projectId: "olx-clone-89b9f",
    storageBucket: "olx-clone-89b9f.firebasestorage.app",
    messagingSenderId: "393256388574",
    appId: "1:393256388574:web:404788931db58b8b4cbf4f",
    measurementId: "G-CXHGQ4FJ1G"
  };

  export default firebase.initializeApp(firebaseConfig)
