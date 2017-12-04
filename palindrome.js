var palindrome_1 = function reverseStr (str) {
  var reversed = str.split('').reverse().join('');
  return str === reversed;
}

var palindrome_2 = function (str) {
  var str_arr = str.split('');

  return str_arr.every(function (char, index) {
    return char === str[str.length - index - 1];
  })
};

console.log(palindrome_1('heyeh'));
console.log(palindrome_2('hejkjkeh'));

