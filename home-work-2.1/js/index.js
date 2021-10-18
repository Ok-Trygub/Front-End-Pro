// Task #1 

const user = {
	name: 'John',
	surname: 'Smith',
};

user.name = 'Pete';

delete user.name;

console.log(user);

// Task #2

/*
Yes, it's possible, because the const declaration only protects the user's variable from changes, not its content.
The const definition will only throw an error if we assign a different value to the variable: user = ...
*/

// Task #3

let salaries = {
	John: 100,
	Ann: 160,
	Pete: 130
}

const sum = salaries.John + salaries.Ann + salaries.Pete;

console.log(sum);