function foo() {
  try {
      for (var i = 0; i < 10; i++) {
          if (i % 3 == 0) {
              return i; // This executes once
          }
      }
  } finally {
      return 42; // But this still executes
  }
}

console.log(foo()); // Prints 42