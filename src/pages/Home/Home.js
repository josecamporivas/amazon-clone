import './Home.css'

import Navbar from '../../components/Navbar/Navbar'

/*import SearchResults from '../../services/SearchResults'
 import { useEffect } from 'react' */
export default function Home(){
    
    /* useEffect(() => {
        SearchResults("memory card").then(data => console.log(data))
        
    }) */
    return (
        <div id="home">
            <Navbar />
        </div>
    )
}