import './Location.css'
import locationIcon from '../../resources/locationIconWhite.png'

export default function Location(){
    return (
        <div id="location-navbar">
            <img src={locationIcon} alt='location-icon' id='locationIcon'/>
            <div id='containerTextLocation'>
                <span id='upper-text'>Deliver to</span>
                <span id='lower-text'>Your ubication</span>
            </div>
        </div>
    )
}