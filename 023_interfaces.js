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
var Post = (function () {
    function Post(post) {
        this.title = post.title;
        this.body = post.body;
    }
    Post.prototype.printPost = function () {
        console.log(this.title);
        console.log(this.body);
    };
    return Post;
}());
var post1 = new Post({ title: "my Great fucking title", body: "My great body" });
console.log(post1.title);
console.log(post1.body);
post1.printPost();
//# sourceMappingURL=023_interfaces.js.map