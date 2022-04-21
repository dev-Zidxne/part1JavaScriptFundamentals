// /*Switch case practice

// INSENSITIVE INPUT

// tried to make prompt for switch case to be case insensitive example:*/

// const rapper = prompt("Enter your favorite rapper")

// rapper = rapper.toLowerCase(); //makes the varible convert to lowercase to match switch case below.As long as it matches it will output the right thing

// switch (rapper) {
//     case "drake": //this is a switch 
//         console.log("huge fan.")
//         break;
//     case "xxxtentacion":
//         console.log("HUGER FAN.")
// }


// // /*Ternary Operator practice

// const age = 8;

// const sex = age >= 18 ? "You can have sex!" : "You cyah have sex :(";

// console.log(`${age >= 18 ? "You can have sex!" : "You cyah have sex :("}`)


//JavaScript Fundamentals – Part 1

//LECTURE: Values and Variables

const country = "Jamaica"
const continent = "North America"
let population = 3

console.log("", country, "\n", continent, "\n", population)


//LECTURE: Data Types

const isIsland = true
let language = ""


console.log(typeof (isIsland))
console.log(typeof (population))
console.log(typeof (country))
console.log(typeof (language))

//LECTURE: let, const and var

language = "English"

//LECTURE: Basic Operators

const thanosSnapped = population / 2

console.log(thanosSnapped)

population = 3 + 1

console.log(population)


const finlandPop = 6

console.log(population > finlandPop)


const averagePopulation = 33

console.log(population < averagePopulation)


let description = "Jamaica is in North America, and its 3 million people speak English"

console.log(description)


//LECTURE: Strings and Template Literals

description = `${country} is in ${continent}, and its ${population} million people speak ${language}`

console.log(description)

//LECTURE: Taking Decisions: if / else Statements


if (population > averagePopulation) {
    console.log(`${country}'s population is above average`)
} else if (population < averagePopulation) {
    console.log(`${country}'s population is ${averagePopulation - population} million below average`)
}


//LECTURE: Type Conversion and Coercion

'9' - '5'; //4
'19' - '13' + '17'; //617
'19' - '13' + 17; //23
'123' < 57; //false
5 + 6 + '4' + 9 - 4 - 2 // 1143


//LECTURE: Equality Operators: == vs. ===





// const numNeighbours = prompt(
// 'How many neighbour countries does your country have?',
// );


// LATER : This helps us prevent bugs
// const numNeighbours = Number(
//     prompt('How many neighbour countries does your country have?'),
// );
// if (numNeighbours === 1) {
//     console.log('Only 1 border!');
// } else if (numNeighbours > 1) {
//     console.log('More than 1 border');
// } else {
//     console.log('No borders');
// }

// console.log(numNeighbours)


//LECTURE: Logical Operators


if (population < 50 && language === "English" && isIsland !== true) {
    console.log(`You should live in ${country}`)

} else {
    console.log(`${country} does not meet your criteria`)
}

//LECTURE: The switch Statement



switch (language) {
    case "chinese", "manderin": console.log("Most number of native speakers")
        break

    case "spanish": console.log("2nd place in number of native speakers")
        break
    case "hindi": console.log("Number 4")
        break
    case "arabic": console.log("5th most spoken language")
        break
    default: console.log("Great language too :D")
}

//LECTURE: The Conditional (Ternary) Operator

console.log(
    `${country}'s population is ${population > averagePopulation ? "above" : "below"} average`
)