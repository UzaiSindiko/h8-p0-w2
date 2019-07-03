/**************************
1. Menyusun Barisan Bintang
  */

var rows1 = 5; // input the number of rows

// do loops to display asterisks in the console.
for (var i = 1; i <= rows1; i++) {
	console.log('*');
}

/**************************
 2. Menyusun Barisan Bintang Dengan Nested Looping
 */
console.log('\n');

var rows2 = 5; // input the number of rows

// do loops to display asterisks in the console.

for (var i = 1; i <= rows2; i++) {
	var k = '';
	for (var j = 1; j <= rows2; j++) {
		k += '*';
	}
	console.log(k);
}

/**************************
3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
 */
console.log('\n');

var rows3 = 5; // input the number of rows

// do loops to display asterisks in the console.

for (var i = 1; i <= rows2; i++) {
	var k = '';
	for (var j = 1; j <= i; j++) {
		k += '*';
	}
	console.log(k);
}
