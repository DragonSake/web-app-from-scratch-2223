var data;
var counter = 0;
function fetchData (){
    const url = "https://type.fit/api/quotes"

    fetch(url)
                    .then(response => response.json())
                    .then(val => {
                        prevnext(val)
                        data = val;
                        })
    }

const h2 = document.querySelector('h2')
const p = document.querySelector('p')

const vorige = document.querySelector('button:first-of-type')
const random = document.querySelector('li:nth-of-type(2) button')
const next = document.querySelector('li:nth-of-type(3) button')
    
function prevnext(data) {
    const quote = data[counter].text
    const naam = data[counter].author

    console.log(data)

    h2.textContent = `${quote} `;
    p.textContent =  `~ ${naam} `;
}

fetchData();

vorige.addEventListener("click", function() {
    console.log(next);

    counter--;
    
    prevnext(data);
});

next.addEventListener("click", function() {
    console.log(next);
    
    counter++;
    
    prevnext(data);
});

random.addEventListener("click", function() {
    console.log(random);

});
