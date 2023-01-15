
//function nameIs() {
    //var userName="stacey";
    //console.log(userName);
//}

//nameIs();
//nameIs();



function getAppPost (city, rooms, price){
    return (`city: ${city}. rooms: ${rooms}, price: ${price}`);
}
var post1 = getAppPost("Beit Shemesh",4,"I don't know");
console.log(post1);