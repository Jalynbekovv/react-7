import {NavLink, Link} from "react-router-dom";
import classes from "./footer.module.css";


function Footer (){
    return(
        <ul className={classes.main}>
            <li>
                <NavLink to="/phone" className={classes.link}>Phone</NavLink>
            </li>
            <li>
                <NavLink to="/address" className={classes.link}>Address</NavLink>
            </li>
            <li>
                <NavLink to="/mail" className={classes.link}>E-mail</NavLink>
            </li>

        </ul>
    )
}

export default Footer;