import React, { use, useState } from 'react';
import { AuthContext } from '../context/AuthContext';

const Profile = () => {
    const {user,updateUserProfile} = use(AuthContext)
    const [show,setShow] = useState(false)
    
    const handelUpdateProfile = (e) => {
        e.preventDefault()
        const displayName = e.target.displayName.value
        const photoURL = e.target.photoURL.value

        updateUserProfile(displayName,photoURL)
    }
    return (
        <div className='flex flex-col justify-center items-center gap-3  mt-5 p-5 h-full w-full border-3 border-blue-400'>
            {user && <>
          <img className='w-10 h-10 rounded-full' src={user.photoURL ? user.photoURL : 'https://c8.alamy.com/comp/2PWERD5/student-avatar-illustration-simple-cartoon-user-portrait-user-profile-icon-youth-avatar-vector-illustration-2PWERD5.jpg'}/>
          <h1>{user.displayName}</h1>
          <p>{user.email}</p>
          <button onClick={() => setShow(!show)} className='btn btn-success btn-xs'>Edit</button>
      </>}
                {show && <div className='text-center mt-5'>
                    <h1 className='font-bold text-xl'>Edit Profile</h1>
                    <form onSubmit={handelUpdateProfile}>
                        <fieldset className='fieldset w-[300px]'>
                            <label className='label'>Name</label>
                            <input defaultValue={user.displayName} type='text' name='displayName' className='input' placeholder='Name'></input>

                            <label className='label'>PhotoURL</label>
                            <input defaultValue={user.photoURL} type='text' name='photoURL' className='input' placeholder='photoURL'></input>

                            <button className='btn btn-success'>Save</button>
                        </fieldset>
                    </form>
                </div>}

        </div>
    );
};

export default Profile;