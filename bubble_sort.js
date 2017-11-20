var log = console.log;

var bubbleSort = function (nums) {
  do {
    var swapped = false;
    for (var index = 0; index < nums.length; index++) {
      log(nums);   
      if (nums[index] > nums[index + 1]) {
        var temp = nums[index];
        nums[index] = nums[index + 1];
        nums[index + 1] = temp;

        swapped = true;
      } 
    }
  } while (swapped) {
    //log(nums);
  }
};

var nums = [10,5,3,8,2,6,4,7,9,1];
bubbleSort(nums);