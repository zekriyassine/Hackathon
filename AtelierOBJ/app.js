class Vehicle {
    constructor(color, model) {
        this.color = color;
        this.model = model;
    }
    giveColor() {
        console.log(this.color, this.model)
    }
   
}
 class Car extends Vehicule {
     constructor(color, model) {
    super(color, model);
    }
    giveColor() {
        console.log("car", this.color, this.model)
    }
 }
 class Moto extends Vehicule {
    constructor(color, model) {
   super(color, model);
   }
   giveColor() {
       console.log("car", this.color, this.model)
   }
 }

 const mercedes = new  Car("black", "Mercedes Class A")
 const yamaha = new Moto("blue", "Yamaha")

 mercedes.giveColor()
 yamaha.giveColor()