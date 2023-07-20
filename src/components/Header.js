import React from "react";
//import blogData from "../data/blog";
function Header({name}){
    console.log(name);
    return(
        <header>
            <h1>{name}</h1>
        </header>
    )

}

export default Header;