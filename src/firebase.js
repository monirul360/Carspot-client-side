// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDtmWK9JDffpu6lOcUJqZqpRn4DLQJ5-Ho",
    authDomain: "carspot-cf9bf.firebaseapp.com",
    projectId: "carspot-cf9bf",
    storageBucket: "carspot-cf9bf.appspot.com",
    messagingSenderId: "324010075592",
    appId: "1:324010075592:web:3d9b91511bcafab80e8cfd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;