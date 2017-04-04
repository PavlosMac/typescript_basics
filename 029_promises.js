//start mowing --> Pending
//Did not complete mowing process --> Reject
//complete mowing process --> Resolve
"use strict";
//promise is perform upload, anonymous function. expects to return promise imgStatus
let performUpload = function (imgStatus) {
    return new Promise((resolve) => {
        //promise expects callback, when resolved execute all below code
        console.log(`Status: ${imgStatus}`);
        setTimeout(() => {
            //below resolve actually holds the data we receive upon success, stored as object in key/value pair
            resolve({ imgStatus: imgStatus });
        }, 3000);
    });
};
var upload;
var compress;
var transfer;
performUpload('uploading...')
    .then((res) => {
    upload = res;
    return performUpload('compressing...');
})
    .then((res) => {
    compress = res;
    return performUpload('transferring...');
})
    .then((res) => {
    transfer = res;
    return performUpload('Image upload completed');
});
//# sourceMappingURL=029_promises.js.map