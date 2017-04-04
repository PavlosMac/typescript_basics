@detailedLog('billing')
class AccountsPayable {
  constructor() {}

  @admin
  deleteAccount(){
    console.log('deleting account....')
  }
}


function detailedLog(dashBoard : string) {
  if(dashBoard == 'billing') {
            console.log('working in billing department');
            return function (target : Object) {};
  }
    else {
      return function (target : Object) {};
    }
}

function admin( target : Object, propertyKey : string, descriptor : TypedPropertyDescriptor<any>) : any {
  console.log('doing admin check');
  return descriptor;
}

var post = new AccountsPayable;

post.deleteAccount();


// doing admin check
// working in billing department
// deleting account....
