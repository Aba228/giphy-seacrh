<div align="center">
  <img src="https://i.gifer.com/3Q6c.gif" /><br>
</div>

## Installation

```
npm i giphy-search
```

### Functions

| Function | Description |
| -------- | ----------- |
| `searchGif` | returns url of the gif, search gifs from name, the second argument is for randomly searching, for example: you want search the gif, and enter "toad" like a first argument. We understand, what lots of gifs include this name, so if you enter "true" like a second argument, function will returns the url of one gif which includes this name. (code example 1)|
| `randomGif` | returns the url of random gif. (code example 2)|

## Examples

Code example 1:
```js
const { gifIt } = require('giphy-search')

let gif = new gifIt("your api key")
gif.randomGif().then((res) => {
    console.log(res)
})
```

Code example 2:
```js
const { gifIt } = require('giphy-search')

let gif = new gifIt("your api key")
gif.searchGif("gif name", true).then((res) => {
    console.log(res)
})
```

### Lib using:
* [axios](https://www.npmjs.com/package/axios)
* [typescript](https://www.npmjs.com/package/typescript)

### Your api key you can get here: https://developers.giphy.com/
