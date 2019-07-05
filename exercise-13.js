function xo(str) {
	var lotOfX = 0;
	var lotOfO = 0;
	for (var i = 0; i < str.length; i++) {
		if (str[i] === 'x') {
			lotOfX++;
		}
		else if (str[i] === 'o') {
			lotOfO++;
		}
	}

	return lotOfX === lotOfO ? true : false;
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
