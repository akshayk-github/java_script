const accountId = 1234;
let accountName = "Akshay kumbhani"
var accountPassword = "74108520963."
accountCity = "Surat"
let accountState;

console.log(accountId);

// Prefer not to use var
// because of issue in block scope and functional scope

console.table([accountId, accountName, accountPassword, accountCity, accountState])