function Find_Missing_Element(Arr) {
  let source_array_length = Arr.length;

  // To mark the occurrence of elements

  let unMarked_arr = createTempArray (source_array_length)

  // Mark the occurrences

  let Marked_arr = markArray (Arr , unMarked_arr , source_array_length)

  // Find the first element which didn't
  // appear in the original array

  return findFirstMissingElement(Marked_arr , source_array_length)

  // If the original array was of the
  // type {1, 2, 3} in its sorted form

}



const createTempArray = function (source_array_length) {
  let Presents = new Array(source_array_length + 1);
  for (let counter_num = 0; counter_num < source_array_length + 1; counter_num++) {
    Presents[counter_num] = false;
  }
  return Presents
}


const markArray = function (source_arr , unMarked_arr , source_array_length) {
  for (let counter_num = 0; counter_num < source_array_length; counter_num++) {
    // Only mark the required elements
    // All non-positive elements and
    // the elements greater n + 1 will never
    // be the answer
    // For example, the array will be {1, 2, 3}
    // in the worst case and the result
    // will be 4 which is n + 1
    if (source_arr[counter_num] > 0 && source_arr[counter_num] <= source_array_length) {
      unMarked_arr[source_arr[counter_num]] = true;
    }
  }
  return unMarked_arr
}


const findFirstMissingElement = function (Marked_arr , source_array_length) {
  for (let counter_num = 1; counter_num <= source_array_length; counter_num++) {
    if (!Marked_arr[counter_num]) {
      return counter_num;
    }
  }
  return source_array_length+1
}


console.log(Find_Missing_Element([1,2,5])) // 3
console.log(Find_Missing_Element([1,2,3])) // 4


/*
  Find_Missing_Element function Give an array arr[] of size N-1 with integers in the range of [1, N], the task is to find the missing number from the first N integers.
  if there is no missing , it returns next number of greatest element in array

*/