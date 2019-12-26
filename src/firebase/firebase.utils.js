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

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapShot = await userRef.get();

	if(!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName, 
				email, 
				createdAt, 
				...additionalData
			})
		} catch (error) {
			console.log('error creating user', error.message);
		}
	}

	return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
