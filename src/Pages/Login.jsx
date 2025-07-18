import React, { use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import toast from 'react-hot-toast';

const Login = () => {

    const {loginWithEmailAndPassword,signInWithGoogle} = use(AuthContext)

    const location = useLocation()
    const navigate = useNavigate()


    const handleLogin = (e) => {
      e.preventDefault()

      const email = e.target.email.value
      const password = e.target.password.value 

      
      loginWithEmailAndPassword(email,password)
      .then(result => {
        toast.success('Log in Successful')
        console.log(result.user)
        navigate(location.state || '/')
      })
      .catch(eer => {
        toast.error(eer.message)
        console.log(eer)
      })


    }

    const handleGoogleSingIn = () => {
        signInWithGoogle()
        .then(result => {
            console.log(result)
            navigate(location.state || '/')
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
                    <h1 className="text-2xl font-bold">Sign in to Taskora!</h1>
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
                        <button onClick={handleGoogleSingIn} className='btn'>Sign in with Google</button>
                        <button className='btn'>Sign in with GitHub</button>
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