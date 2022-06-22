import logoAmazon from '../../resources/logoAmazonWhite.png'
import deleteIcon from '../../resources/deleteIcon.png'
import './Navbar.css'

import Location from '../../components/Location/Location'
import NavSearch from '../NavSearch/NavSearch'
import Cart from '../Cart/Cart'
import Sidebar from '../Sidebar/Sidebar'

import { useState } from 'react'

export default function Navbar(){
    const NAVBAR_BOTTOM_ITEMS = ["Best Sellers", "Latest News", "Offers", "Amazon Basics", "Books", "Beauty", "Electronics"]

    const [openSidebar, setOpenSidebar] = useState(false)

    const handdleSidebarOpen = (e) => {
        e.preventDefault()
        setOpenSidebar(!openSidebar)
    }
    return(
        <div id='navbar'>
            {openSidebar?
            <>
                <Sidebar />
                <img onClick={handdleSidebarOpen} src={deleteIcon} id='button-close-sidebar' alt='button-close-sidebar' />
            </>
            : ''}
            <div id='navbar-top'>
                <img src={logoAmazon} alt='logo-amazon' id='logoAmazon' />
                <Location />
                <NavSearch />
                {/* language picker, */}
                <Cart />
            </div>
            <div id='navbar-bottom'>
                <p id={`sidebar-button ${openSidebar? 'openSidebar': ''}`} onClick={handdleSidebarOpen}>
                    &#9776; Todo
                </p>
                {NAVBAR_BOTTOM_ITEMS.map(elem => {
                    return <a key={elem} href={`#${elem}`} id={elem}>{elem}</a>
                })}
            </div>
        </div>
    )
}