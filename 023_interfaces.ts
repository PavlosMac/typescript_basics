
//Interface provides enforced behaviour by changing the type
//
// interface Hang {
//   height?: number;
//   gravity?: number;
//   name?: string;
// }
//
//
// function tryToHang(person : Hang) {
//   return `This person of height ${person.height} will perish today by weigh of ${person.gravity} `
// }
//
//
// var man = {
//     height: 77,
//     gravity: 89
// }
//
// console.log(tryToHang(man));


//Interface functions

// interface invoiceFunc {
//   (name : string, total : number) : void;
// }
//
// let myInvoice : invoiceFunc;
//
// myInvoice = function( n, t ){
//     console.log(n);
//     console.log(t);
// }
//
// myInvoice('Google', 888);
interface IPost {
  title : string;
  body: string;
}


class Post implements IPost {
  title : string;
  body: string;

    constructor(post : IPost){
      this.title = post.title;
      this.body = post.body;
    }

    printPost(){
      console.log(this.title);
      console.log(this.body);
    }
}

var post1 = new Post( {title : "my Great fucking title", body: "My great body"} );

console.log(post1.title);
console.log(post1.body);

post1.printPost();
