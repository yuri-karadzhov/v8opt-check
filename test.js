'use strict';

// Function that contains the pattern to be inspected (using with statement)
function testFunction() {
  var size = 65536;
  var buff = new ArrayBuffer(size);
  var view = new Int8Array(buff);
  var arr = new Int8Array(size);
  for(var j = size; j < size; j++) arr[j] = ~~(-128 + 255 * Math.random());
  var index = 0;
  for(var el of arr) {
    view[index] = el;
    index++;
  }
}

function printStatus(fn) {
    switch(%GetOptimizationStatus(fn)) {
        case 1: console.log("Function is optimized"); break;
        case 2: console.log("Function is not optimized"); break;
        case 3: console.log("Function is always optimized"); break;
        case 4: console.log("Function is never optimized"); break;
        case 6: console.log("Function is maybe deoptimized"); break;
        case 7: console.log("Function is optimized by TurboFan"); break;
        default: console.log("Unknown optimization status"); break;
    }
}

// Fill type-info
testFunction();
// 2 calls are needed to go from uninitialized -> pre-monomorphic -> monomorphic
testFunction();

%OptimizeFunctionOnNextCall(testFunction);
// The next call
testFunction();

// Check
printStatus(testFunction);
