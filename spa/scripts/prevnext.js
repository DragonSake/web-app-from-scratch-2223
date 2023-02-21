import {data} from './js.js'
import {counter} from './js.js'
import {h2} from './js.js'
import {p} from './js.js'

// import {i} from './js.js'
// import {speed} from './js.js'
// import {txt} from './js.js'

export function prevnext(data) {
    if (counter > 1642){
        counter = 0;
    }else if (counter < 0){
        counter = 1642;
    // }else if (i < txt.length) {
    //     txt = h2;
    //     document.getElementById("typewriter").innerHTML += h2.charAt(i);
    //     i++;
    //     setTimeout(typeWriter, speed);
    //     console.log("hoi");
      }

    const quote = data[counter].text
    const naam = data[counter].author

    h2.textContent = `${quote} `;
    p.textContent =  `~ ${naam} `;

    if (data[counter].author == null){
        p.textContent =  `~ ${'Onbekend'} `;
    }
}