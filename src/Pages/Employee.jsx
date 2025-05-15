import React, { useEffect, useState } from 'react';

const Employee = () => {

    const [users, setUsers] = useState([])
    
        useEffect(()=>{
            fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data =>{
                setUsers(data)
            })
            .catch((err)=>{
                console.log(err)
            })
        },[])
        console.log(users)
    return (
        <div className='flex flex-col gap-5 justify-center items-center p-5 h-full w-full border-3 border-blue-400'>
            <div className='font-bold'>Employee</div>
            {
                users.map(users => <div>Id:{users.id}-Name:{}{users.username} -Email:{users.email}-Created At:{users.created_at}-Role:{users.role}</div>)
            }
        </div>
    );
};

export default Employee;