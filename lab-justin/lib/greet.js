'use strict';

// const greeting = module.exports = {};
//
// greeting.hello = function(name) {
//   if(name === 'string' ){
//     console.log('Hello', name);
//   }
//   else{
//     return null;
//   }
// };

module.exports = function(name){
  if(typeof(name) === 'string' ){
    console.log('Hello', name);
  }
  else{
    return null;
  }
};
