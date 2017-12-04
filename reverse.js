var str = 'eyniF';

var reverse = function reverseStr(str) {
	var reversed = '';

	for (var iterator of str) {
    console.log(reversed);
    reversed = iterator + reversed;
	}

	return reversed;
};

console.log(reverse(str));
