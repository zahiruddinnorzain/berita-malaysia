# Berita Malaysia

## Requirements
Add cdn for `Jquery` and `berita-malaysia` in head tag.
```
<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
<script src="https://cdn.jsdelivr.net/gh/zahiruddinnorzain/berita-malaysia/berita-malaysia.js"></script>
```

## Tutorial
Write this in javascript
#### First method
```
$(async function () {
    var news_data = await berita_malaysia('awani')
    console.log(news_data);
})
``` 

#### Second method
```
$(document).ready(async function(){
    var news_data = await berita_malaysia('awani')
    console.log(news_data);
});
```

you can get news in `news_data` variable.

## Credit
@zahiruddinnorzain
@mohamadarifin97