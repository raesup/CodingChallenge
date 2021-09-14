const array = new Array(10000);

createArray(array);
randomArray(array);
checkDuplicate(array);

function createArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = i + 1;
  }
  console.log(arr);
}

function randomArray(arr) {
  const length = arr.length;
  for (let i = 0; i < length; i++) {
    const rand = Math.floor(Math.random() * (length - i) + i);
    const temp = arr[i];
    arr[i] = arr[rand];
    arr[rand] = temp;
  }
  console.log("Array is shuffled!!");
  console.log(arr);
}

function checkDuplicate(arr) {
  const length = arr.length;
  let chk = 0;
  const chkArray = [];

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
  if (chkArray.length < 1) {
    console.log("No duplicated element in the array!!");
  } else {
    console.log("Duplicated elements are in the array.");
    console.log(chkArray);
  }
}
