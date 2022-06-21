import logoAmazon from '../../resources/logoAmazonWhite.png'
import './Navbar.css'

import Location from '../../components/Location/Location'
import NavSearch from '../NavSearch/NavSearch'
import Cart from '../Cart/Cart'

export default function Navbar(){
    const NAVBAR_BOTTOM_ITEMS = ["Best Sellers", "Latest News", "Offers", "Amazon Basics", "Books", "Beauty", "Electronics"]

    return(
        <div id='navbar'>
            <div id='navbar-top'>
                <img src={logoAmazon} alt='logo-amazon' id='logoAmazon' />
                <Location />
                <NavSearch />
                {/* language picker, */}
                <Cart />
            </div>
            <div id='navbar-bottom'>
                {/* sidebar */}
                {NAVBAR_BOTTOM_ITEMS.map(elem => {
                    return <a href={`#${elem}`} id={elem}>{elem}</a>
                })}
            </div>
        </div>
    )
}