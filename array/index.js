// Array structure
// 				[elem_1, elem_2, elem_3, ... elem_n]
//
// index:    0      1					2						n-1

// MDN documentation about array
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

function arrayCreation() {
  let arrayWithInitSize = new Array(4);
  let arrayWithOneValue = new Array("5");
  let arrayWithPreset = new Array(5, 6);
  let arrayWithInitValue = Array.of(4);
  let arrayWithInitValues = Array.of(4, 5, 6);
  let simpleWayArray = ["a", "b", "c"]; //preferable way

  console.log(`\nArray creation:`);
  console.log("arrayWithInitSize: ", arrayWithInitSize);
  console.log("arrayWithOneValue: ", arrayWithOneValue);
  console.log("arrayWithPreset: ", arrayWithPreset);
  console.log("arrayWithInitValue: ", arrayWithInitValue);
  console.log("arrayWithInitValues: ", arrayWithInitValues);
  console.log("simpleWayArray: ", simpleWayArray);
}
function arrayBypass() {
  function logEachElement(array) {
    for (let i = 0; i < array.length; i++) {
      console.log(`[element with index ${i}] is ${array[i]}`);
    }
  }
  function findSum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum = sum + array[i];
    }
    console.log(`sum = ${sum}`);
    return sum;
  }
  function findMin(array) {
    let min = array[0];

    for (let i = 0; i < array.length; i++) {
      if (min > array[i]) {
        min = array[i];
      }
    }
    console.log(`min is ${min}`);
  }
  function findAvg(array) {
    let avg = findSum(array) / array.length;
    console.log(`average is ${avg}`);
  }

  console.log(`\nArray bypass:`);

  let array = [21, 22, 23, 24, 25, 26, 27];
  // logEachElement(array);

  array = [5, 1, 10, 23];
  // logEachElement(array);
  // findSum(array);
  // findMin(array);
  // findAvg(array);
}

// console.log(`\nArray structure:`);
// arrayCreation();
// arrayBypass();
