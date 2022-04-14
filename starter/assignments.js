// //LECTURE: Values and Variables

// /*1. Declare variables called 'country', 'continent' and 'population' and
// assign their values according to your own country (population in millions)*/

const country = "Jamaica";
// const continent = "North America";
let population = 2984005;

// // 2. Log their values to the console

// console.log(country, continent, population)



// //LECTURE: Data Types

// /*1. Declare a variable called 'isIsland' and set its value according to your country. The variable should hold a Boolean value. 

// /*Also declare a variable 'language', but don't assign it any value yet*/

const isIsland = true;
let myCountryLanguage;

/* 2. Log the types of 'isIsland', 'population', 'country' and 'language'
to the console*/
console.log(typeof isIsland);
console.log(typeof continent);
console.log(typeof population);
console.log(typeof myCountryLanguage);




// /* LECTURE: let, const and var*/

// /*1. Set the value of 'language' to the language spoken where you live (some
// countries have multiple languages, but just choose one) */
// myCountryLanguage = "English"
// /*
// 2. Think about which variables should be const variables (which values will never change, and which might change?). Then, change these variables to const.

// 3. Try to change one of the changed variables now, and observe what happens*/

/* LECTURE: Basic Operators*/

/*1. If your country split in half, and each half would contain half the population,
then how many people would live in each half?*/
console.log(population / 2)

/*. Increase the population of your country by 1 and log the result to the console*/
console.log(population + 1)

/* 3. Finland has a population of 6 million. Does your country have more people than
Finland?*/
let finlandPop = 6000000
console.log(population > finlandPop)


/* 4. The average population of a country is 33 million people. Does your country have less people than the average country?*/

averagePop = 33000000;

console.log(population < averagePop)

/* 5. Based on the variables you created, create a new variable 'description' which contains a string with this format: 'Portugal is in Europe, and its 11 million
people speak portuguese'*/

const description = "Portugal is in Europe, and its 11 million people speak portuguese";



// /*LECTURE: Strings and Template Literals

1. Recreate the 'description' variable from the last assignment, this time using the template literal syntax * /

const description2 = `${country} is in ${continent}, and its ${population} people speak ${myCountryLanguage}`;

console.log(description2)



/* LECTURE: Taking Decisions: if / else Statements*/

if (population > averagePop) { console.log(`${country}'s population is above average`) } else belowAverage = (averagePop - population / 2); {
    console.log(`${country}'s population is ${belowAverage} below average `)
}

//----------------------------------------------------------------------------------

// /* LECTURE: Type Conversion and Coercion*/

// + turns numbers into strings || - turns strings into numbers

console.log("9" - "5") // 4
console.log('19' - '13' + '17');// 617 (19-13=6 + 17 = 617)
console.log("19" - "13" + 17)// 23 (19-13=6 + 17 = 23)
console.log("123" < 57);// false
console.log(5 + 6 + "4" + 9 - 4 - 2)// 1143 (5+6=11 + 4 + 9 = 1149 -4-2 = 1143)

//-------------------------------------------------------------------------------

// /* LECTURE: Equality Operators: == vs. === */

// /* 1. Declare a variable 'numNeighbours' based on a prompt input like this:
// prompt('How many neighbour countries does your country
// have?');*/

const numNeighbour = Number(prompt("How many neighbours countries does your country have?"));

/*2. If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality
== for now) */


if (numNeighbour === 1) {
    console.log("Only 1 border!");
    /*3. Use an else-if block to log 'More than 1 border' in case 'numNeighbours' is greater than 1 */
} else if (numNeighbour > 1) {
    console.log("More than 1 border")

    /*4. Use an else block to log 'No borders' (this block will be executed when
    'numNeighbours' is 0 or any other value)*/
} else
    console.log("No borders")

//-------------------------------------------------------------------------------

//LECTURE: Logical Operators

/*2. Let's say Sarah is looking for a new country to live in. She wants to live in a
country that speaks english, has less than 50 million people and is not an
island.*/

/*const sarahLanguage = ("English" === myCountryLanguage)
const sarahRequiredPop = (population < 50000000)
const sarahIsland = !isIsland

console.log(sarahLanguage && sarahRequiredPop && sarahIsland);*/

/*3. Write an if statement to help Sarah figure out if your country is right for her. You will need to write a condition that accounts for all of Sarah's criteria. Take your time with this, and check part of the solution if necessary.

4. If yours is the right country, log a string like this: 'You should live in Portugal :)'. If
not, log 'Portugal does not meet your criteria :('*/

if (sarahLanguage && sarahRequiredPop && sarahIsland) {
    console.log(`You should live in ${country} :)`)
} else { console.log(`${country} does not meet your criteria :(`) };

// /*5. Probably your country does not meet all the criteria. So go back and temporarily
// change some variables in order to make the condition true (unless you live in Canada :D)*/

const sarahLanguage = ("English" === myCountryLanguage)
const sarahRequiredPop = (population < 50000000)
const sarahIsland = isIsland // removed "!" logical NOT operator to make it true that Jamaica is an island again.

console.log(sarahLanguage && sarahRequiredPop && sarahIsland);

if (sarahLanguage && sarahRequiredPop && sarahIsland) {
    console.log(`You should live in ${country} :)`)
} else { console.log(`${country} does not meet your criteria :(`) };

/*LECTURE: The switch Statement------------------------------------

1. Use a switch statement to log the following string for the given 'language':chinese or mandarin: 'MOST number of native speakers!'spanish: '2nd place in number of native speakers'english: '3rd place'hindi: 'Number 4'arabic: '5th most spoken language'or all other simply log 'Great language too :D'*/

const language = "manderin"

switch (language) {
    case "manderin":
        console.log("Most number of native speakers")
        break;
    case "spanish":
        console.log("2nd place in number of native speakers")
        break;
    case "English":
        console.log("3rd place")
        break;
    case "hindi":
        console.log("Number 4")
        break;
    case "arabic":
        console.log("5th most spoken language")
        break;

    default:
        console.log("Great language too :D")

}
/*LECTURE: The Conditional (Ternary) Operator
1. If your country's population is greater than 33 million, use the ternary operator
to log a string like this to the console: 'Portugal's population is above average'.
Otherwise, simply log 'Portugal's population is below average'. Notice how only
one word changes between these two sentences!*/


population > averagePop ? console.log(`${country}'s populations is above average`) : console.log(`${country}'s populations is below average`)

const greaterthan33 = population > averagePop ? `${country}'s populations is above average` : `${country}'s populations is below average`;
console.log(greaterthan33)

console.log(`${population > averagePop ? `${country}'s populations is above average` : `${country}'s populations is below average`}`)

