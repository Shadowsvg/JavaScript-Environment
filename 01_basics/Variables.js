const accountId = 14578
let accountName = "Pratik"
var accountMail = "pratik@google.com"
accountBranch = "Dondaicha"  // Not good practise


// accountId = 12345;         Changing constant is not allowed

console.log(accountId, accountName, accountMail, accountBranch);
console.table([accountId, accountName, accountMail, accountBranch]);

/*
Prefer not to use var
Because of issue in block scope and functional scope
*/