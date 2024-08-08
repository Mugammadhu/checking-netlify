import {  NavLink } from "react-router-dom";
import './style.css'
export const Navbar = () => {
  return <>
  <h1>Navbar</h1>
  <NavLink to='/' style={({isActive})=>{ return isActive ? {color:"red"} : {}}}>
  {({isActive})=>{return isActive ? "Home page " :" Home"}}</NavLink>
  <NavLink to='/books'  >Books</NavLink>
  </>;
};
