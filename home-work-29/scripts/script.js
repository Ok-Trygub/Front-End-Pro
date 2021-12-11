const calculator = {
	read() {
		this.firstNum = +prompt('Input first num:', '2');
		this.secondNum = +prompt('Input second num:', '3');
	},
	sum() {
		return this.firstNum + this.secondNum;
	},
	mul() {
		return this.firstNum * this.secondNum;
	}
}



calculator.read();
alert(calculator.sum());
alert(calculator.mul());