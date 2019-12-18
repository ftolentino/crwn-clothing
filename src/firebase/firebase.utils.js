import firebase from 'firebase/app';
// for database
import 'firebase/firestore';
// for authentication
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyCaDB1VdTQwJXoThVotpUUudbQKjHpJWsU',
	authDomain: 'crwn-db-d8261.firebaseapp.com',
	databaseURL: 'https://crwn-db-d8261.firebaseio.com',
	projectId: 'crwn-db-d8261',
	storageBucket: 'crwn-db-d8261.appspot.com',
	messagingSenderId: '282305140445',
	appId: '1:282305140445:web:b04cdaf508d452eccf6d34',
	measurementId: 'G-QEENYBVTG3'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
