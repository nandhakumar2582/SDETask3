var cargoHold=[1138,'space suits','parrot','instruction manual','meal packs','space tether','20 meters'];
//a
cargoHold.splice(3,0,'keys');
console.log(cargoHold);
//b
cargoHold.splice(cargoHold.indexOf('instruction manual'),1);
console.log(cargoHold);
//c
cargoHold.splice(2,0,'cat','fob','string cheese');
console.log(cargoHold);
