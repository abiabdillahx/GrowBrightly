import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-auth.js";
import { getFirestore, doc, setDoc} from "https://www.gstatic.com/firebasejs/11.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCBh-bROVbAF2KTOY_XWMWHWd65wDqaXZ0",
  authDomain: "gasc-ecb35.firebaseapp.com",
  projectId: "gasc-ecb35",
  storageBucket: "gasc-ecb35.firebasestorage.app",
  messagingSenderId: "818898100763",
  appId: "1:818898100763:web:d83fc79c3d10504fdc4ebe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const submit = document.getElementById("sign-up-button");

// Register user
submit.addEventListener("click", function(event) {
  event.preventDefault();
  
  // input fields
  const emailInput = document.getElementById("email").value;
  const passwordInput = document.getElementById("password").value;
  const nameInput = document.getElementById("name").value;

  /*
  Tambahkan ini ke html:
  <script src="config.js" defer></script> 
  */
 

  // Register user
  createUserWithEmailAndPassword(auth, emailInput, passwordInput, nameInput)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    setDoc(doc(db, "users", user.uid), {
      email: emailInput,
      password: passwordInput,
      name: nameInput,
      
      // data lainnya di bawah

    }).then(() => {
      console.log("Document written with ID: ", user.uid);
      window.location.href = ""; // Pindah ke halaman lain
    });
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("Error: " + errorMessage);
    // ..
  });
});

