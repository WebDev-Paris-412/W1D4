/**
 * function declaration !!!
 */

function sayHi(nameOfThePerson) {
	// const newName = "Julien"
	// console.log(nameOfThePerson)
	return `Hi ${nameOfThePerson}!`
}

/**
 *
 * @param {number} a This is the first number
 * @param {number} b This is the second number
 * @returns {number} The sum
 */
function sum(a, b) {
	return a + b
}

const greetingToJulien = sayHi("Samara")
console.log(greetingToJulien)
const total = sum(2, 7)
console.log(total)

const bob = {
	name: "Bob",
	lastName: "Doe",
	address: {
		city: "Bob city",
	},
}
/**
 *
 * @param {object} userObject
 * @property {
 * @returns
 */
function displayUserInfos(userObject) {
	console.log(userObject)
	return `${userObject.name} ${userObject.lastName} lives in ${userObject.address.city}`
}

const infos = displayUserInfos({
	name: "Alice",
	lastName: "Doe",
	address: { city: "Paris" },
})

console.log(infos)

const students = [
	{
		name: "Bob",
		age: 40,
	},
	{
		name: "John",
		age: 46,
	},
	{
		name: "Alice",
		age: 29,
	},
	{
		name: "Toto",
		age: 32,
	},
]

const otherStudents = [
	{
		name: "Bob",
		age: 50,
	},
	{
		name: "John",
		age: 56,
	},
	{
		name: "Alice",
		age: 79,
	},
	{
		name: "Toto",
		age: 432,
	},
]

function sumOfAge(arrayOfStudents) {
	let sum = 0
	for (const student of arrayOfStudents) {
		sum += student.age
	}
	return sum
}

function averageAgeOfStudents(arrayOfStudents) {
	// console.log(arrayOfStudents)
	// let sum = 0
	// for (const student of arrayOfStudents) {
	// 	sum += student.age
	// }
	if (!arrayOfStudents) {
		throw Error("Should provide an Array of students as argument")
	}
	if (!arrayOfStudents.length) {
		return null
	}
	const sum = sumOfAge(arrayOfStudents)
	return sum / arrayOfStudents.length
}

console.log(averageAgeOfStudents(students))
console.log(averageAgeOfStudents(otherStudents))
console.log(averageAgeOfStudents([]))
console.log(averageAgeOfStudents())
