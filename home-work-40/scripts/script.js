function mult(a, b) {
	return a * b;
}

let cache = new Map();



function memoizedAdd(func, ...args) {
	let resOfFunc = func(...args)

	if (resOfFunc in cache) {

		console.log('Fetching from cache');
		console.log(cache)
		return cache;
	}
	else {
		console.log('Calculating result');
		let sum = resOfFunc + 10;
		cache.set(resOfFunc, sum)

		console.log(cache)

	}

	if (cache.size > 10) {
		let removeItem = Array.from(cache.keys()).shift();

		cache.delete(removeItem);
		console.log(cache)
	}
	return cache
}



memoizedAdd(mult, 5, 5);
memoizedAdd(mult, 5, 7);
memoizedAdd(mult, 1, 7);
memoizedAdd(mult, 3, 7);
memoizedAdd(mult, 8, 7);
memoizedAdd(mult, 33, 7);
memoizedAdd(mult, 9, 7);
memoizedAdd(mult, 11, 7);
memoizedAdd(mult, 12, 7);
memoizedAdd(mult, 16, 7);


memoizedAdd(mult, 25, 7);
memoizedAdd(mult, 35, 7);
memoizedAdd(mult, 45, 7);