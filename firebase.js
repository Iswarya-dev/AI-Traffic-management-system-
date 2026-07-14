import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBJMWx9vXgZj8lmoRA7YUYirGwPxuMOO3I",
  authDomain: "ai-traffic-management-sy-a6240.firebaseapp.com",
  projectId: "ai-traffic-management-sy-a6240",
  storageBucket: "ai-traffic-management-sy-a6240.firebasestorage.app",
  messagingSenderId: "1082039794541",
  appId: "1:1082039794541:web:5b7691d27ac2ee5375f864"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;