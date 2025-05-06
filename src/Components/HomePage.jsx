import { IoHomeOutline } from "react-icons/io5";
import { FaSuitcase, FaTasks } from "react-icons/fa";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { NavLink } from 'react-router';


const HomePage = () => {
    return (
        <div className="mt-3 gap-2 flex flex-col">
            <div className="flex justify-center items-center mb-3">
                <div className='text-4xl font-bold flex'>Task<span className='text-sky-400'>ora</span></div>
            </div>
            <div className="flex justify-between px-20 gap-5 border">
                <div><NavLink className='flex gap-1 items-center' to='/dashboard'><IoHomeOutline />DashBoard</NavLink></div>
                <div><NavLink className='flex gap-1 items-center' to='/workspace'><FaSuitcase />Workspace</NavLink></div>
                <div><NavLink className='flex gap-1 items-center' to='/task'><FaTasks></FaTasks>Task</NavLink></div>
                <div><NavLink className='flex gap-1 items-center' to='/employee'><MdOutlinePeopleAlt></MdOutlinePeopleAlt>Employees</NavLink></div>
            </div>
        </div>
    );
};

export default HomePage;


