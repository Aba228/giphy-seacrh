import { searchGif } from './searchGif'
import { randomGif } from './randomGif'

export class gifIt{
    key: string;
    constructor(key: string) {
        this.key = key
    }

    searchGif(name: string, searchRandomly: boolean){
        return searchGif(this.key, name, searchRandomly)
    }

    randomGif(){
       return randomGif(this.key)
    }
}