import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from 'firebase/auth';
import initAuth from '../Firebase/firebase.init';

initAuth();

const useFirebase = () => {
    const [user, setUser] = useState({});
    // const [error, setError] = useState('');

    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();

    // Google Sign In
    const signInUsingGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)
        .finally(() => setIsLoading(false))
        }

    // Log Out
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
        .then(() => {})
            .finally(() => setIsLoading(false));
    }

    // State Change
    useEffect( () => {
        onAuthStateChanged(auth, (user) => {
            if ( user ){ 
                setUser(user);
            }
            else{
                setUser({});
            }
            setIsLoading(false);
        });
    }, [])

    //Usual Sign In With Pass
    // const signInWithPass = (mail, pass) => {
    //     return signInWithEmailAndPassword(auth, mail, pass)
    //     .then(result => {
    //         const user = result.user;
    //     })
    //     .catch(error => {
    //         setError(error.message)
    //     });
    // }

    // // Sign Up With Pass
    // const signUpWithPass = (mail, pass) => {
    //     setIsLoading(true);

    //     if(pass.length < 6){
    //         setError('Needs minimum 6 characters to set password!')
    //         return;
    //     }

    //     createUserWithEmailAndPassword(auth, mail, pass)
    //     .then(result => {
    //         setError('')
    //     })
    //     .catch(error => {
    //         setError(error.message)
    //     })
    //     .finally( () => setIsLoading(false))
    // }

    return {
        user,
        // error,
        isLoading,
        // setError,
        signInUsingGoogle,
        logOut
        // signInWithPass,
        // signUpWithPass
    }
}

export default useFirebase;