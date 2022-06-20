import logoAmazon from '../../resources/logoAmazonWhite.png'
import './Navbar.css'

import Location from '../../components/Location/Location'
import NavSearch from '../NavSearch/NavSearch'
import Cart from '../Cart/Cart'

export default function Navbar(){
    return(
        <div id='navbar'>
            <img src={logoAmazon} alt='logo-amazon' id='logoAmazon' />
            <Location />
            <NavSearch />
            {/* language picker, */}
            <Cart />
            {/* sidebar and different topics */}
        </div>

    )
}