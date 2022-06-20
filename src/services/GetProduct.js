async function GetProduct(asin){
    const URL = `https://api.rainforestapi.com/request?api_key=8284EC0D9F534317A324E8F59DDFD027&type=product&amazon_domain=amazon.es&asin=${asin}`

    const response = await fetch(URL)
    const responseJSON = await response.json()

    const amazon_url = responseJSON.request_metadata.amazon_url
    
    //se podrían poner los comentarios más destacados (top_reviews)
    const {title, brand, categories, images} = responseJSON.product


    return {amazon_url, title, brand, categories, images}
}

export default GetProduct