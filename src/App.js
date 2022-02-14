
import{ getAuth, signInWithPopup, GoogleAuthProvider,  GithubAuthProvider, signOut ,FacebookAuthProvider} from 'firebase/auth';
import './App.css';
import initailizeAuthentication from './Firebase/Firebase.initialize';
import { useState } from 'react';
initailizeAuthentication();
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const facebookProvider =new  FacebookAuthProvider();
function App() {
  const [user,setUser] = useState({})
  const auth=getAuth();
  const handleGoogleSingIn = () =>{
    signInWithPopup(auth,googleProvider)
    .then(result =>{
      const {displayName, email, photoURL}= result.user;
      console.log(user)
     const logedInUser = {
        name:displayName,
        email:email,
        photo:photoURL
      };
      setUser(logedInUser);
    });
  }
  const handleGihubSinIn = ()=>{
      signInWithPopup (auth,githubProvider)
      .then(result=>{
        const {photoURL} = result.user;
        const logedInUser = {
          photo:photoURL
        };
        setUser(logedInUser);
      })
  }
  const handleSignOut = ()=>{
    signOut(auth)
    .then ( ()=>{
      setUser({});
    })
  }
  const handleFacebookSingIn = ()=>{
    signInWithPopup(auth,facebookProvider)
    .then((result=>{
      const {photoURL} = result.user;
        const logedInUser = {
          photo:photoURL
        };
        setUser(logedInUser);
    }))
  }
  return (
    <div className="App">
      { !user.name?
        <div>
        <button onClick={handleGoogleSingIn}>Google Sign in </button>
        <button onClick={handleGihubSinIn}>Github Sing in</button>
        <button onClick={handleFacebookSingIn}>Facebook Sing In</button>
        </div>:
        <button onClick={handleSignOut}>Sing Out</button>

      }
      <br/>
      {
        user.photo && <div>
          <h1>Welcome {user.name}</h1>
          <p>Iam sure that is your email: {user.email}</p>
          <img src={user.photo} alt=""/>
        </div>
      }
    </div>
  );
}

export default App;
