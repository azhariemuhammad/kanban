const firebase = require('firebase')
  // Initialize Firebase
const config = {
  apiKey: 'AIzaSyDKgVJXWUPHFz9EEAd4HQ-f0hoxFtXNZN8',
  authDomain: 'project-auth-passport-185813.firebaseapp.com',
  databaseURL: 'https://project-auth-passport-185813.firebaseio.com',
  projectId: 'project-auth-passport-185813',
  storageBucket: 'project-auth-passport-185813.appspot.com',
  messagingSenderId: '563541523754'
}
firebase.initializeApp(config)

const db = firebase.database()

module.exports = db
