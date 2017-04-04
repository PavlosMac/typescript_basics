var Invoice = (function () {
    function Invoice(name, address, telephoneNumber) {
        this.name = name;
        this.address = address;
        this.telephoneNumber = telephoneNumber;
        this.customerDetail = name + ', ' + address + ', ' + telephoneNumber;
    }
    return Invoice;
}());
var customer1 = new Invoice('Pavlos', '7 Albert Street', '01856487276');
var customer2 = new Invoice('Linnea', '7 Albert Street', '83729372633');
console.log(customer1.address);
console.log(customer2.name);
//# sourceMappingURL=020_classes.js.map