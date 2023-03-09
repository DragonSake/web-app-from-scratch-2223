export function fixNullAuthor(onbekend){
    return onbekend.map(val => {
        if (val.author == null){
            val.author = 'Onbekend';
        }
        return val;
    })
}