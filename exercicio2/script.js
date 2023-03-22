

const arrNumber = [10,5, 32, 7, 6, 0]
const arrString = ["Violeta", "José", "Tadeu", "Aurora"]
const arrBooleans = [true, true, false, true]

//IMPRIMA A QUANTIDADE DE ITENS
console.log (`O arrNumber possui ${arrNumber.length} itens.
O arrString possui ${arrString.length} itens
E o arrBooleans possui ${arrBooleans.length} itens`)

//IMPRIMA O 1º ITEM DO 1º ARAYY, 2º DO 2º E 3º DO 3º
console.log (
`O 1º item do arrNumber é ${arrNumber[0]}
O 2º item do arrString és ${arrString[1]}
O 3º item do arrBoolean é ${arrBooleans[2]}`
)

//VERFIQUE SE UM ITEM ESTA INCLUIDO NO PRIMEIRO E DEPOIS NO TERCEIRO. 
//IMPRIMA O RESULTADO DAS VERIFICAÇÕES. A PRIMEIRA DEVE SER TRUE E A SEGUNDA FALSE
console.log (`No arrNumbar tem o valor "10"? ${arrNumber.includes(10)}
No arrBooleans tem o valor "Beatriz?"${arrBooleans.includes("Beatriz")}`)


//