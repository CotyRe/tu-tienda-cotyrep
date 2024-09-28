import { useState } from 'react'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQ_cvahkg4vcv4W9JYtRONz9W-3ZFGBbI",
  authDomain: "tu-tienda-cotyrep.firebaseapp.com",
  projectId: "tu-tienda-cotyrep",
  storageBucket: "tu-tienda-cotyrep.appspot.com",
  messagingSenderId: "718517642734",
  appId: "1:718517642734:web:15895dde28aa9b711c9aff",
  measurementId: "G-KZB2Q80L77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {

  return (
    <>
      <h1>ESTA PODRIA SER TU TIENDA</h1>
    </>
  )
}

export default App
