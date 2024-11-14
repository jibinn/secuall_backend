// firebaseConfig.js
const firebaseAdmin = require('firebase-admin');
const { FIREBASE_PROJECT_ID, FIREBASE_PRIVATE_KEY, FIREBASE_CLIENT_EMAIL } = process.env;

// Initialize Firebase Admin SDK if not already initialized
if (!firebaseAdmin.apps.length) {
  firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert({
      projectId: FIREBASE_PROJECT_ID,
      privateKey: FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'), // Handle line breaks in private key
      clientEmail: FIREBASE_CLIENT_EMAIL,
    }),
  });
  console.log('Firebase initialized successfully');
} else {
  console.log('Firebase already initialized');
}

module.exports = firebaseAdmin;
