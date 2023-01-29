function init (){
    const prices = [32,42,22,33,231,44];
const discount = 0.2;
function getDiscount (someArraOfPrices, discountAmount){
    let discounts = [];
    for (i = 0; i<someArraOfPrices.length; i++){
        discounts.push (someArraOfPrices[i] - someArraOfPrices[i]*discountAmount);
    }
    return discounts;
}
let pricesAfterDiscount = getDiscount(prices, discount);
console.log (`The prices: ${prices} after discount ${discount} are ${pricesAfterDiscount}`);
}
init();