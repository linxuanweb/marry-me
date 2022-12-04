// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import firebaseConfig from './config/firebase.config'

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }
export default app
