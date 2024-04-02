function Person (emri){
    this.emri = emri;
}

Person.prototype.greet = function(){
    this.emri;
    console.log ("Pershendetje " + this.emri + "!");
}


var personi1 = new Person("Gerta")
personi1.greet();
