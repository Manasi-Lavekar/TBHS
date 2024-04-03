import React from "react";
import { NavLink } from "react-router-dom";

function Navbar()
{
    return(
        <>
        <div className="nav">
        <NavLink to='/'>
            HOME
        </NavLink>
        <NavLink to='/blogs'>
            BLOGS
        </NavLink>
        <NavLink to='/podcast'>
            PODCAST
        </NavLink>
        <NavLink to='/test'>
            TEST
        </NavLink>
        <NavLink to='/test'>
            LOGIN
        </NavLink>
        </div>
  
        </>
    )
}
export default Navbar;