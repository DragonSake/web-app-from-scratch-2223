import { prevnext } from "./prevnext.js";
import { fetchData } from "./fetch.js";

export let data;
export let counter = 0;

export function setCounterToValue(value) {
    counter = value;
}
    
export const blockquote = document.querySelector('blockquote')
export const figcaption = document.querySelector('figcaption')

const vorige = document.querySelector('button:first-of-type')
const random = document.querySelector('li:nth-of-type(2) button')
const next = document.querySelector('li:nth-of-type(3) button')

// export var i = 0;
// export var speed = 50;
// export var txt = 'Lorem ipsum typing effect!';

await fetchData();

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



// export async function quoteData(id){
//     const url="https://type.fit/api/quotes/$(id)";

//     const data = await fetch(url);
//     const {data} = await data.json
// }

// handleRoutes();

// function handleRoutes() {
//     routie(
//       {
//         '': () => {
//             fetchData();
//         },
//       'details/:id': (id) => {
//         artData(id)
//         console.log(id);
      
//     }})
// }