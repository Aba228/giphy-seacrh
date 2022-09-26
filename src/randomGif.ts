import axios from 'axios'

export async function randomGif(key: string) {
    let response = await axios.get(`http://api.giphy.com/v1/gifs/random?api_key=${encodeURIComponent(key)}`)
    return response.data.data.url
}