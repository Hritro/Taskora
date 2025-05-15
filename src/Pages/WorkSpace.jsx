import React, { useEffect, useState } from 'react';

const WorkSpace = () => {
    const [workspace, setWorkspace] = useState([])
    
        useEffect(()=>{
            fetch('http://localhost:5000/workspace')
            .then(res => res.json())
            .then(data =>{
                setWorkspace(data)
            })
            .catch((err)=>{
                console.log(err)
            })
        },[])
        console.log(workspace)

        const [workspace_mem, setWorkspace_mem] = useState([])
    
        useEffect(()=>{
            fetch('http://localhost:5000/workspace_member')
            .then(res => res.json())
            .then(data =>{
                setWorkspace_mem(data)
            })
            .catch((err)=>{
                console.log(err)
            })
        },[])
        console.log(workspace_mem)
    return (
        <div className='flex flex-col justify-center items-start p-5 h-full w-full border-3 border-blue-400'>
            <div className='font-bold'>Workspace</div>
            <div className='flex flex-col gap-5  justify-center items-start p-5 h-full w-full'>
                {
                    workspace.map(workspace => <div>id:{workspace.workspace_id} - name: {workspace.name}-Description:{workspace.description} - created by:{workspace.created_by} - created at:{workspace.created_at}</div>)
                }
            </div>
            <div className='flex flex-col gap-5  justify-center items-start p-5 h-full w-full border-t-2'>
                <div className='font-bold'>Workspace Members</div>
                {
                    workspace_mem.map(workspace_mem => <div>id:{workspace_mem.id}-Workspace id:{workspace_mem.workspace_id} - User id: {workspace_mem.user_id} - Role:{workspace_mem.role} - Joined At:{workspace_mem.joined_at}</div>)
                }
            </div>        
        </div>
    );
};

export default WorkSpace;