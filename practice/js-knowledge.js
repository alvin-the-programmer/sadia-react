// hello

// const - cannot reassign, has block scope (use this where you can)
// let - can be reassigned, has block scope
// var - can be reassigned, has function scope, not block scope
// scoping: a variable declared in an outer scope, is always accessible inside an inner scope 

// every function is a block, but not every block is a function


// const doStuff = () => {
//   var foo = 42;
// };

// doStuff();

// console.log(foo);

// object
const dog = {
  label: 'fido',
  color: 'brown',
  data: 'potato',
  age: 5,
  bark: function() {
    console.log(this.label + ' says woooooooooof!');
  }
};

const cat = {
  label: 'sennacy',
  color: 'orange',
  meow: dog.bark
};

// const data = 'color';
// console.log(dog[data]);


// What is the diff b/w square bracket access and dot access for objects
//  - square brackets can use a variable!
//  - dot cannot use a variable!


dog.bark();
cat.meow();