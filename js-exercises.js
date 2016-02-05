/* Why does the clock show random times and random hours */

// function Clock () {
//   // 1. Create a Date object.
//   // 2. Store the hours, minutes, and seconds.
//   // 3. Call printTime.
//   // 4. Schedule the tick at 1 second intervals.
//   var date = new Date();
//   this.seconds = date.getSeconds();
//   this.minutes = date.getMinutes();
//   this.hours = date.getHours();
//   // this.printTime();
//   this._tick();
// }
//
// Clock.prototype.printTime = function () {
//   // Format the time in HH:MM:SS
//   // Use console.log to print it.
//   var newTime = new Date();
//   newTime.setSeconds(this.seconds);
//   newTime.setMinutes(this.minutes);
//   newTime.setHours(this.hours);
//   console.log(newTime.toTimeString());
// };
//
// Clock.prototype._tick = function () {
//   // 1. Increment the time by one second.
//   // 2. Call printTime.
//   this.seconds++;
//   if (this.seconds >= 60) {
//     this.minutes++;
//     this.seconds = 0;
//   }
//   if (this.minutes >= 60) {
//     this.hours++;
//     this.minutes = 0;
//   }
//   if (this.hours >= 24) {
//     this.hours = 0;
//   }
//   this.printTime();
//
//   setTimeout(function () {
//     this._tick();
//   }.bind(this), 1000);
// };
//
// var clock = new Clock();

var readline = require('readline');
var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
//
// function addNumbers (sum, numsLeft, completionCallback) {
//   if (numsLeft === 0) {
//     completionCallback(sum);
//     reader.close();
//   } else {
//     reader.question("Enter a number", function (numString) {
//         var num = parseInt(numString);
//         sum = sum + num;
//         console.log(sum);
//         numsLeft--;
//         addNumbers(sum, numsLeft, completionCallback);
//     });
//   }
// }
//
// addNumbers(0, 3, function (sum) {
//   console.log("Total Sum: " + sum);
// });

function absurdBubbleSort(arr, sortCompletionCallback) {
  function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
    if (i < arr.length - 1) {
      askIfGreaterThan(arr[i], arr[i+1], function (isGreaterThan) {
        if (isGreaterThan === true) {
          var b = arr[i+1];
          arr[i+1] = arr[i];
          arr[i] = b;
          madeAnySwaps = true;
        }
        innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop);
      });
    } else if (i == (arr.length - 1)) {
      outerBubbleSortLoop(madeAnySwaps);
    }
  }

  function outerBubbleSortLoop(madeAnySwaps) {
    if(madeAnySwaps == true) {
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    } else {
      sortCompletionCallback(arr);
    }
  }

  function askIfGreaterThan(el1, el2, callback) {
    reader.question(
      "Is " +
      el1 +
      " greater than " +
      el2 + "? (yes or no)", function (response) {

      var res = response;
      if (res === 'yes') {
        callback(true);
      } else if (res === 'no') {
        callback(false);
      } else {
        askIfGreaterThan(el1, el2, callback);
      }
    });
  }

  innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
}

absurdBubbleSort([3, 2, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});
