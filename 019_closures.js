//Closuers
//behave like objects with their own methods, nested within the function
function increment() {
    var element = 0;
    return { doing: function () { element++; },
        currentlyDoing: function () { return element; }
    };
}
var changing = increment();
console.log(changing.currentlyDoing());
changing.doing();
console.log(changing.currentlyDoing());
changing.doing();
console.log(changing.currentlyDoing());
changing.doing();
console.log(changing.currentlyDoing());
//# sourceMappingURL=019_closures.js.map