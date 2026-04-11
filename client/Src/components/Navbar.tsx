import { NavLink } from "react-router-dom";

export default function Navbar(){

    return(
        <nav>
            <NavLink to='/'> Home</NavLink>
            <NavLink to='/climbs'> Climbs</NavLink>
            <NavLink to='/log'> LogBook</NavLink>
            <NavLink to='/profile'>Profile </NavLink>
        </nav>
    )
}