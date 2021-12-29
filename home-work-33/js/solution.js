const elemList = document.body.querySelectorAll('li');
console.log(elemList.length);

const arr = [];

for (let elem of elemList){
	arr.push(elem.textContent)
}
console.log(arr);

