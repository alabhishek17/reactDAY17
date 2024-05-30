import { getAuth, signInWithPopup, GoogleAuthProvider , signOut} from "firebase/auth";
import app from "../../config/firebase";
import { useEffect, useState } from "react";
const Authentication=()=>{
    const [auth,setAuth]=useState(null);
  
    useEffect(()=>{
     const authInstance=getAuth(app);
     setAuth(authInstance);
    },[])

//    const auth=getAuth();
//    console.log(auth.currentUser);

    const LoginwithGoogle = async () => {
        try{
            const auth = getAuth(app);
            const googleProvider=new GoogleAuthProvider();
            const response= await signInWithPopup(auth,googleProvider)
          
          console.log(response);  
        }catch(e){
            console.log(e);
        }
    };

    const Log_outwithGoogle =async ()=>{
        try{
         const auth =getAuth(app);
         const response = await signOut(auth)
         console.log(response);
        }catch(e){
            console.log(e);
        }
    };

    return(
        <div>
        <button onClick={LoginwithGoogle}>login</button>
        <button onClick={Log_outwithGoogle}>login out</button>
        </div>
    )
}
export default Authentication;