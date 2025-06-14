import React, { use } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import { IoMdNotificationsOutline } from "react-icons/io";


const NavBar = () => {

    const {user,logout} = use(AuthContext)

    console.log(user)

    return (
        <div className="navbar bg-base-100 shadow-sm border-b-2">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><NavLink to='/'>Home</NavLink></li>
        { !user &&
              <>
                <li>
                  <NavLink to={"/login"}>Login</NavLink>
                </li>
                <li>
                  <NavLink to={"/register"}>Register</NavLink>
                </li>
              </>
            }
        <li><NavLink to='/profile'>Profile</NavLink></li>
        <li><NavLink to='/users'>Users</NavLink></li>
        <div className='mt-1 text-xl'>
          <li><NavLink to='/notification'><IoMdNotificationsOutline /></NavLink></li>
        </div>
      </ul>
    </div>
    <div className='text-2xl font-bold'>Task<span className='text-sky-400'>ora</span></div>
  </div>
  <div className="navbar-center hidden md:flex lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><NavLink to='/'>Home</NavLink></li>
    { !user &&
              <>
                <li>
                  <NavLink to={"/login"}>Login</NavLink>
                </li>
                <li>
                  <NavLink to={"/registration"}>Register</NavLink>
                </li>
              </>
            }
    <li><NavLink to='/profile'>Profile</NavLink></li>
    <li><NavLink to='/users'>Users</NavLink></li>
    <div className='mt-1 text-xl'>
      <li><NavLink to='/notification'><IoMdNotificationsOutline /></NavLink></li>
    </div>
    </ul>
  </div>
  <div className="navbar-end gap-3">
    {user && <>
          <img className='w-10 h-10 rounded-full' src={user.photoURL ? user.photoURL : 'https://c8.alamy.com/comp/2PWERD5/student-avatar-illustration-simple-cartoon-user-portrait-user-profile-icon-youth-avatar-vector-illustration-2PWERD5.jpg'}/>
          <button className='btn btn-error btn-xs' onClick={logout}>LogOut</button>
      </>}
  </div>
</div>
    );
};

export default NavBar;