export function fixNullAuthor(onbekend){
    return onbekend.map(val => {
        if (val.author == null){
            val.author = 'Onbekend';
        }
        return val;
    })
}

// Checkt in de array of er authors zijn met de value null en vervangt die met onbekend.
// Vervolgens returnt hij de nieuwe array 