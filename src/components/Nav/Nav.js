import React, {useState, Fragment} from 'react'
import './Nav.scss'

import Button from './button/Button'
import SlidingDrawer from './SlidingDrawer/SlidingDrawer'

const Nav = () => {    
    const [isOpen, setisOpen] = useState(false)


    return (
        <Fragment>
            <nav>
                <span onClick = {() => setisOpen(!isOpen)}><Button clicked = {isOpen}/></span>
            </nav>
                {isOpen ? <SlidingDrawer/> : null}
        </Fragment>
    )
}

export default Nav