const person = {
	nameT: 'Ksenia'
};

function info(phone, email) {
	console.log(`Name: ${this.nameT}, Phone: ${phone}, Email: ${email}`);
}

const bind = function (fn, context) {
	const bindArgs = [].slice.call(arguments, 2);

	return function () {
		const fnArgs = [].slice.call(arguments);

		return fn.apply(context, bindArgs.concat(fnArgs));
	};
};

bind(info, person)('12345', 'ksu@ukr.net');
bind(info, person, '12345')('ksu@ukr.net');
bind(info, person, '12345', 'ksu@ukr.net')();