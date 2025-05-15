import React, { useEffect, useState } from 'react';

const Task = () => {

     const [task, setTask] = useState([])
    
        useEffect(()=>{
            fetch('http://localhost:5000/task')
            .then(res => res.json())
            .then(data =>{
                setTask(data)
            })
            .catch((err)=>{
                console.log(err)
            })
        },[])
        const [task_asgn, setTask_asgn] = useState([])
    
        useEffect(()=>{
            fetch('http://localhost:5000/task_asgn')
            .then(res => res.json())
            .then(data =>{
                setTask_asgn(data)
            })
            .catch((err)=>{
                console.log(err)
            })
        },[])
        console.log(task_asgn)
        const [task_SH, setTask_SH] = useState([])
        useEffect(()=>{
            fetch('http://localhost:5000/task_SH')
            .then(res => res.json())
            .then(data =>{
                setTask_SH(data)
            })
            .catch((err)=>{
                console.log(err)
            })
        },[])
        console.log(task_SH)

    return (
        <div className='flex flex-col justify-center items-start gap-5 p-5 h-full w-full border-3 border-blue-400'>
            <div className='flex flex-col gap-5  justify-center items-start p-5 h-full w-full'>
                <div className='font-bold'>Task</div>
                {
                    task.map(task => <div>id:{task.task_id} - workspace-id: {task.workspace_id} - title:{task.title} - status:{task.status} - due date:{task.due_date} created by:{task.created_by}- assigned to:{task.assigned_to}- current stage{task.cueeent_stage}</div>)
                }
            </div>
            <div className='flex flex-col gap-5  justify-center items-start p-5 h-full w-full border-t-2'>
                <div className='font-bold'>Task Assignment</div>
                {
                    task_asgn.map(task_asgn => <div>id:{task_asgn.id} - task-id: {task_asgn.task_id} -Assigned id: {task_asgn.assigned_id} Assigned by:{task_asgn.assigned_by} Assigned Date & Time:{task_asgn.assigned_at}</div>)
                }
            </div>
            <div className='flex flex-col gap-5  justify-center items-start p-5 h-full w-full border-t-2'>
                <div className='font-bold'>Task Stage History</div>
                {
                    task_SH.map(task_SH => <div>id:{task_SH.id} - task-id: {task_SH.task_id} -From Stage: {task_SH.from_stage} To Stage:{task_asgn.to_stage} Comments:{task_SH.comments}-Updated by:{task_SH.updated_by} Updated At:{task_SH.updated_at}</div>)
                }
            </div>
        </div>
    );
};

export default Task;