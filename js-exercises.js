/* Why does the clock show random times and random hours */

function Clock () {
  // 1. Create a Date object.
  // 2. Store the hours, minutes, and seconds.
  // 3. Call printTime.
  // 4. Schedule the tick at 1 second intervals.
  var date = new Date();
  this.seconds = date.getSeconds();
  this.minutes = date.getMinutes();
  this.hours = date.getHours();
  // this.printTime();
  this._tick();
}

Clock.prototype.printTime = function () {
  // Format the time in HH:MM:SS
  // Use console.log to print it.
  var newTime = new Date();
  newTime.setSeconds(this.seconds);
  newTime.setMinutes(this.minutes);
  newTime.setHours(this.hours);
  console.log(newTime.toTimeString());
};

Clock.prototype._tick = function () {
  // 1. Increment the time by one second.
  // 2. Call printTime.
  this.seconds++;
  if (this.seconds >= 60) {
    this.minutes++;
    this.seconds = 0;
  }
  if (this.minutes >= 60) {
    this.hours++;
    this.minutes = 0;
  }
  if (this.hours >= 24) {
    this.hours = 0;
  }
  this.printTime();

  setTimeout(function () {
    this._tick();
  }.bind(this), 1000);
};

var clock = new Clock();
