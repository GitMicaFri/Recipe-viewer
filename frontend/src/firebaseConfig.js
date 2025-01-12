// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: 'receptsamling-d1f75.firebaseapp.com',
    projectId: 'receptsamling-d1f75',
    storageBucket: 'receptsamling-d1f75.firebasestorage.app',
    messagingSenderId: '228833696252',
    appId: '1:228833696252:web:3098ae3a9b9bcd45887a79',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
