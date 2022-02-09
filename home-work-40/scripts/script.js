function mult(a, b) {
	return a * b;
}

let cache = new Map();



function cacheAbility(func, ...args) {
	const resOfFunc = func(...args)

	if (resOfFunc in cache) {

		console.log('Fetching from cache');
		console.log(cache)
		return cache;
	}
	else {
		console.log('Calculating result');
		const sum = resOfFunc + 10;
		cache.set(resOfFunc, sum);;

		console.log(cache);

	}

	if (cache.size > 10) {
		let removeItem = Array.from(cache.keys()).shift();

		cache.delete(removeItem);
		console.log(cache);
	}
	return cache;
}



cacheAbility(mult, 5, 5);
cacheAbility(mult, 5, 7);
cacheAbility(mult, 1, 7);
cacheAbility(mult, 3, 7);
cacheAbility(mult, 8, 7);
cacheAbility(mult, 33, 7);
cacheAbility(mult, 9, 7);
cacheAbility(mult, 11, 7);
cacheAbility(mult, 12, 7);
cacheAbility(mult, 16, 7);


cacheAbility(mult, 25, 7);
cacheAbility(mult, 35, 7);
cacheAbility(mult, 45, 7);