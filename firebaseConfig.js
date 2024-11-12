// firebaseConfig.js
const firebaseAdmin = require('firebase-admin');

// Initialize Firebase Admin SDK
if (!firebaseAdmin.apps.length) {
  firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.applicationDefault(),  // Or use a service account key
  });
} else {
  firebaseAdmin.app(); // Use default app if already initialized
}

module.exports = firebaseAdmin; // Export to use in other backend files
