//Function declaration
//function declarations are hoisted meaning that javascript will look for the function throughout the script
//no matter where it is called
//
// console.log(firstFunction('Pavlos', 'Kosmidis'));
// // console.log(otherFunction('Pavlos', 'Kosmidis'));
// // console.log(thirdOtherFunction('Pavlos', 'Kosmidis'));
//
//
// function firstFunction( first : string, last : string) : string {
//   return first + " " + last;
// }
//
// //Function expression
// //below only creates variables, argument types and return type
// //function expressions have to be defined before they can be called
// var otherFunction : ( first : string, last : string ) => string;
//
//
// otherFunction = function( first : string, last : string, ) {
//  return first + ' ' + last;
// }
//
// var thirdOtherFunction : (first: string, last : string) => string = function ( first: string, last : string ){
//   return first + ' ' + last;
// }
for (var i = 0; i < 10; i++) {
    // capture the current state of 'i'
    // by invoking a function with its current value
    (function (i) {
        setTimeout(function () { console.log(i); }, 1000 * i);
    })(i);
}
//# sourceMappingURL=017_function_expression_vs_function_declaration.js.map