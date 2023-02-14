function fetchData (){
    const url = "https://type.fit/api/quotes"

    const data = fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        changeH2(data)
                        })
    }
    
    function changeH2(data) {
        const quote = data[0].text
        const naam = data[0].author

        const h2 = document.querySelector('h2')
        const p = document.querySelector('p')

        console.log(data)
        h2.insertAdjacentHTML('beforeend', `${quote} `)
        p.insertAdjacentHTML('beforeend', `&mdash;  ${naam} `)
    }

    fetchData();