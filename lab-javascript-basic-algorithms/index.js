// Iteration 1: Names and Input
const hacker1 = "aabaaaab"
const hacker2 = "bbabbb"

/**
 * if (yourCondition) {
 *   your code
 * }
 */
if (hacker1.length > hacker2.length) {
	console.log(
		`The driver has the longest name, it has ${hacker1.length} characters`
	)
} else if (hacker2.length > hacker1.length) {
	console.log(
		`The navigator has the longest name, it has ${hacker2.length} characters`
	)
} else {
	console.log("Same length !")
}

// function sum(a, b) {
// 	if (!a && typeof a !== 'number') {
// 		console.log("Parameter A is needed!")
// 	}
// 	if (!b) {
// 		console.log("Parameter B is needed as well")
// 	}
// 	return a + b
// }

// Iteration 2: Conditionals

// Iteration 3: Loops

let uppercaseName = hacker1.toUpperCase()
let separatedName = uppercaseName.split("").join(" ")
console.log(separatedName)

let spacedUpperName = ""

for (let i = 0; i < hacker1.length; i++) {
	const letter = hacker1[i].toUpperCase()
	// console.log(letter)
	// spacedUpperName = spacedUpperName + letter
	// if (i < hacker1.length - 1) {
	// 	spacedUpperName += letter + " "
	// } else {
	// 	spacedUpperName += letter
	// }
	spacedUpperName += letter + " "
	console.log(spacedUpperName)
}
spacedUpperName = spacedUpperName.trim()

console.log(spacedUpperName)
console.log(hacker2.split("").reverse().join(""))

let reversedName = ""

//
for (let i = hacker2.length - 1; i >= 0; i--) {
	const letter = hacker2[i]
	reversedName += letter
}
console.log(reversedName)

console.log("art".toLowerCase() < "Cat".toLowerCase())

const hacker1Lower = hacker1.toLowerCase()
const hacker2Lower = hacker2.toLowerCase()

if (hacker1Lower < hacker2Lower) {
	console.log(hacker1 + " goes first")
} else if (hacker2Lower < hacker1Lower) {
	console.log(hacker2 + " goes first")
} else {
	// console.log("same names")
}

/**
 * Other way of comparing strings
 */

console.log(hacker1.localeCompare(hacker2, undefined, { sensitivity: "base" }))

// let shortestName = ''

// if (hacker1.length > hacker2.length) {
//   shortestName = hacker2
// } else {
//   shortestName = hacker1
// }

// Unary operator
// typeof 'hello'
// Ternary operator
// let shortestName = condition ? true : false
let shortestName = hacker1.length > hacker2.length ? hacker2 : hacker1
let sameName = true
// Google how to join back string from an Array => join !

for (let i = 0; i < shortestName.length; i++) {
	debugger
	const hacker1Letter = hacker1[i].toLowerCase()
	const hacker2Letter = hacker2[i].toLowerCase()
	if (hacker1Letter < hacker2Letter) {
		console.log(`${hacker1} goes first!`)
		sameName = false
		break
	} else if (hacker2Letter < hacker1Letter) {
		console.log(`${hacker2} goes first!`)
		sameName = false
		break
	}
}

if (sameName) {
	console.log("They have the same name")
}
