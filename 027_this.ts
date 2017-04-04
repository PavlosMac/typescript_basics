class Invoice {
  total : number;

  constructor( total : number ) {
    this.total = total;
  }

  printTotal(){
    console.log(this.total);
  }

  printLater( time : number ) {
    setTimeout( () => { console.log(this.total); }, time);
  }


}

var invoice = new Invoice(400);

invoice.printLater(5000);
