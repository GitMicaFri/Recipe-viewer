import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

import firebaseConfig from './firebaseConfig';

// Initiera Firebase
const app = initializeApp(firebaseConfig);

// Initiera Firestore (databas)
const db = getFirestore(app);

// Initiera Firebase Storage (för bilder)
const storage = getStorage(app);

export { db, storage };
