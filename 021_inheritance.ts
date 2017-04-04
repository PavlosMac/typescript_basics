class Report {
  //below is property
  companyProfile : string;

  constructor( public name : string){
    this.companyProfile = name;
  }
}

// by using super we get attribute companyProfile and make available the property name from instantiation

class Invoice extends Report {


  constructor( public name : string, public total : number) {
    super(name);

  }

  printInvoice() {
    return this.name + ', ' + this.total;
  }

}

//super(name) grabs this.companyProfile and sets it to name
class BillOfLading extends Report {

  constructor( public name : string, public city, public state) {
    super(name);
  }

  printArchiveRecord(){
    return 'Archive record for: ' + this.name + ', ' +  this.city + ', ' + this.state;
  }
}




var invoice1 = new Invoice('Google', 44);

console.log(invoice1.companyProfile);
console.log(invoice1.printInvoice());




var record1 = new BillOfLading( 'Pavlos', 'Kirkwall', 'orkeny');
//
console.log(record1.printArchiveRecord());
console.log(record1.companyProfile);
