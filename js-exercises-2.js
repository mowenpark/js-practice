// Function.prototype.myBind = function (context) {
//   var fn = this;
//   var func = function () {
//     fn.apply(context);
//   };
//   return func;
//
//   // return function () { fn.apply(context); };
// };

function Lamp() {
   this.name = "a lamp";
}

var turnOn = function() {
   console.log("Turning on " + this.name);
};

var lamp = new Lamp();
var myBoundTurnOn = turnOn.myBind(lamp);
myBoundTurnOn(); // should say "Turning on a lamp"
