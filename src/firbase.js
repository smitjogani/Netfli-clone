import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAKb5iRWujIPtl4t-QX9uSgTj9KUD-w5V0",
  authDomain: "netflix-clone-cae0f.firebaseapp.com",
  projectId: "netflix-clone-cae0f",
  storageBucket: "netflix-clone-cae0f.appspot.com",
  messagingSenderId: "844136528907",
  appId: "1:844136528907:web:e372f05c8cbfa6ec1fdb0e",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
