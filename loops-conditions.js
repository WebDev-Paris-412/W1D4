// if
// else if
// else
// ternary

// switch

const catName = "Loop"

switch (catName) {
	case "Loop":
		console.log("Hi Loop !")
		break
	case "Illiu":
		console.log("Hey cat :)")
		break
	default:
		console.log("A cat with no name :(")
}

const seconds = 5
switch (seconds) {
	case 10:
		console.log("10...")
	case 9:
		console.log("9...")
	case 8:
		console.log("8...")
	case 7:
		console.log("7...")
	case 6:
		console.log("6...")
	case 5:
		console.log("5...")
	case 4:
		console.log("4...")
	case 3:
		console.log("3...")
	case 2:
		console.log("2...")
	case 1:
		console.log("1...")
	default:
		console.log("Liftoff !")
}

/**
 *
 * for (initialisation; condition; mutate initial value) {
 *
 * }
 */

const dayOfTheWeek = ["Monday", "Tuesday", "Wednesday"]

for (let i = 0; i < dayOfTheWeek.length; i += 2) {
	const day = dayOfTheWeek[i]
	console.log(day)
}

// console.log(dayOfTheWeek.lenght)

for (let currentDay of dayOfTheWeek) {
	console.log("In the for of loop: ", currentDay)
}

const arrayOfNumbers = [5, -100, 25, -72]

/**
 * get the first element as our biggest number (index 0)
 * Iteratively compare it the next one(s)
 * If the next one (a) is bigger than the current biggest number
 *    Then the biggest nunbers need to become "a"
 */

let biggestNumber = -Infinity

for (let i = 0; i < arrayOfNumbers.length; i++) {
	const currentNumber = arrayOfNumbers[i]
	if (currentNumber > biggestNumber) {
		biggestNumber = currentNumber
	}
}

console.log(biggestNumber)

let lowestNumber = Infinity

for (const currentNumber of arrayOfNumbers) {
	if (currentNumber < lowestNumber) {
		lowestNumber = currentNumber
	}
}

console.log(lowestNumber)

// Sum

let sum = 0

for (const number of arrayOfNumbers) {
	sum += number
}
console.log(sum)

const smallMatrix = [
	["raclette", 2, 4], //     0
	// 0  1   2
	[1, "potatoes", 3], //  1
	// 0    1    2
	[5, 2, "cheese"], //     2
	// 0   1   2
]

console.log(smallMatrix[2][1])

let biggestNumInMatrix = -Infinity

for (let row = 0; row < smallMatrix.length; row++) {
	const nestedArray = smallMatrix[row]
	// console.log(nestedArray)
	for (let i = 0; i < nestedArray.length; i++) {
		const currentElement = nestedArray[i]

		let localMax =
			typeof currentElement === "string"
				? currentElement.length
				: currentElement

		// if (typeof currentElement === "string") {
		// 	localMax = currentElement.length
		// } else {
		// 	localMax = currentElement
		// }
		if (localMax > biggestNumInMatrix) {
			biggestNumInMatrix = localMax
		}

		// if (typeof currentElement === "string") {
		// 	if (currentElement.length > biggestNumInMatrix) {
		// 		biggestNumInMatrix = currentElement.length
		// 	}
		// } else {
		// 	if (currentElement > biggestNumInMatrix) {
		// 		biggestNumInMatrix = currentElement
		// 	}
		// }
	}
}

console.log(biggestNumInMatrix)
