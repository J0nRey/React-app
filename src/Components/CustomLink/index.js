import React from "react";
import {
    NavItem,
    NavLink
} from 'reactstrap'

const CustomLink = props => {
    const { page, text, handler } = props
    return (
        <NavItem >
            <NavLink 
                href="#" 
                data-pages={page} 
                onClick={handler} 
            >{ text }</NavLink>
        </NavItem>
    )
}

export default CustomLink