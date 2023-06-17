import React, { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from '../../Auth/AuthProvider';

import { useDispatch, useSelector } from 'react-redux';
import { getAppToken } from '../../redux/actions/core';

const Login = () => {

    
    let dispatch = useDispatch(); 
    let appState = useSelector(store => store)

    const { setAuth } = useContext(AuthContext); 



    const userRef = useRef( ); 
    const errRef = useRef(); 

    const [user, setUser] = useState(''); 
    const [pwd, setPwd] = useState(''); 
    const [errMsg, setErrMsg] = useState(''); 


   
    useEffect(()=>{
        userRef.current.focus(); //set the focus on the input when the comp. loads... 
    }, [])

    useEffect(()=>{
       setErrMsg(''); 
    }, [user, pwd])//clear errors if the user changes the user or the password... 


    //handle form submit... 
    const handleSubmit = async(e) => {
        e.preventDefault(); //to not reload the page... 
        
        let details = { email:user, password: pwd };

        try{

            await dispatch(getAppToken(JSON.stringify(details)));

            //let {access_token:token, expires_in, user } = res?.data; 

           // setAuth({access_token:token, expires_in, user})

            setUser(''); 
            setPwd('');
            //setSuccess(true);

        }catch(err){
            //console.log(err)
            if(!err?.response){
                setErrMsg('no server response...');
            }else if(err.response?.status === 400 || err.response?.status == 422){
                setErrMsg('Missing Username or Password'); 
            }else if(err.response?.status === 401){
                setErrMsg('Unauthorized')
            }else{
                setErrMsg('Login Failed...')
            }
            errRef.current.focus(); // send focus to the error. 
        }

    }


  return (


            <section>
                
                <p>{appState ? JSON.stringify(appState) : 'null' }</p>

                <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="password"> Username </label>
                    <input
                        type="text"
                        id="password"
                        ref={userRef}
                        autoComplete="off"
                        onChange={(e)=> setUser(e.target.value)}
                        value={user}
                        required
                    />
                    <label htmlFor="password"> Password </label>
                    <input
                        type="password"
                        id="password"
                        onChange={(e)=> setPwd(e.target.value)}
                        value={pwd}
                    />
                    <button>Sign In</button>
                </form>
            </section>
        )
}

export default Login
