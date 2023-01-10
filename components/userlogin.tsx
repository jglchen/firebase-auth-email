import { useState, useEffect, useRef, FormEvent } from 'react';
import validator from 'email-validator';
import { auth } from '@/lib/firebase';
import { sendSignInLinkToEmail, isSignInWithEmailLink, signInWithEmailLink } from 'firebase/auth';
import useUser from '@/lib/useUser';
import fetcher from '@/lib/fetchJson';
import axios from 'axios';
import apiconfig from '@/lib/apiconfig';
import loaderStyles from '@/styles/loader.module.css';

function UserLogIn(){
    const { mutateUser } = useUser();
    const [emailSignIn, setEmailSignIn] = useState('');
    const [emailerr, setEmailErr] = useState('');
    const emailEl = useRef(null);
    const [inPost, setInPost] = useState(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        async function signinResultFollow(result: any){
            const user = result.user;
            const uid = user.uid;
            const email = user.email;
            const displayName = user.displayName;
            const photoURL = user.photoURL;
            mutateUser(await fetcher('/api/login', {uid, email, displayName, photoURL}), false);
            await axios.post('/api/useradd', { uid, email, displayName, photoURL }, apiconfig);
            window.location.href = window.location.href.replace(window.location.search,'');
        }
        
        if (isSignInWithEmailLink(auth, window.location.href)){
            let email = window.localStorage.getItem('emailForSignIn');
            if (!email) {
                email = window.prompt('Please provide your email for confirmation');
                if (email){
                    window.localStorage.setItem('emailForSignIn', email);
                }
            }
            if (!email) {
                return;
            }

            signInWithEmailLink(auth, email, window.location.href)
            .then((result) => {
                //window.localStorage.removeItem('emailForSignIn');           
                signinResultFollow(result);
            })
            .catch((error) => {
                setEmailErr('Error: ' + error.message);
            });
        }
    });

    function handleChange(e: FormEvent<HTMLInputElement>){
        let { value } = e.currentTarget;
        //Remove all the markups to prevent Cross-site Scripting attacks
        value = value.replace(/<\/?[^>]*>/g, "");
        setEmailSignIn(value);
        setEmailErr('');
    }
    
    function resetErrMsg(){
        setEmailSignIn('');
        setEmailErr('');
    }

    function resetForm(){
        setEmailSignIn('');
        setEmailErr('');    
    }
    
    async function submitForm(){
        //Reset all the err messages
        setEmailErr('');
        //Check if Email is filled
        if (!emailSignIn){
            setEmailErr("Please type your email, this field is required!");
            (emailEl.current as any).focus();
            return;
        }
        //Validate the email
        if (!validator.validate(emailSignIn)){
            setEmailErr("This email is not a legal email.");
            (emailEl.current as any).focus();
            return;
        }

        setInPost(true);
        try {
            const actionCodeSettings = {
                url: window.location.href.replace(window.location.search,''),
                handleCodeInApp: true
            }
            await sendSignInLinkToEmail(auth, emailSignIn, actionCodeSettings);
            window.localStorage.setItem('emailForSignIn', emailSignIn);
            const successRemark = 'Please go to your mail box, click the sign in link in the email sent to you.';
            setEmailErr(successRemark);
        }catch(error: any){
            setEmailErr('Error: ' + error.message);
        }
        setInPost(false);
    }

    return (
        <div>
            <form>
                <div className="mark" style={{color: 'red'}}>{emailerr}</div>
                <input
                    type="text"
                    name="email"
                    id="email"
                    value={emailSignIn}
                    placeholder="Email"
                    ref={emailEl}
                    onChange={handleChange}    
                />
            </form>
            <div>
               <input type="button" value="Log In" onClick={submitForm} />
               <input type="reset" value="Reset" onClick={resetForm} />
            </div>
            {inPost &&
                  <div className={loaderStyles.loadermodal}>
                      <div className={`${loaderStyles.loader} ${loaderStyles.div_on_center}`} />
                  </div>
            }
        </div>
    );    

}

export default UserLogIn;
