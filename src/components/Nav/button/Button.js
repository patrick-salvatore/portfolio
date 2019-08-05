import React, {useState} from 'react'

import './Button.scss'

const Button = ({clicked}) => {
    return (
        <div id = 'nav-icon' className = {clicked ? 'open': null} >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

export default Button