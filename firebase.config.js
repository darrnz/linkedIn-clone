import firebase from 'firebase'

var firebaseConfig = {
apiKey: "AIzaSyDgeVG3A0cv-HAdybr74MdPbb9rnGXaQbY",
authDomain: "linkedin-clone-3c7ef.firebaseapp.com",
projectId: "linkedin-clone-3c7ef",
storageBucket: "linkedin-clone-3c7ef.appspot.com",
messagingSenderId: "577098675701",
appId: "1:577098675701:web:7b40cf53e690602f321cbc"
};

const firebaseApp = firebase.initializeAPp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage

export { auth, provider, storage }
export default db
