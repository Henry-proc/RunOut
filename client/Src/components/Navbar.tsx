import { NavLink } from "react-router-dom";

export default function Navbar(){

    return(
    <nav className="flex justify-evenly bg-emerald-900 w-full py-[2vh]">
            <NavLink className=' rounded hover:bg-gray-700/50 py-[3vh] px-[5vw] text-gray-100' to='/'> Home</NavLink>
            <NavLink className=' rounded hover:bg-gray-700/50 py-[3vh] px-[5vw] text-gray-100' to='/climbs'> Climbs</NavLink>
            <NavLink className=' rounded hover:bg-gray-700/50 py-[3vh] px-[5vw] text-gray-100' to='/log'> LogBook</NavLink>
            <NavLink className=' rounded hover:bg-gray-700/50 py-[3vh] px-[5vw] text-gray-100' to='/profile'>Profile </NavLink>
        </nav>
    )
}