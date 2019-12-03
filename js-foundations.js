// ASSESSMENT 2: JAVASCRIPT FOUNDATIONS
// Coding practical questions

// 1. Write a function that takes a number as an argument and decides if the number is evenly divisble by three or not. Use the test cases 15, 0, 385, -7. Expected output: "15 is divisible by three", "0 is divisible by three", "385 is not divisble by three", "-7 is not divisble by three".


var evenDivider = (number) =>{
    if( number%3 === 0 ){
        return `${number} is evenly divisible by 3`
        } else {
        return `${number} is not evenly divisible by 3`
    }
}

console.log(evenDivider(15))
console.log(evenDivider(0))
console.log(evenDivider(385))
console.log(evenDivider(-7))





// 2. Create an object called helloMe. Include your firstName, lastName and TWO OTHER properties of you. Add a method to your object that will return a sentence using the object properties to describe you.

var helloMe = {
    firstName : "ernesto" ,
    lastName : "godoy",
    phoneNumber :0123456789,
    address : "1234 sesame st" ,
    getData: function(){
        return this.firstName + " " + this.lastName + " lives on " + this.address + "." + " His phone number is " + this.phoneNumber +"." 
        
    }
}

console.log(helloMe.getData())


// ------------------------------------- Consider the variable:

var randomNouns = ["streetlamp", "potato", "teeth", "conclusion", "nephew", "temperature", "database"]

// 3a. Write a function that returns every other item from the array as one string. Expected output: "streetlamp teeth nephew database"


let everyOther = randomNouns.filter((value, index)=>{
    return index%2 === 0
})

console.log(everyOther.join(" "))


// 3b. Create a function that takes in the variable and returns the array with all the words capitalized. Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew", "Temperature", "Database"]


let firstCap = randomNouns.map((value,index)=>{
    return value.charAt(0).toUpperCase() + value.slice(1)
})

console.log(firstCap)



// 3c. STRETCH: Create a function that returns the length of each string from the randomNouns variable. Expected output: [10, 6, 5, 10, 6, 11, 8]


let stringLength = randomNouns.map((value, index) =>{
    return value.length
})

console.log(stringLength)

// -------------------------------------- Consider the variables:
var testString1 = "learn"
var testString2 = "academy"
var testString3 = "sandiego"

// 4a. Write a function called alphabetSoup that takes one argument and returns a string with all the letters in alphabetical order. Use each of the varibales as test cases. Expected output: "aelnr" "aacdemy" "adeginos"

let alphabetSoup = (string) =>{
    var newArr = string.split("")
    var sortArr = newArr.sort()
    return sortArr.join("")
    
  
}

console.log(alphabetSoup(testString1))
console.log(alphabetSoup(testString2))
console.log(alphabetSoup(testString3))


// 4b. Write a function that takes in all three variables and returns a string with all the letters in alphabetical order. Expected output: "aaaacddeeegilmnnorsy"


var bigArray = [...testString1, ...testString2, ...testString3]




let bigAlphabet = (array) =>{
    var sortArr = array.sort()
    return sortArr.join("")
    
}


console.log(bigAlphabet(bigArray))




// ------------------------------------- Consider the variables:
var amounts = [9, 1, 8, 16, 5, 1, 42]
var animals = ["ducks", "elephants", "pangolins", "zebras", "giraffes", "penguins", "llamas"]

// 5a. Write a function that takes the two variables and returns a combined string. Expected output: "9 ducks 1 elephants 8 pangolins 16 zebras 5 giraffes 1 penguins 42 llamas"


var animalAmounts = amounts.map(function(value, index) {
  return value + " "  + animals[index] 
})

console.log(animalAmounts.join(" "))


// 5b. STRETCH: Create a function that combines the two variables and updates the animal to be singular if the animal's corresponding number is 1. Expected output: "9 ducks 1 elephant 8 pangolins 16 zebras 5 giraffes 1 penguin 42 llamas"




// var newAnimalAmounts = animalAmounts.map((value, index)=>{
//     if( value.charAt(0) === "1" && value.endsWith("s") === true){
//         return value.slice(0, -1 ) 
//     }
// })


// console.log (newAnimalAmounts)

