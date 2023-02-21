import { prevnext } from "./func.js";

export let data;
export let counter = 0;
    
export const h2 = document.querySelector('blockquote')
export const p = document.querySelector('figcaption')

const vorige = document.querySelector('button:first-of-type')
const random = document.querySelector('li:nth-of-type(2) button')
const next = document.querySelector('li:nth-of-type(3) button')

// export var i = 0;
// export var speed = 50;
// export var txt = 'Lorem ipsum typing effect!';

function fetchData (){
    const url = "https://type.fit/api/quotes"

    fetch(url)
                    .then(response => response.json())
                    .then(val => {
                        prevnext(val)
                        data = val;
                        })
    }

fetchData();

vorige.addEventListener("click", function() {
    counter--;
    prevnext(data);
});

next.addEventListener("click", function() {
    counter++;
    prevnext(data);
});

random.addEventListener("click", function() {
    counter = Math.floor(Math.random() * 1642);
    prevnext(data);
});

