import{initializeApp} from 'firebase/app'
import firebaseConfig from './Firebase.config';
const initailizeAuthentication = ()=>{
    initializeApp(firebaseConfig);
}
export default initailizeAuthentication;