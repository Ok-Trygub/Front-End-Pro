'use strict'

function Student(name, surname, yearOfBirth) {
	this.name = name;
	this.surname = surname;
	this.yearOfBirth = yearOfBirth;

	this.visits = new Array(10);
	this.marks = new Array(10);


	this.age = function () {
		return (new Date().getFullYear()) - this.yearOfBirth;
	};

	this.addProgressArr = function (arr, value) {

		if (arr[arr.length - 1] !== undefined) throw new Error('Array is full!');

		for (let i = 0; i < arr.length; i++) {

			if (arr[i] === undefined) {
				arr[i] = value;
				break;
			}
		}

		return value;
	};

	this.present = function () {
		this.addProgressArr(this.visits, true);
	};

	this.absent = function () {
		this.addProgressArr(this.visits, false);
	};

	this.mark = function (point) {

		if (typeof (point) !== 'number') throw new Error('Mark should be number!')
		if (point > 10) throw new Error('Mark should be less or equal 10!')

		this.addProgressArr(this.marks, point);

	};

	this.getAverageMarks = function () {

		if (this.marks[0] === undefined) throw new Error('Array with marks is empty!');

		let accum = 0;
		let i = 0;

		for (i; i < 10; i++) {

			if (this.marks[i] === undefined) break;
			accum += this.marks[i];
		}

		const averageMarks = (accum / i).toFixed(1);
		return averageMarks;
	};

	this.summary = function () {

		if (this.visits[0] === undefined) throw new Error('Array with visits is empty!');

		const averageMarks = this.getAverageMarks();
		let classesPassed = 0;
		let visitedLessons = 0;
		const visitsIndex = 1;
		let i = 0;

		for (i; i < 10; i++) {

			if (this.visits[i] === undefined) break;
			classesPassed++;

			if (this.visits[i] === true) visitedLessons++;
		}

		const averageVisits = ((visitsIndex / classesPassed) * visitedLessons).toFixed(1);

		if ((averageMarks >= 9) && (averageVisits >= 0.9)) {
			console.log(`Ути какой молодчинка! Средняя оценка ${averageMarks}, средняя посещаемость ${averageVisits}.`);
		}

		if (((averageMarks < 9) && (averageVisits >= 0.9)) || ((averageMarks >= 9) && (averageVisits < 0.9))) {
			console.log(`Норм, но можно лучше! Средняя оценка ${averageMarks}, средняя посещаемость ${averageVisits}.`);
		}

		if ((averageMarks < 9) && (averageVisits < 0.9)) {
			console.log(`Редиска! Средняя оценка ${averageMarks}, средняя посещаемость ${averageVisits}.`);
		}
	}
}


const student1 = new Student('Ksenia', 'Trygub', 1991);
const student2 = new Student('Andrey', 'Trygub', 1991);


console.log(student1);

console.log(student1.age());

console.log(student1.present());
console.log(student1.absent());
console.log(student1.present());
console.log(student1.present());
console.log(student1.absent());
// console.log(student1.present());
// console.log(student1.absent());
// console.log(student1.present());
// console.log(student1.absent());
// console.log(student1.absent());

// console.log(student1.present());


console.log(student1.mark(10));
console.log(student1.mark(3));

console.log(student1.getAverageMarks());

console.log(student1.summary());



console.log(student2.present());
console.log(student2.absent());

console.log(student2.mark(10));
console.log(student2.mark(10));

console.log(student2.getAverageMarks());

console.log(student2.summary());