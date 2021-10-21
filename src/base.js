import { initializeApp } from 'firebase/app';
import { getStorage } from "firebase/storage";
import { getFirestore } from '@firebase/firestore';

export const app = initializeApp({
    apiKey: "AIzaSyAowuXHmfvvqtmAK8nQgiCHgGmHpDv9hSY",
    authDomain: "co-one-demo.firebaseapp.com",
    projectId: "co-one-demo",
    storageBucket: "co-one-demo.appspot.com",
    messagingSenderId: "65977868986",
    appId: "1:65977868986:web:d81a9faf1b10571d3f1883"
});

export const storage = getStorage(app);
export const db = getFirestore(app);