
const a = 1;
const b = 2;

// Variable declarations (SHOULD be removed)
const core = require('@babel/core');

// Using non-require function
const something = useCore('@babel/core');

// Using as argument to a function (SHOULD be removed)
useCore(require('@babel/core'));

// A clear side-effect expression (SHOULD be removed)
require('@babel/core');

// Non-matching module ID
require('jest');

console.log(a + b); // 3


function useCore(arg0) {
  // do something with it
}
