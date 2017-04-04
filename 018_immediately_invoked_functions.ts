//Immediately invoked functions
//functions that are invoked right away because they are called with arguments


var names : string[] = [ "Pavlos", "Linnea", "Jack" ];

var counter : number = 0;

(function(){
  for (let name in names) {
    counter++;
  }
})();


console.log(counter);
