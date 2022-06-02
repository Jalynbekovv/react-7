
import {NavLink, Link} from "react-router-dom";
import classes from "./header.module.css";


function Header (){
    return(
        <ul className={classes.menu}>
            <li>
                <NavLink to="/" className={classes.link}>Main page</NavLink>
            </li>
            <li>
                <NavLink to="/about" className={classes.link}>About page</NavLink>
            </li>
            <li>
                <NavLink to="/contacts" className={classes.link}>Contacts</NavLink>
            </li>

        </ul>
    )
}

export default Header;