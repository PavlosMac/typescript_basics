// type PlayerArray = Array<string|number>;
//
// let players : PlayerArray = [ 'James', 'Joe', 'Jack' ];
//
// let playerNumbers : PlayerArray = [ 232, 21, 32];
//
// console.log(players);
// console.log(playerNumbers);
//
// var names : string[]|string;
// names = [ "Gordan Ramsay", "Pavlos Macdonald", "Bethany Fraser"];
// console.log(names);
// names = "Linnea Lindblom";
// console.log(names);
// var x : number = 13;
//
// if(x == 13){
//   console.log(" == these are equal");
// }
//Loops
// let players : number[] = [ 32, 42, 21, 43 ];
//
// console.log("for in...index")
// for (let player in players) {
//   console.log(player);
// }
//
// console.log("for of ")
// for (let player of players) {
//   console.log(player);
// }
//Function args
// var lineupCard = (team: string, ...players: string[]) => {
// 	console.log('Team: ' + team);
// 	for (let player of players) {
// 		console.log(player);
// 	}
// }
//
// console.log(lineupCard('Astros', 'Altuve', 'Correra', 'Bregman'));
//Function declaration
function firstFunction(first, last) {
    return first + " " + last;
}
//Function expression
var otherFunction = function (first, last) {
    return first + ' ' + last;
};
var lastOtherFunction = function (first, last) {
    return first + ' ' + last;
};
console.log(firstFunction('Pavlos', 'Kosmidis'));
console.log(otherFunction('Pavlos', 'Kosmidis'));
console.log(lastOtherFunction('Pavlos', 'Kosmidis'));
//# sourceMappingURL=009_union_types.js.map