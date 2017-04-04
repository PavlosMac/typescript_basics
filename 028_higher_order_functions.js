"use strict";
//dbQuery mocks a callback function and takes 5 secs to return results
var dbQuery = function () {
    setTimeout(function () {
        console.log('query results');
    }, 5000);
};
//loadPage takes an argument that is a callback function, that returns VOID
function loadPage(query) {
    //query does not block further execution of the code
    //other logs get executed and finally query is returned once time out is resolved
    console.log('header loads....');
    query();
    console.log('footer loads....');
    console.log('end of page load');
}
loadPage(dbQuery);
