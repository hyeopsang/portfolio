import { useEffect, useState } from "react";
import "./Header.css";
const Header = ({scrollToSection}) => {
   

    return(
        <div className="Header">
            <div className="container">
                <ul>
                    <li onClick={()=>scrollToSection(0)}><a>INTRO</a></li>
                    <li onClick={()=>scrollToSection(1)}><a>ABOUT</a></li>
                    <li onClick={()=>scrollToSection(2)}><a>SKILL</a></li>
                    <li onClick={()=>scrollToSection(3)}><a>PROJECT</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;