import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const environment = {
  production: false,
  firebase: {
    projectId: 'crud-database-5b7ff',
    appId: '1:711932908564:web:f166face772d05f7248301',
    storageBucket: 'crud-database-5b7ff.appspot.com',
    locationId: 'europe-west',
    apiKey: 'AIzaSyANRMeU_v8-muWDUwx08UYhGPEpJC4JsKc',
    authDomain: 'crud-database-5b7ff.firebaseapp.com',
    messagingSenderId: '711932908564',
    measurementId: 'G-3Q6GHXG9GL',
  }
};

// Initialize Firebase
const app = initializeApp(environment.firebase);

// Initialize Analytics and get a reference to the service
const analytics = getAnalytics(app);
