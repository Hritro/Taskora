import React, { useEffect, useState } from 'react';

const Notification = () => {

     const [notification, setNotification] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/notification')
        .then(res => res.json())
        .then(data =>{
            setNotification(data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])

    console.log(notification)
    return (
        <div className='flex flex-col gap-5  justify-center items-start p-5 h-full w-full border-3 border-blue-400'>
            {
                notification.map(notification => <div>{notification.notification_id} - {notification.message}</div>)
            }
        </div>
    );
};

export default Notification;