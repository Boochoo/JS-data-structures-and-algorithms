var log = console.log;

var bubbleSort = function(nums) {
	var loop_num = 0;
	do {
		var swapped = false;
		for (var index = 0; index < nums.length; index++) {
			loop_num++; //runs 100 times
			log(loop_num + ' ' + nums);
			
			if (nums[index] > nums[index + 1]) {
				var temp = nums[index];
				nums[index] = nums[index + 1];
				nums[index + 1] = temp;

				swapped = true;
			}
		}
	} while (swapped);
	{
		//log(nums);
	}
};

var nums = [ 10, 5, 3, 8, 2, 6, 4, 7, 9, 1 ],
	nums_2 = nums.slice();
bubbleSort(nums);

//bubble sort in for loop
/* THIS IS FASTER */

var bubbleSort_2 = function(nums) {
  var loop_num = 0;
  var len = nums.length;
  
	for (let i = len - 1; i >= 0; i--) {
		for (let j = len - i; j > 0; j--) {
      
      loop_num++; //runs 55 times
			log(loop_num + ' ' + nums);
      
      if (nums[j] < nums[j - 1]) {
				var currentItem = nums[j];
				nums[j] = nums[j - 1];
				nums[j - 1] = currentItem;
			}
		}
	}
};

bubbleSort_2(nums_2);
