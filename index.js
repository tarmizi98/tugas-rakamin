// random number
function randomNumberArray(length) {
    const number = [];
    for (let i = 0; i < length; i++) {
        const randomNumber = Math.floor(Math.random() *50) +1
        number.push(randomNumber)
    }
    return number;
}

let hasil = randomNumberArray(100)
console.log(hasil)

//split array
function splitArray(array) {
    const genap = []
    const ganjil = []
    for (let i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            genap.push(array[i])
        }
        else {
            ganjil.push(array[i])
        }
    }
    return [genap, ganjil]
}
let splitArrayDone = splitArray(hasil)
console.log(splitArrayDone)

//min array
function arrayMin(array) {
    let min = array[0]
    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i]
        } 
    }
    return min
}

let arrayGenapMin = arrayMin(splitArrayDone[0])
console.log("array minimal ganjil\t= ", arrayGenapMin)
let arrayGanjilMin = arrayMin( splitArrayDone[1])
console.log("array minimal ganjil\t= ",arrayGanjilMin)

//max array
function arrayMax(array) {
    let max = array[0]
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i]
        } 
    }
    return max
}

let arrayGenapMax = arrayMax(splitArrayDone[0])
console.log("array maximal ganjil\t= ", arrayGenapMax)
let arrayGanjilMax = arrayMax( splitArrayDone[1])
console.log("array maximal ganjil\t= ",arrayGanjilMax)

//total array
function total(array) {
    let total = 0
    for (let i = 0; i < array.length; i++) {
        total += array[i]
    }
    return total
}

let totalGenap = total(splitArrayDone[0])
console.log("total array genap\t= ", totalGenap)
let totalGanjil = total(splitArrayDone[1])
console.log("total array ganjil\t= ", totalGanjil)

//average array
function average(array) {
    return total(array) / array.length
}
let averageGenap = average(splitArrayDone[0])
console.log("rata-rata ganjil\t= ", averageGenap)
let averageGanjil = average(splitArrayDone[1])
console.log("rata-rata ganjil\t= ", averageGanjil)

//perbandingan min
if (arrayGenapMin > arrayGanjilMin) {
    console.log("array genap min lebih besar dari array ganjil min")
}else {
    console.log("array ganjil min lebih besar dari array genap min")
}

//perbandingan max
if (arrayGenapMax > arrayGanjilMax) {
    console.log("array genap max lebih besar dari array ganjil max")
}else {
    console.log("array ganjil max lebih besar dari array genap max")
}

//apakah total sama atau tidak
if (totalGenap === totalGanjil) {
    console.log("total array genap sama dengan total ganjil")
}else {
    console.log("total array genap tidak sama dengan total ganjil")
}

//perbandingan rata-rata
if (averageGenap > averageGanjil) {
    console.log("rata-rata array genap lebih besar dari rata-rata array ganjil")
}else {
    console.log("rata-rata array ganjil lebih besar dari rata-rata array genap")
}