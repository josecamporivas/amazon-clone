async function SearchResults(search){
    const URL = `https://api.rainforestapi.com/request?api_key=8284EC0D9F534317A324E8F59DDFD027&type=search&amazon_domain=amazon.es&search_term=${search.replace(/ /g,"+")}`

    const response = await fetch(URL)
    const responseJSON = await response.json()

    return responseJSON.search_results
}

export default SearchResults