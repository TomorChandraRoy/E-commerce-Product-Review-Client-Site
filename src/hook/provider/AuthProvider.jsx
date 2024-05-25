import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from './../../utils/firebaseConfig/FirebaseConfig';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    //reload korle login page jeno na jay
    const [loading, setLoading] = useState(true);

    //CREATE AUTH
    const createAccount = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    //SIGNIN AUTH
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    //SIGNOUT AUTH
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    //DISPLAY USER INFO Update AUTH
    const updateUserProfile = (name, photo) => {
        setLoading(true)
    return updateProfile(auth.currentUser, {
        displayName: name, photoURL: photo
    })
};

//# To keep yourself in sate so you don't have to login again later.
useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
        setLoading(false);
        setUser(currentUser);
        // console.log("current user ", currentUser);
        return () => {
            unSubscribe();
        }
    })
}, []);

const authInfo = { user, createAccount, signIn, logOut, updateUserProfile }
return (
    < AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
);
};

export default AuthProvider;