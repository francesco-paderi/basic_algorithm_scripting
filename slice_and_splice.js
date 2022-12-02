/* You are given two arrays and an index.
Copy each element of the first array into the second array, in order.
Begin inserting elements at index n of the second array.
Return the resulting array. The input arrays should remain the same after the function runs. */

//SOLUTION 1
function frankenSplice(arr1, arr2, n) {
    let localArray = arr2.slice();
    for (let i = 0; i < arr1.length; i++) {
        localArray.splice(n ,0 , arr1[i]);
        n++;
    }
    return localArray;
}
  
  console.log(frankenSplice([1, 2], ["a", "b"], 1)); //[ 'a', 1, 2, 'b' ]

  //SOLUTION 2
function frankenSplice2(arr1, arr2, n){
    let localArr = arr2.slice();
    localArr.splice(n, 0, ...arr1);
    return localArr;
}

//SOLUTION 3
function frankenSplice3(arr1, arr2, n) {
    return [...arr2.slice(0, n), ...arr1, ...arr2.slice(n)]
}
