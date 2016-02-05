/* Why does the clock show random times and random hours */

function Clock () {
  // 1. Create a Date object.
  // 2. Store the hours, minutes, and seconds.
  // 3. Call printTime.
  // 4. Schedule the tick at 1 second intervals.
  var date = new Date(),
  clock = this,
  seconds = date.getSeconds(),
  minutes = date.getSeconds(),
  hours = date.getSeconds();
  this.printTime(seconds, minutes, hours);
  clock._tick(seconds, minutes, hours);
}

Clock.prototype.printTime = function (seconds, minutes, hours) {
  // Format the time in HH:MM:SS
  // Use console.log to print it.
  var newTime = new Date();
  newTime.setSeconds(seconds);
  newTime.setMinutes(minutes);
  newTime.setHours(hours);
  console.log(newTime.toTimeString());
};

Clock.prototype._tick = function (seconds, minutes, hours) {
  // 1. Increment the time by one second.
  // 2. Call printTime.
  seconds++;
  if (seconds >= 60) {
    minutes++;
    seconds = 0;
  }
  if (minutes >= 60) {
    hours++;
    minutes = 0;
  }
  if (hours >= 24) {
    hours = 0;
  }
  this.printTime(seconds, minutes, hours);
  global.setTimeout( function() {clock._tick(seconds, minutes, hours);}, 1000);
};

var clock = new Clock();
