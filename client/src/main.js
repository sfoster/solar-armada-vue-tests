import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { initializeApp } from 'firebase/app'
// import { getAuth,connectAuthEmulator } from 'firebase/auth';

/* code from our Firebase console */
const firebaseConfig = {
    apiKey: "AIzaSyBMXvHUDiqjpmLfznl-gu8iRPYafQW8eC8",
    authDomain: "shieldsup-api-test.firebaseapp.com",
    databaseURL: "https://shieldsup-api-test-default-rtdb.firebaseio.com",
    projectId: "shieldsup-api-test",
    storageBucket: "shieldsup-api-test.appspot.com",
    messagingSenderId: "593268412435",
    appId: "1:593268412435:web:a9bee5075c04355ce1efe6"
};

// Initialize Firebase
initializeApp(firebaseConfig)

// if (false && location.hostname === "localhost") {
//   connectAuthEmulator(getAuth(), "http://localhost:9099");
// }

const app = createApp(App)

app.use(router)

app.mount('#app')
