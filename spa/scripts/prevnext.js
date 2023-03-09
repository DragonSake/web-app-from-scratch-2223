import {counter, blockquote, figcaption, setCounterToValue} from './js.js'
// import {counter} from './js.js'
// import {h2} from './js.js'
// import {p} from './js.js'

// import {i} from './js.js'
// import {speed} from './js.js'
// import {txt} from './js.js'

export function prevnext(data) {
    console.log("hoi")
    if (counter > data.length){
        setCounterToValue(0);
    }else if (counter < 0){
        console.log(data.length)
        setCounterToValue(data.length - 1);
    // }else if (i < txt.length) {
    //     txt = h2;
    //     document.getElementById("typewriter").innerHTML += h2.charAt(i);
    //     i++;
    //     setTimeout(typeWriter, speed);
    //     console.log("hoi");
      }

    // Definitely een comment hier
    // if (data[counter].text.length > 100){
    //     setCounterToValue(counter + 1)
    //     prevnext(data);
    //     return;
    // }
    const quote = data[counter].text
    const naam = data[counter].author

    blockquote.textContent = `${quote} `;
    figcaption.textContent =  `~ ${naam} `;
}