//Closuers
//behave like objects with their own methods, nested within the function.
//methods can be called from an assignment


function increment(){
  var element : number  = 0;

  return {  doing() { element++ },
            currentlyDoing() { return element }
    }
}


let changing = increment();


console.log(changing.currentlyDoing());
changing.doing();
console.log(changing.currentlyDoing());
changing.doing();
console.log(changing.currentlyDoing());
changing.doing();
console.log(changing.currentlyDoing());
