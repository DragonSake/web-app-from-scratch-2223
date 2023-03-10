// import { prevnext } from "./prevnext.js";
// import { showLoading } from "./showloading.js";
// import { hideLoading } from "./hideloading.js";
// import { fixNullAuthor } from "./fixnullauthor.js";
// import { lijstje } from "./lijstje.js";
// import { blockquote} from './js.js'

// // export async function fetchData (){
// //     const url = "https://type.fit/api/quotes/"
// //     await fetch(url)
// //     .then(response => {
// //         if (!response.ok) {
// //           throw new Error('404 API NOT FOUND');
// //         }
// //         return response.json();
// //     })

// //     .then(val => {
// //         showLoading();
// //         // setTimeout(function() {
// //         // }, 200);
// //         let data = val.filter(quote => quote.text.length < 100);
// //         data = fixNullAuthor(data);

// //         prevnext(data);
// //         lijstje(data);
// //         hideLoading();
// //     })
        
// //     .catch(error => {
// //         console.log(error)
// //         blockquote.textContent = '404 QUOTE NOT FOUND';
// //         const h2 = document.querySelector('h2')
// //         h2.textContent = 'NO OTHER QUOTES FOUND';
// //         hideLoading();
// //         });
// // }      