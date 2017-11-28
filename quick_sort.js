var log = console.log,
	loop_time = 0;

var quickSort = function(arr) {
	var arrLength = arr.length,
		pivot = arr[arrLength - 1],
		left = [],
		right = [];

	if (arrLength <= 1) return arr;

	for (var i = 0; i < arrLength - 1; i++) {
		loop_time++;

		var currentValue = arr[i];

		log(loop_time + ' ' + arr); //runs 42 times

		if (currentValue < pivot) {
			left.push(currentValue);
		} else {
			right.push(currentValue);
		}
	}
	//log(left)
	//log(right)
	var sortedLeft = quickSort(left),
		sortedRight = quickSort(right);

	return sortedLeft.concat(pivot, sortedRight);
	//ES6 way
	//return [...quickSort(left), pivot, ...quickSort(right)];
};

var nums = [ 10, 8, 2, 1, 6, 3, 9, 4, 7, 5 ];
quickSort(nums);
log(quickSort(nums));
