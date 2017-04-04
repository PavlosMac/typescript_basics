var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Report = (function () {
    function Report(name) {
        this.name = name;
        this.companyProfile = name;
    }
    return Report;
}());
// by using super we get attribute companyProfile and make available the property name from instantiation
var Invoice = (function (_super) {
    __extends(Invoice, _super);
    function Invoice(name, total) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.total = total;
        return _this;
    }
    Invoice.prototype.printInvoice = function () {
        return this.name + ', ' + this.total;
    };
    return Invoice;
}(Report));
//super(name) grabs this.companyProfile and sets it to name
var BillOfLading = (function (_super) {
    __extends(BillOfLading, _super);
    function BillOfLading(name, city, state) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.city = city;
        _this.state = state;
        return _this;
    }
    BillOfLading.prototype.printArchiveRecord = function () {
        return 'Archive record for: ' + this.name + ', ' + this.city + ', ' + this.state;
    };
    return BillOfLading;
}(Report));
var invoice1 = new Invoice('Google', 44);
console.log(invoice1.companyProfile);
console.log(invoice1.printInvoice());
var record1 = new BillOfLading('Pavlos', 'Kirkwall', 'orkeny');
//
console.log(record1.printArchiveRecord());
console.log(record1.companyProfile);
