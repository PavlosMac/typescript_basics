//start mowing --> Pending
//Did not complete mowing process --> Reject
//complete mowing process --> Resolve

"use strict";

//promise is performUpload, anonymous function. expects to return promise imgStatus
let performUpload = function( imgStatus : string ) : Promise<{imgStatus : string}> {
    return new Promise( (resolve) => {
      //promise expects callback, when resolved - execute all below code
      console.log(`Status: ${imgStatus}`);
        setTimeout(() => {
          //below resolve actually holds the data we receive upon success, stored as object in key/value pair
          resolve( {imgStatus : imgStatus} );
        }, 3000)
    });
}

var upload;
var compress;
var transfer;

//call the promise, funnel data with response to then.
performUpload('uploading...')
.then((res) => {
        //data received in res from performUpload as resolved, passed to upload variable
        upload = res;
        return performUpload('compressing...')
})
.then((res) => {
        //data received in res rom performUpload as resolved, passed to compress
        compress = res;
        return performUpload('transferring...')
})
.then((res) => {
        //data received in res from performUpload as resolved, passed to transfer
        transfer = res;
        return performUpload('Image upload completed')
})
