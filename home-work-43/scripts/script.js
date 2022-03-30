class Human {
	#nowYear = new Date().getFullYear();

	constructor(name, surname, birth) {
		this.name = name;
		this.surname = surname;
		this.yearOfBirth = birth;
	}

	validateNameData(value) {
		if (value.trim().length < 3) {
			throw new Error('Name should contain more than 3 characters!');
		}
		return true;
	}

	get name() {
		return this._name;
	}

	set name(value) {
		if (this.validateNameData(value)) this._name = value;
	}

	get surname() {
		return this._surname;
	}

	set surname(value) {
		if (this.validateNameData(value)) this._surname = value;

	}

	static fullName(obj) {
		return `${obj.name} ${obj.surname}`;
	}

	get yearOfBirth() {
		return this._surname;
	}

	set yearOfBirth(value) {

		if (typeof (value) !== 'number') {
			throw new Error('Year should contain numbers!');
		}

		if (value < 1902) {
			throw new Error('Year can not be less that 1902!');
		}

		this._yearOfBirth = value;
	}

	age() {
		return this.#nowYear - this._yearOfBirth;
	};


	addArrayItem(arr, value) {

		for (let i = 0; i < arr.length; i++) {
			if (arr[i] === undefined) {
				arr[i] = value;
				break;
			}
		}
		return value;
	};
}



class Student extends Human {
	#slogan = 'Welcome to our university!';

	constructor(name, surname, birth) {
		super(name, surname, birth);

		this.visits = new Array(10);
		this.marks = new Array(10);
	}

	addArrayItem(arr, value) {

		if (arr[arr.length - 1] !== undefined) throw new Error('Array is full!');
		super.addArrayItem(arr, value)
	}


	present() {

		this.addArrayItem(this.visits, true);
		console.log(this.#slogan);
	}

	absent() {

		this.addArrayItem(this.visits, false);
	}


	mark(point) {

		if (typeof (point) !== 'number') throw new Error('Mark should be number!');
		if (point > 10) throw new Error('Mark should be less or equal 10!');

		this.addArrayItem(this.marks, point);

	};

	getAverageMarks() {

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

	summary() {

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


console.log(student1);
console.log(student1.age());

console.log(student1.present());
console.log(student1.absent());

console.log(student1.mark(6));
console.log(student1.mark(9));

console.log(student1.summary());

console.log(Human.fullName(student1));


const student2 = new Student('Andrey', 'Trygub', 1991);
console.log(student2);

console.log(student2.present());
console.log(student2.absent());
console.log(student2.absent());

console.log(student2.mark(10));

console.log(Human.fullName(student2));