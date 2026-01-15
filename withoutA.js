const someText = "Wonderful, Joyful, Regardless, Massive, Algorithm, simple"

const textWithoutA = someText.match(/\b(?!\w*[Aa])\w{6,}\b/g)

console.log(textWithoutA)
