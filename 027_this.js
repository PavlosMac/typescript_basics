var Invoice = (function () {
    function Invoice(total) {
        this.total = total;
    }
    Invoice.prototype.printTotal = function () {
        console.log(this.total);
    };
    Invoice.prototype.printLater = function (time) {
        var _this = this;
        setTimeout(function () { console.log(_this.total); }, time);
    };
    return Invoice;
}());
var invoice = new Invoice(400);
invoice.printLater(5000);
//# sourceMappingURL=027_this.js.map