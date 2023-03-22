

const arrNumber = [10,5, 32, 7, 6, 0]
const arrString = ["Violeta", "José", "Tadeu", "Aurora"]
const arrBooleans = [true, true, false, true]

//CRIE TRES NOVOS ARRAYS, CÓPIA DOS ANTERIORES
const arrNumberCopia = arrNumber.slice(0)
const arrayStringCopia = arrString.slice(0)
const arrayBooleansCopia = arrBooleans.slice()

//ADICIONE UM NUMBER NO INICIO DO 1º ARRAY E IMPRIMA O ORIGINAL E A CÓPIA
arrNumberCopia.unshift (2)
console.log(`A cópia do arrNumber ficou assim: ${arrNumberCopia} 
Enquanto o arrNumber original permaneceu assim: ${arrNumber}`)

//REMOVA O ÚLTIMO ITEM DO 2º ARRAY. IMPRIMA O ORIGINAL E A CÓPIA.
arrayStringCopia.pop()
console.log(`A cópia do arrString ficou assim: ${arrayStringCopia} 
Enquanto o arrString original permaneceu assim: ${arrString}`)

//REMOVA O SEGUNDO ITEM DO 3º ARRAY. IMPRIMA ORIGINAL E A CÓPIA
arrayBooleansCopia.splice(1,1)
console.log(`A cópia do arrBooleans ficou assim: ${arrayBooleansCopia} 
Enquanto o arrBooleans original permaneceu assim: ${arrBooleans}`)
