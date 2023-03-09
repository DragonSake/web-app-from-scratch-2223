// 4 quotes worden ingeladen
export function lijstje(data){
    const section = document.querySelector('#quoten')

for (let i = 1; i < 6; i++) {
    var counter = Math.floor(Math.random() * data.length - 1);
    const quote = data[counter].text
    const naam = data[counter].author

    const li = document.createElement('li');
    li.innerHTML = `
        <h2>${quote}</h2>
        <p>~${naam}</p>
        </a>
    `;
    section.appendChild(li);
}
// <a href="#details/${data.text}">View
}