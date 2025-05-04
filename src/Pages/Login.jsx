import React, { use } from 'react';
import { Link } from 'react-router';
import { GoogleAuthProvider,signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase.config';
import { AuthContext } from '../context/AuthContext';

const Login = () => {

    const {loginWithEmailAndPassword} = use(AuthContext)

    const provider = new GoogleAuthProvider();

    const handleLogin = (e) => {
      e.preventDefault()

      const email = e.target.email.value
      const password = e.target.password.value 

      
      loginWithEmailAndPassword(email,password)
      .then(result => {
        console.log(result.user)
      })
      .catch(eer => {
        console.log(eer)
      })


    }

    const handleGoogleSingIn = () => {
        signInWithPopup(auth, provider)
        .then(result => {
            console.log(result)
        })
        .catch(err =>{
            console.log(err)
        })
    }

    return (
        <div className="bg-base-200 p-10 min-h-screen shadow-2xl">
        <div className="flex-col justify-center items-center">
          
          <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <div className='h-[80px] w-[80px] bg-blue-500 mx-auto rounded-full'>

                </div>
                <div className="text-center my-5">
                    <h1 className="text-2xl font-bold">Sing in to Taskora!</h1>
                    <p>Enter your details to access your account</p>
                </div>
              <form onSubmit={handleLogin}>
                <fieldset className="fieldset">
                    <label className="label">Email</label>
                    <input name='email' type="email" className="input" placeholder="Email" />
                    <label className="label">Password</label>
                    <input name='password' type="password" className="input" placeholder="Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Login</button>
                </fieldset>
              </form>
              
                <div className='text-center'>
                    <p className='font-bold'>OR</p>
                    <div className='flex gap-1 justify-center my-5'>
                        <button onClick={handleGoogleSingIn} className='btn'>Sing in with Google</button>
                        <button className='btn'>Sing in with GitHub</button>
                    </div>
                    Don&apos;t have an account? <Link className='underline' to='/registration'>Create Account</Link>
                </div>

            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;