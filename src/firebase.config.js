// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4hAPMirGxZkDpphFuzGvSOVRK45oVGdI",
  authDomain: "real-estate-app-296eb.firebaseapp.com",
  databaseURL: "https://real-estate-app-296eb-default-rtdb.firebaseio.com",
  projectId: "real-estate-app-296eb",
  storageBucket: "real-estate-app-296eb.appspot.com",
  messagingSenderId: "328008446426",
  appId: "1:328008446426:web:9002e2386fd8390ad450e3",
  measurementId: "G-HRV8FFXPNT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;
// export const analytics = getAnalytics(app);
