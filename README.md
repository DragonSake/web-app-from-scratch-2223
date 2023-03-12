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

### Installation

Clone the repository

```
git clone https://https://github.com/DragonSake/web-app-from-scratch-2223.git
```

***

### Features

Generating quote

I'm importing the quote and author from the API and show it on the website.

This is the code

```JS
async function fetchData (){
    const url = "https://type.fit/api/quotes/"

    // Wacht totdat de url is gefetcht
    await fetch(url)
    .then(response => {
        if (!response.ok) { // Als de status okay is
          throw new Error('404 API NOT FOUND');
        }
        return response.json();
    })

    .then(val => {
        // Voert de functie uit
        showLoading();

        // Verandert de data in de array die gefilterd is met de array die 99 of minder karakters heeft
        data = val.filter(quote => quote.text.length < 100);

        // Definieert de data met de array waarin alle null is veranderd naar onbekend
        data = fixNullAuthor(data);
        // Voert de functie uit
        prevnext(data);
        lijstje(data);
        hideLoading();
    })
```

![image](https://user-images.githubusercontent.com/40611000/224495192-975c8ec2-a09e-4808-80ac-a94c2c6c0571.png)

***
Buttons

I import the HMTL elements with the first 

![image](https://user-images.githubusercontent.com/40611000/224491526-f8fb9d5d-f035-4d0f-83bf-d190cac498cf.png)

***

10 random quotes generated

![image](https://user-images.githubusercontent.com/40611000/224495213-e68409c7-4668-4845-aef2-db75db3b6db8.png)

```JS
const vorige = document.querySelector('button:first-of-type')
const random = document.querySelector('li:nth-of-type(2) button')
const next = document.querySelector('li:nth-of-type(3) button')

vorige.addEventListener("click", function() {
    counter--;
    prevnext(data);
});

next.addEventListener("click", function() {
    counter++;
    prevnext(data);
});

random.addEventListener("click", function() {
    counter = Math.floor(Math.random() * 1203);
    prevnext(data);
});
```

***

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
