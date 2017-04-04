class Invoice {
  //below is property
  customerDetail : string;

  constructor( public name, public address, public telephoneNumber){
    this.customerDetail = name + ', ' +  address + ', ' + telephoneNumber;
  }
}


var customer1 = new Invoice('Pavlos', '7 Albert Street', '01856487276');
var customer2 = new Invoice('Linnea', '7 Albert Street', '83729372633');


console.log(customer1.address);
console.log(customer2.name);
