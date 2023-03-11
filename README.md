# Web App From Scratch @cmda-minor-web 2022 - 2023

https://dragonsake.github.io/web-app-from-scratch-2223/spa/

![Webw5](https://user-images.githubusercontent.com/40611000/224275146-19f5494b-ad0f-4e8e-8621-42406bd54646.PNG)

***

## Table of contents

* Installation
* Features
* API
* Checklist
* License

***

<!-- How about a section that describes how to install this project? 🤓 --> 

### Installation

Clone the repository

```
git clone https://https://github.com/DragonSake/web-app-from-scratch-2223.git
```

<!-- ...but how does one use this project? What are its features 🤔 --> 

### Features

<!-- What external data source is featured in your project and what are its properties 🌠 -->

### API

This is the API I used for this quote generator

https://forum.freecodecamp.org/t/free-api-inspirational-quotes-json-with-code-examples/311373 https://type.fit/api/quotes

Here is how I used it in my code

I'm fetching the url with this function which is called fetchData. 

Then I filter the quotes in the array.

```JS
export async function fetchData (){
    const url = "https://type.fit/api/quotes/"

    await fetch(url)

    .then(response => {
        if (!response.ok) {
          throw new Error('404 API NOT FOUND');
        }
        return response.json();
    })

    .then(val => {
        showLoading();
        // setTimeout(function() {
        // }, 200);
        let data = val.filter(quote => quote.text.length < 100);
        data = fixNullAuthor(data);

        prevnext(data);
        lijstje(data);

        hideLoading();
    })

    .catch(error => {
        console.log(error)
        blockquote.textContent = '404 QUOTE NOT FOUND';
        const h2 = document.querySelector('h2')
        h2.textContent = 'NO OTHER QUOTES FOUND';
        hideLoading();
    // is er iets mis met de data ja of nee
        });
} 
```

***

### Checklist

- [X] Fetching data from API
- [x] Show random quotes
- [x] Button next quote
- [x] Button last quote
- [x] Button random quote
- [x] CMD style
- [x] Blank, loading and error state
- [x] Responsive (ish)
- [x] Modules (ish)
- [ ] Filter/search
- [ ] Route
- [ ] Typewriter animation

***

### License

MIT
