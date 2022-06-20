import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './NavSearch.css'

import lensIcon from '../../resources/lensIcon.png'

export default function NavSearch(){
    const [search, setSearch] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        navigate(`/search/${search}`)
    }

    const handleChange = (event) => {
        setSearch(event.target.value)
    }

    return (
        <form onSubmit={handleSubmit} id='form-searcher' >
            <input type='text' placeholder="search a item..." onChange={handleChange} id='input-searcher'/>
            <input type='image' src={lensIcon} id='submit-searcher' alt='image-searcher' value='' />
        </form>
    )
}