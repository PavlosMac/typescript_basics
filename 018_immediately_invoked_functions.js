//Immediately invoked functions
//functions that are invoked right away because they are called with arguments
var names = ["Pavlos", "Linnea", "Jack"];
var counter = 0;
(function () {
    for (var name_1 in names) {
        counter++;
    }
})();
console.log(counter);
//# sourceMappingURL=018_immediately_invoked_functions.js.map