// const myFn = function() {
//     console.log("I am function.");
//   }
  
//   myFn.someAttribute = 42;
//   console.log(myFn.someAttribute);
  
//   function runner(f) {
//     f();
//   }
  
//   runner(myFn);

// BEFORE: anonymous callback as function expression 
[1,2,3].forEach(function (num) {
  console.log('num: ', num);
});

// AFTER: anonymous callback as arrow function
[1,2,3].forEach((num) => {
  console.log('num: ', num);
});

[1,2,3].forEach(num => console.log('num: ', num));