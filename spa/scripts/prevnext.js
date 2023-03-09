import {counter, blockquote, figcaption, setCounterToValue} from './js.js'

export function prevnext(data) {
    let length = data.length;

    if (counter > length){
        setCounterToValue(0);
    }else if (counter < 0){
        setCounterToValue(length - 1);
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