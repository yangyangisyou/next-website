// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAH7aXOe4717RHVD6SEgVQWv_rYjHjB2r4',
  authDomain: 'meow-learning-324710.firebaseapp.com',
  projectId: 'meow-learning-324710',
  storageBucket: 'meow-learning-324710.appspot.com',
  messagingSenderId: '860219610175',
  appId: '1:860219610175:web:f1f1c844665a416143148a',
  measurementId: 'G-EVP48286J3',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
