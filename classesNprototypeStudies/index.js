//fn-constructor
function ProductCard(scu, name, price){
  this.scu = scu;
  this.name = name;
  this.price = price;
}
//creating method of constructor
ProductCard.prototype.publish = function(){
    console.log(`product: ${this.name} scu: ${this.scu} price: ${this.price}`);
}
//a new instanse of the constructor
const pomidor = new ProductCard ('pomidor',12345,82);
pomidor.publish();
//---------------------------------------
//creating class with method in it
class ProductCard2{
   constructor (scu, name, price){
    this.scu = scu;
    this.name = name;
    this.price = price;
  } 
  publish2(){
    console.log(`product: ${this.name} scu: ${this.scu} price: ${this.price}`);
  }
  //static method may be used only for class but not for its instance!
  static discount(){
    console.log('Discount is 10%!');
  }
  //setter
   set setMadeIn(value){
    this.madeIn = value.toUpperCase();
   }
   //getter
   get setMadeIn(){
    return this.madeIn;
   }
}
const apricot = new ProductCard2 ('apricot',6789,88);

apricot.publish2();
//static method call
ProductCard2.discount();
apricot.madeIn = "Israel";
console.log(apricot);