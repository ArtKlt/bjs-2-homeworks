function getArrayParams(...arr) {
	let max = arr[0]
	let min = arr[0]
	let Sum = 0
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i]
		}
		if (arr[i] < min) {
			min = arr[i]
		}
		Sum = Sum + arr[i]
	}
	avg = Sum / arr.length
	avg = parseFloat(Number.parseFloat(avg).toFixed(2))
	return {
		min: min,
		max: max,
		avg: avg
	};
}
console.log(getArrayParams(-99, 99, 10))
console.log(getArrayParams(1, 2, 3, -100, 10))
console.log(getArrayParams(5))

function summElementsWorker(...arr) {
	let Sum = 0
	for (let i = 0; i < arr.length; i++) {
		Sum = Sum + arr[i]
	}
	return Sum
}

console.log(summElementsWorker(1, 2, 3, -100, 10))

function differenceMaxMinWorker(...arr) {
	let max = arr[0]
	let min = arr[0]
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i]
		}
		if (arr[i] < min) {
			min = arr[i]
		}
	}
	if (arr.length === 0) {
		return (0)
	} else {
		return (Math.abs(min - max))
	}
}

console.log(differenceMaxMinWorker(1, 2, 3, -100, 10))
console.log(differenceMaxMinWorker())
console.log(differenceMaxMinWorker(5))

function differenceEvenOddWorker(...arr) {
	let sumEvenElement = 0
	let sumOddElement = 0
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement = sumEvenElement + arr[i]
		} else {
			sumOddElement = sumOddElement + arr[i]
		}
	}
	console.log(sumEvenElement)
	console.log(sumOddElement)
	return (sumEvenElement - sumOddElement)
}
console.log(differenceEvenOddWorker(1, 2, 3, 4, 5, 6, 7, 8, 9))

function averageEvenElementsWorker(...arr) {
	let sumEvenElement = 0
	let countEvenElement = 0
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement = sumEvenElement + arr[i]
			countEvenElement = countEvenElement + 1
		}
	}
	let avg = sumEvenElement / countEvenElement
	if (arr.length === 0) {
		return (0)
	} else {
		return (avg)
	}
}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity
	for (let i = 0; i < arrOfArr.length; i++) {
		if (func(...arrOfArr[i]) > maxWorkerResult) {
			maxWorkerResult = func(...arrOfArr[i])
		}

	}
	return (maxWorkerResult)
}