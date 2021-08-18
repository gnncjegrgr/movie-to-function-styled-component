import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

const NavDefault = styled.div`
    position: fixed;
    top: 50px;
    left:10px;
    display : flex;
    flex-direction:column;
    background-color : white;
    padding : 10px 20px;
    box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.5),
    0 8px 16px -8px rgba(0, 0, 0, 0.5), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
    border-radius: 5px;
    `;

const NavLink = styled(Link)`
    text-decoration: none;
    color : #0008fc;
    text-transform: uppercase;
    font-size: 12px;
    text-align: center;
    font-weight: 600;
`;



function Navigation(){
    return(
        <NavDefault>
            <NavLink to= "/">Home</NavLink>
            <hr></hr>
            <NavLink to = "/about">About</NavLink>
        </NavDefault>
    )
}

export default Navigation;