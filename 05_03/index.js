newUser = {
    userName: "john",
    userAge:23,
}
arrayOfusers =[];

function addNewUser(au,nu) {
 au.push(nu)
}

arrayOfusersCopy = [...arrayOfusers];
addNewUser(arrayOfusers, newUser);
addNewUser(arrayOfusersCopy, newUser);

console.log(arrayOfusers);
console.log(arrayOfusersCopy);

