var log = console.log;

var Stack = function () {
  var items = [];

  /* used methods
  pop, push, peek, isEmpty, clear, size
  */

  this.push = function (element) {
    items.push(element);
  };

  this.pop = function () {
    return items.pop();
  };

  this.peek = function () {
    return items[items.length - 1];
  };

  this.isEmpty = function () {
    return items.length == 0;
  };

  this.size = function () {
    return items.length;
  };

  this.clear = function () {
    items = [];
  };

  this.print = function () {
    log(items.toString());
  };
};

/* var stack = new Stack();

log(stack.isEmpty());

stack.push(5)
stack.push(8)

log(stack.peek())

stack.push(9)

log(stack.size())
log(stack.isEmpty())

stack.push(15)

stack.pop()
stack.pop()

log(stack.size())
stack.print(); */

var divideByTwo = function (decNumber) {
  var remStack = new Stack(),
    rem, binaryString = '';

  while (decNumber > 0) {
    rem = Math.floor(decNumber % 2);
    remStack.push(rem);

    //log(rem);
    decNumber = Math.floor(decNumber / 2);
  }

  while (!remStack.isEmpty()) {
    binaryString += remStack.pop().toString();
  }

  return binaryString;
};

log(divideByTwo(233));
log(divideByTwo(10));
log(divideByTwo(1000));

var baseConverter = function (decNumber, base) {
  var remStack = new Stack(),
    rem, baseString = '',
    digits = '0123456789ABCDEF';

    while (decNumber > 0 ) {
      rem = Math.floor(decNumber % base);

      remStack.push(rem);

      decNumber = Math.floor(decNumber / base);
    }

    while (!remStack.isEmpty()) {
      baseString += digits[remStack.pop()];
    }

    return baseString;
}

log(baseConverter(100345, 2))
log(baseConverter(100345, 8))
log(baseConverter(100345, 16))