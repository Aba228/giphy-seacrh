import axios from 'axios'

export async function searchGif(key: string, name: string, searchRandomly: boolean) {
    let response = await axios.get(`http://api.giphy.com/v1/gifs/search?api_key=${encodeURIComponent(key)}&q=${encodeURIComponent(name)}`)
        .then(function (gif) {
            let searched;
            if(searchRandomly) searched = gif.data.data[Math.floor(Math.random() * gif.data.data.length)].url 
            if(!searchRandomly) searched = gif.data.data[0].url
            return searched
        })
        return response
}
