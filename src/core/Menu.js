import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
    return(
        <div>
            <ul className="nav nav-tabs bg-primary">
                <li className="nav-item">
                    <Link
                        className="nav-link"
                        style={{color: "#ffffff"}}
                        to="/"
                    >
                        Home
                    </Link>
                    
                </li>
            </ul>
        </div>
    )
}
export default Menu;