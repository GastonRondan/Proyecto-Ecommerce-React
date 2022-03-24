import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDO8qR5OnLL42Khe_LYCbwG3iVQAnOUIJ0",
  authDomain: "e-commerce-react-3ea03.firebaseapp.com",
  projectId: "e-commerce-react-3ea03",
  storageBucket: "e-commerce-react-3ea03.appspot.com",
  messagingSenderId: "1093128486573",
  appId: "1:1093128486573:web:fb9cbe254ee72ac0e51024",
  measurementId: "G-FEC1W7H68F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default getFirestoreApp()