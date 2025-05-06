import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext';

const Profile = () => {
    const {user,logout} = use(AuthContext)
    return (
        <div className='flex flex-col justify-center items-center gap-3  mt-5 p-5 h-full w-full border-3 border-blue-400'>
            {user && <>
          <img className='w-10 h-10 rounded-full' src={user.photoURL ? user.photoURL : 'https://c8.alamy.com/comp/2PWERD5/student-avatar-illustration-simple-cartoon-user-portrait-user-profile-icon-youth-avatar-vector-illustration-2PWERD5.jpg'}/>
          <h1>{user.displayName}</h1>
          <p>{user.email}</p>
          <button className='btn btn-error btn-xs' onClick={logout}>LogOut</button>
      </>}
        </div>
    );
};

export default Profile;