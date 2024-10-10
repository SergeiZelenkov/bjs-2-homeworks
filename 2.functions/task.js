function getArrayParams(...arr) {
	let min = arr[0];
	let max = arr[0];
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		}
		if (arr[i] < min) {
			min = arr[i];
		}
		sum += arr[i];
	}

	let avg = sum / arr.length
	return {
		min,
		max,
		sum,
		avg: Number(avg.toFixed(2))
	};
}



function summElementsWorker(...arr) {
	let sum = 0;
	let min = arr[0];
	let max = arr[0];

	if (arr.length === 0) {
		return 0;
	}

	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum
}

function differenceMaxMinWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}
	min = Math.min(...arr);
	max = Math.max(...arr);
	return max - min
}

function differenceEvenOddWorker(...arr) {
	let sumEvenElement = 0;
	let sumOddElement = 0;
	if (arr.length === 0) {
		return 0;
	}

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 == 0) {
			sumEvenElement += arr[i];
		} else {
			sumOddElement += arr[i]
		}
	}
	return sumEvenElement - sumOddElement;
}



function averageEvenElementsWorker(...arr) {
	let sumEvenElement = 0;
	let countEvenElement = 0;

	if (arr.length === 0) {
		return 0;
	}

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 == 0) {
			sumEvenElement += arr[i]
			countEvenElement++
		}
	}
	return sumEvenElement / countEvenElement;
}



function makeWork(func, arrOfArr) {
	let maxWorkerResult = -Infinity;

	for (let i = 0; i < arrOfArr.length; i++) {
		const result = func(...arrOfArr[i]);
		if (result > maxWorkerResult) {
			maxWorkerResult = result;
		}
	}

	return maxWorkerResult;
}


const arr = [
	[10, 10, 11, 20, 10],
	[67, 10, 2, 39, 88],
	[72, 75, 51, 87, 43],
	[30, 41, 55, 96, 62]
];
console.log(makeWork(summElementsWorker, arr)); // максимум из 61, 206, 328, 284 => 328
console.log(makeWork(differenceMaxMinWorker, arr)); // максимум из 10, 86, 44, 66 => 86
console.log(makeWork(differenceEvenOddWorker, arr)); // максимум из 39, -6, -184, 92 => 92
console.log(makeWork(averageEvenElementsWorker, arr)); // максимум из 12.5, 33.333, 72, 62.666 => 72