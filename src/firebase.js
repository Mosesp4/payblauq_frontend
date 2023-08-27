import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyAqYEBDiwlz-dKXNm3sLoGcWMK7O-oROKU",
  authDomain: "payblauq.firebaseapp.com",
  projectId: "payblauq",
  storageBucket: "payblauq.appspot.com",
  messagingSenderId: "294160226595",
  appId: "1:294160226595:web:09328f0e6097a600641496",
  measurementId: "G-FP1LWDC70Q"
})

export const auth = app.auth()
export default app