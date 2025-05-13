import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCBh-bROVbAF2KTOY_XWMWHWd65wDqaXZ0",
  authDomain: "gasc-ecb35.firebaseapp.com",
  projectId: "gasc-ecb35",
  storageBucket: "gasc-ecb35.appspot.com",
  messagingSenderId: "818898100763",
  appId: "1:818898100763:web:d83fc79c3d10504fdc4ebe"
};

let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

export { app, auth, db, googleProvider };