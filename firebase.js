// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZVQ-eil9q2tz1reIk_2KXRFx-Lm5J6Io",
  authDomain: "admin-barbasapp.firebaseapp.com",
  projectId: "admin-barbasapp",
  storageBucket: "admin-barbasapp.appspot.com",
  messagingSenderId: "172685887758",
  appId: "1:172685887758:web:d465d5304012c21d5cef5f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default storage;