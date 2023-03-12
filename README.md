# Web App From Scratch @cmda-minor-web 2022 - 2023

https://dragonsake.github.io/web-app-from-scratch-2223/spa/

![Webw5](https://user-images.githubusercontent.com/40611000/224275146-19f5494b-ad0f-4e8e-8621-42406bd54646.PNG)

***

# Table of contents

* Installation
* Features
* API
* Checklist
* License

***

## Installation

### Clone the repository

```
git clone https://https://github.com/DragonSake/web-app-from-scratch-2223.git
```

***

## Features

### Generating quote

![image](https://user-images.githubusercontent.com/40611000/224495192-975c8ec2-a09e-4808-80ac-a94c2c6c0571.png)

I'm importing the first quote and author from the API and show it on the website.

```JS
async function fetchData (){
    const url = "https://type.fit/api/quotes/"

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

        data = val.filter(quote => quote.text.length < 100);

        data = fixNullAuthor(data);
        prevnext(data);
        lijstje(data);
        hideLoading();
    })
```

***

### Buttons

![image](https://user-images.githubusercontent.com/40611000/224491526-f8fb9d5d-f035-4d0f-83bf-d190cac498cf.png)

I select the HMTL elements (the 3 buttons) with the first 3 lines and I save them in a constant.

After that I add an eventlistener to it. 

If the button is clicked, perform the function prevnext.

It will also -1, give a random number or add 1 to the counter.

Depending on which button is clicked, the actions are different.

If you click on previous quote, you'll see the previous quote.

If you click on random quote, you'll see a random quote.

And if you click on next quote, you'll see the next quote.

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

The prevnext function

If the counter becomes 1204 and the length of the array is 1203, then the counter changes to 0.

If the counter is less than 0 (when you enter the page and press previous quote), the counter changes to 1202.

The text and name are stored in a constant.

The text and name are saved in blockquote and figcaption.

```JS
import {counter, blockquote, figcaption, setCounterToValue} from './js.js'

export function prevnext(data) {
    if (counter > data.length){
        setCounterToValue(0);
    }else if (counter < 0){
        setCounterToValue(1202);
      }

    const quote = data[counter].text
    const naam = data[counter].author

    blockquote.textContent = `${quote} `;
    figcaption.textContent =  `~ ${naam} `;
```

***

### 10 random quotes generated

![image](https://user-images.githubusercontent.com/40611000/224495213-e68409c7-4668-4845-aef2-db75db3b6db8.png)

This function generates 10 random quotes in a list.

First, I select the id from the HTML.

Then it starts looping 10 times.

After that, it gives a random numbe to the variable counter.

The quote and author are getting saved in a constant.

Then it creates a li element and put the constants quote and naam in the HTML elements h2 and p.

As last, it adds a li to the section.

```JS
export function lijstje(data){
    const section = document.querySelector('#quoten')
    
    for (let i = 0; i < 10; i++) {
        var counter = Math.floor(Math.random() * data.length - 1);
        
        const quote = data[counter].text
        const naam = data[counter].author
    
        const li = document.createElement('li');
        li.innerHTML = `
            <h2>${quote}</h2>
            <p>~${naam}</p>
        `;

        section.appendChild(li);
    }
}
```

## API

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

## Checklist

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
- [ ] Random quote at the beginning on the left (maybe)

***

## License

MIT
