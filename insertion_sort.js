var log = console.log;

var insertion_sort = function(nums) {
	var loop_num = 0;

	for (let i = 0, len = nums.length; i < len; i++) {
		for (let j = 0; j < i; j++) {
			loop_num++; //runs 45 times
			log(loop_num + ' ' + nums);

			if (nums[i] < nums[j]) {
				var spliced = nums.splice(i, 1);
				nums.splice(j, 0, spliced[0]);
			}
		}
	}
};

var nums = [ 10, 5, 3, 8, 2, 6, 4, 7, 9, 1 ],
	nums_2 = nums.slice();

//sinsertion_sort(nums);

var insertion_sort_2 = function(unsortedList) {
	let len = unsortedList.length,
		loop_num = 0;

	for (let i = 0; i < len; i++) {
		const currentElement = unsortedList[i]; //copy of current element

		/*Check through the sorted part and compare with the number in currentElement. If large, shift the number*/
		for (let j = i - 1; j >= 0 && unsortedList[j] > currentElement; j--) {
			loop_num++; //runs 26 times
			log(loop_num + ' ' + unsortedList);
			unsortedList[j + 1] = unsortedList[j]; //shift the number
			unsortedList[j] = currentElement;
		}
	}
};

//insertion_sort_2(nums_2);
//log(nums);

var insertion_sort_3 = function(arr) {
	var length = arr.length,
		j,
		temp, loop_num = 0;

	for (var i = 1; i < length; i++) {
		j = i;
		temp = arr[i];

		while (j > 0 && arr[j - 1] > temp) {

			loop_num++; //runs 26 times
			log(loop_num + ' ' + arr);
			arr[j] = arr[j - 1];
			j--;
		}
		arr[j] = temp;
	}
};

log(nums_2);
insertion_sort_3(nums_2);
log(nums_2);
