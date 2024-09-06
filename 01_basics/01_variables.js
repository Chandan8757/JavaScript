const accountId = 144554;
let accountEmail = "ck846747@gmai.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState;

// accountId = 2 // not allowed

accountEmail = "ck567@gmail.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);


/*
prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

