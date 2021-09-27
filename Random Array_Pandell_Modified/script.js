/**
 * This JS generates an array which has elements between 1 and 10000, shuffles and checks if there are any duplicates in it.
 *
 * @author  Ray Kim.
 * @since   1.0.0
 * @version September 14, 2021
 */

// Generates an array which is length of 10000.
const array = new Array(10000);

// Call the function createArray with array parameter.
createArray(array);

// Call the function randomArray with array parameter.
randomArray(array);

// Call the function checkDuplicate with array parameter.
checkDuplicate(array);

/**
 * createArray function gets an array as a parameter and generates number elements between 1 and length of the array.
 *
 * @since   1.0.0
 * @version September 14, 2021
 *
 * @param arr An array to be filled with numbers.
 */
function createArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = i + 1;
  }
  console.log(arr);
}

/**
 * randomArray function gets an array as a parameter and shuffles the elements in random order.
 *
 * @since   1.0.0
 * @version September 14, 2021
 *
 * @param arr An array to be shuffled in random order.
 */
// function randomArray(arr) {
//   const length = arr.length;
//   for (let i = 0; i < length; i++) {
//     // picks a random number
//     const rand = Math.floor(Math.random() * (length - i) + i);
//     // creates a temp variable and assigns the ith element of the array.
//     const temp = arr[i];
//     // assigns the random element into the ith element of the array
//     arr[i] = arr[rand];
//     // assigns the temp variable into the the random element of the array
//     arr[rand] = temp;
//   }
//   console.log("Array is shuffled!!");
//   console.log(arr);
// }
function randomArray(arr) {
  arr.sort(() => Math.random() - 0.5);
  console.log(arr);
  arr.sort(function () {
    return Math.random() - 0.5;
  });
  console.log(arr);
}

/**
 * checkDuplicate function checks the array if there is any duplicate elements in it.
 *
 * @since   1.0.0
 * @version September 14, 2021
 *
 * @param arr An array to be checked if there is any duplicate elements.
 */
function checkDuplicate(arr) {
  const length = arr.length;
  let chk = 0;
  const chkArray = [];

  // if the array has dupulicate elements in it, put the elements in the seperate array named chkArray.
  for (let i = 0; i < length; i++) {
    chk = 0;
    for (let j = 0; j < length; j++) {
      if (arr[i] === arr[j]) {
        chk++;
      }
    }
    if (chk > 1 && chkArray.indexOf(arr[i]) === -1) {
      chkArray.push(arr[i]);
    }
  }

  // shows logs whether there are duplicate elements in the array or not.
  if (chkArray.length < 1) {
    console.log("No duplicated element in the array!!");
  } else {
    console.log("Duplicated elements are in the array.");
    console.log(chkArray);
  }
}

let key = "randomArray";
let key1 = "randomArray1";
localStorage.setItem(key, JSON.stringify(array));
localStorage.setItem(key1, array);

const result = localStorage.getItem("randomArray");
const result1 = JSON.parse(localStorage.getItem("randomArray"));

const result2 = localStorage.getItem("randomArray1");
// const result3 = JSON.parse(localStorage.getItem("randomArray1"));

console.log(result);
console.log(result1);
console.log(result2);
// console.log(result3);
