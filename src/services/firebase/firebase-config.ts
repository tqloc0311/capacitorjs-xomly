import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getFirestore } from "firebase/firestore/lite"

const firebaseConfig = {
    apiKey: "AIzaSyCs96qXhxUO1oWuNtkaYvavdgEMayGp0Kk",
    authDomain: "xomly-28369.firebaseapp.com",
    projectId: "xomly-28369",
    storageBucket: "xomly-28369.firebasestorage.app",
    messagingSenderId: "571747157377",
    appId: "1:571747157377:web:9c9280ab2cc3db2c10d480",
    measurementId: "G-GHDRKWPXWM",
}

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const firestore = getFirestore(app)

export { app, analytics, firestore }
