function Car (modeli, shpejtesia){
    this.modeli = modeli;
    this.shpejtesia = shpejtesia;
}

Car.prototype.accelerate = function(){
    this.shpejtesia += 10;
    console.log("Shpejtesia aktuale e " + this.modeli + " eshte " + this.shpejtesia +  " km/h");
}

Car.prototype.brake = function(){
    this.shpejtesia -= 5;
    console.log("Shpejtesia aktuale e " + this.modeli + " eshte " + this.shpejtesia +  " km/h");
}

var makina1 = new Car("BMW", 60);
var makina2 = new Car ("Mercedes", 80);

makina1.accelerate();
makina1.brake();

makina2.accelerate();
makina2.brake();