/*
    Write a javaScript program to check two numbers and return true if one of the number is 100 or if the sum of the two numbers is 100.

*/ 

const isEqualTo100 = (a, b) => a === 100 || b === 100 || (a + b) === 100;

console.log(isEqualTo100(100, 0));
console.log(isEqualTo100(0, 100));

console.log(isEqualTo100(10,0))
console.log(isEqualTo100(0,10))

console.log(isEqualTo100(20,80))
console.log(isEqualTo100(50,50))

/* ---------------------------------------------- */

/*
Write Java Script program to get the extension of a filename
*/


const getFileExtension = (str) => str.slice(str.lastIndexOf ('.'));


console.log(getFileExtension('index.html'))
console.log(getFileExtension('webpack.config.js'))


/*

Exercise 3 

Write a JavaScript program to replace every character in a given string with the character following it in the alphabet

*/ 

const moveCharsForward = (str) => str
                                  .split('')
                                  .map(char => String.fromCharCode(char.charCodeAt(0) + 1))
                                  .join('')
console.log(moveCharsForward('abcd'))


/*
Exercise 4:
 write a JavaScript program to get the current date
 Expected Output:
 mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyyy, dd/mm/yyyy

*/


const formatDate = (date = new Date()) => {
    const days = date.getDate() 
    const months = date.getMonth() + 1
    const years = date.getFullYear()
    return ` ${days} / ${months} / ${years} `
}


console.log(formatDate())


/*
Exercicio 5

Create a JavaScript program to create a new string adding "New!" in front of a given string in the given string begins with already then return the original string.
*/

const addNew =  (str) => 
    str.indexOf("New!" ) === 0 ? str:  `New! ${str}`

    console.log(addNew('Offers'))