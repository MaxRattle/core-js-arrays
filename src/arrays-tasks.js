/* ********************************************************************************************
 *                                                                                            *
 * Please read the following tutorial before implementing tasks:                               *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array     *
 *                                                                                            *
 * NOTE : Please do not use loops! All tasks can be implemented using standard Array methods  *
 *                                                                                            *
 ******************************************************************************************** */

/**
 * Creates an array of integers from the specified start to end (inclusive).
 *
 * @param {number} start - The first number of an array.
 * @param {number} end - The last number of an array.
 * @return {array} - An array of integers.
 *
 * @example
 *    getIntervalArray(1, 5)  => [ 1, 2, 3, 4, 5 ]
 *    getIntervalArray(-2, 2)  => [ -2, -1, 0, 1, 2 ]
 *    getIntervalArray(0, 100) => [ 0, 1, 2, ..., 100 ]
 *    getIntervalArray(3, 3) => [ 3 ]
 */
// Конфиг линтера кусок нереального сами знаете чего
// function getIntervalArray(start, end) {
//   const arr = [];
//   for (let i = start; i <= end; i += 1) {
//     arr.push(i);
//   }
//   return arr;
// }
// мде без циклов решать такие задачи садомия
function getIntervalArray(start, end) {
  let variable;
  if (start === end) {
    variable = [start];
  } else {
    variable = [start, ...getIntervalArray(start + 1, end)];
  }
  return Array.from(variable);
}

/**
 * Returns a new array where each element is the sum of the corresponding elements
 * from two arrays. Arrays can have different lengths.
 *
 * @param {array} arr1 - The first array.
 * @param {array} arr2 - The second array.
 * @return {array} - An array containing the sum of corresponding elements.
 *
 * @example
 *    sumArrays([1, 2, 3], [4, 5, 6]) => [5, 7, 9]
 *    sumArrays([10, 20, 30], [5, 10, 15]) => [15, 30, 45]
 *    sumArrays([-1, 0, 1], [1, 2, 3, 4]) => [0, 2, 4, 4]
 */
// нот бед, хоть и не сразу // жаль нельзя циклы
// function sumArrays(arr1, arr2) {
//   let resultArr = [];
//   if (arr1.length > arr2.length) {
//     while (arr2.length !== arr1.length) {
//       arr2.push(0);
//     }
//     resultArr = arr1.map((el, index) => el + arr2[index]);
//   }
//   if (arr1.length < arr2.length) {
//     while (arr1.length !== arr2.length) {
//       arr1.push(0);
//     }
//     resultArr = arr2.map((el, index) => el + arr1[index]);
//   }
//   if (arr1.length === arr2.length) {
//     resultArr = arr1.map((el, index) => el + arr2[index]);
//   }
//   return resultArr;
// }
function sumArrays(arr1, arr2) {
  const maxLength = Math.max(arr1.length, arr2.length);
  const arr1Arg = arr1.concat(Array(maxLength - arr1.length).fill(0));
  const arr2Arg = arr2.concat(Array(maxLength - arr2.length).fill(0));
  return arr1Arg.map((el, index) => el + arr2Arg[index]);
}

/**
 * Returns an index of the specified element in array or -1 if element is not found.
 *
 * @param {array} arr - The input array.
 * @param {any} value - Element to search.
 * @return {number} - An index of the specified element.
 *
 * @example
 *    findElement(['Ace', 10, true], 10) => 1
 *    findElement(['Array', 'Number', 'string'], 'Date') => -1
 *    findElement([0, 1, 2, 3, 4, 5], 5) => 5
 */
// не оптимально
// function findElement(arr, value) {
//   return arr.findIndex((element) => element === value);
// }
// можно и так
function findElement(arr, value) {
  return arr.indexOf(value);
}

/**
 * Returns a number of all occurrences of the specified item in an array.
 *
 * @param {array} arr - The input array.
 * @param {any} item - Element to search.
 * @return {number} - Number of found items.
 *
 * @example
 *    findAllOccurrences([ 0, 0, 1, 1, 1, 2 ], 1) => 3
 *    findAllOccurrences([ 1, 2, 3, 4, 5 ], 0) => 0
 *    findAllOccurrences([ 'a','b','c','c' ], 'c') => 2
 *    findAllOccurrences([ null, undefined, null ], null) => 2
 *    findAllOccurrences([ true, 0, 1, 'true' ], true) => 1
 */
// найс
function findAllOccurrences(arr, item) {
  return arr.reduce((count, el) => (el === item ? count + 1 : count), 0);
}

/**
 * Removes falsy values from the specified array.
 * Falsy values: false, null, 0, "", undefined, and NaN.
 *
 * @param {array} arr - The input array.
 * @return {array} - The array without falsy values.
 *
 * @example
 *    removeFalsyValues([ 0, false, 'cat', NaN, true, '' ]) => [ 'cat', true ]
 *    removeFalsyValues([ 1, 2, 3, 4, 5, 'false' ]) => [ 1, 2, 3, 4, 5, 'false' ]
 *    removeFalsyValues([ false, 0, NaN, '', undefined ]) => [ ]
 */
// боже какой я красавец, чисто как кристалл
function removeFalsyValues(arr) {
  return arr.filter((el) => Boolean(el) === true);
}

/**
 * Returns an array containing the lengths of each string in a specified array of strings.
 *
 * @param {array} arr - The input array.
 * @return {array} - The array of string lengths.
 *
 * @example
 *    getStringsLength([ '', 'a', 'bc', 'def', 'ghij' ]) => [ 0, 1, 2, 3, 4 ]
 *    getStringsLength([ 'angular', 'react', 'ember' ]) => [ 7, 5, 5 ]
 */
// БОЛЬШОЕ спасибо за линтер
// function getStringsLength(arr) {
//   return arr.map((el) => (el = el.length));
// }
function getStringsLength(arr) {
  return arr.map((el) => el.length);
}

/**
 * Returns the average of all items in the specified array of numbers.
 * The result should be rounded to two decimal places.
 *
 * @param {array} arr - The input array
 * @return {number} - The average of all items
 *
 * @example
 *   getAverage([]) => 0
 *   getAverage([ 1, 2, 3 ]) => 2
 *   getAverage([ -1, 1, -1, 1 ]) => 0
 *   getAverage([ 1, 10, 100, 1000 ])  => 277,75
 *   getAverage([ 2, 3, 3 ])  => 2,67
 */
// тесты вау просто
// function getAverage(arr) {
//   const lengthArr = arr.length;
//   const numberArr = Number(arr.reduce((sum, el) => sum + el, 0));
//   return Number.isNaN(numberArr) || lengthArr === 0
//     ? NaN
//     : numberArr / lengthArr;
// }
// вроде просто было
function getAverage(arr) {
  if (arr.length === 0) {
    return 0;
  }

  const sum = arr.reduce((total, el) => total + el, 0);
  const average = sum / arr.length;
  return parseFloat(average.toFixed(2));
}

/**
 * Checks if all strings in an array have the same length.
 *
 * @param {array} arr - The array of strings to be checked.
 * @return {boolean} - True if all strings have the same length, false otherwise.
 *
 * @example
 *    isSameLength(['orange', 'banana', 'cherry']) => true
 *    isSameLength(['cat', 'dog', 'elephant']) => false
 */
// заглянул в тесты и изи оказалось, забыл что такое есть
function isSameLength(arr) {
  return arr.every((el) => el.length === arr[0].length);
}

/**
 * Checks if there are elements in the array where the value is equal to its index.
 *
 * @param {array} arr - The array of elements to be checked.
 * @return {boolean} - True if there are elements with value equal to their index, false otherwise.
 *
 * @example
 *    isValueEqualsIndex([0, 1, 2, 3, 4]) => true
 *    isValueEqualsIndex([2, 1, 0, 4, 5]) => true
 *    isValueEqualsIndex([10, 20, 30, 40, 50]) => false
 */
// решил, но почему-то не оптимально (а нужен some) странно кнч ну лан САМ
// function isValueEqualsIndex(arr) {
//   return arr.every((el) => el <= arr.length);
// }
function isValueEqualsIndex(arr) {
  return arr.some((el) => el <= arr.length);
}

/**
 * Inserts the item into specified array at specified index.
 *
 * @param {array} arr - The input array.
 * @param {any} item - The item to insert.
 * @param {number} index - Specified index.
 *
 * @example
 *    insertItem([ 1, 3, 4, 5 ], 2, 1)  => [ 1, 2, 3, 4, 5 ]
 *    insertItem([ 1, 'b', 'c'], 'x', 0) => [ 'x', 1, 'b', 'c' ]
 */
// изи, но как же странно работает splice
function insertItem(arr, item, index) {
  arr.splice(index, 0, item);
  return arr;
}

/**
 * Returns the n first items of the specified array.
 *
 * @param {array} arr - The input array.
 * @param {number} n - Number of items.
 *
 * @example
 *    getHead([ 1, 3, 4, 5 ], 2) => [ 1, 3 ]
 *    getHead([ 'a', 'b', 'c', 'd'], 3) => [ 'a', 'b', 'c' ]
 *    getHead([ 'a', 'b', 'c', 'd'], 0) => []
 */
// быстро управился
function getHead(arr, n) {
  return arr.slice(0, n);
}

/**
 * Returns the n last items of the specified array.
 *
 * @param {array} arr - The input array.
 * @param {number} n - Number of items.
 *
 * @example
 *    getTail([ 1, 3, 4, 5 ], 2) => [ 4, 5 ]
 *    getTail([ 'a', 'b', 'c', 'd'], 3) => [ 'b', 'c', 'd' ]
 *    getTail([ 'a', 'b', 'c', 'd'], 0) => []
 */
// Сам, пришлос чуть подумать
function getTail(arr, n) {
  return arr.length !== 0 && n !== 0 ? arr.slice(-n, arr.length) : [];
}

/**
 * Returns the doubled array - elements of the specified array
 * are repeated twice using original order.
 *
 * @param {array} arr - The input array.
 * @return {array} - The doubled array.
 *
 * @example
 *    doubleArray(['Ace', 10, true])  => ['Ace', 10, true, 'Ace', 10, true]
 *    doubleArray([0, 1, 2, 3, 4, 5]) => [0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5]
 *    doubleArray([]) => []
 */
// Вери быстро
function doubleArray(arr) {
  return arr.concat(arr);
}

/**
 * Concatenates all elements from specified array into single string with ',' delimiter.
 *
 * @param {array} arr - The input array.
 * @return {string} - The concatenated string.
 *
 * @example
 *    toStringList([0, false, 'cat', NaN, true, '']) => '0,false,cat,NaN,true,'
 *    toStringList([1, 2, 3, 4, 5]) => '1,2,3,4,5'
 *    toStringList(['rock', 'paper', 'scissors']) => 'rock,paper,scissors'
 */
// Еще раз вери просто
function toStringList(arr) {
  return arr.toString().split(' ').join('');
}

/**
 * Returns array containing only unique values from the specified array.
 *
 * @param {array} arr - The input array.
 * @return {array} - The array with unique values.
 *
 * @example
 *   distinct([ 1, 2, 3, 3, 2, 1 ]) => [ 1, 2, 3 ]
 *   distinct([ 'a', 'a', 'a', 'a' ])  => [ 'a' ]
 *   distinct([ 1, 1, 2, 2, 3, 3, 4, 4]) => [ 1, 2, 3, 4]
 *   distinct([]) => []
 */
// Даже не знал про такие возможности, но тест помог
function distinct(arr) {
  const setArr = new Set(arr);
  const setArrToMap = [...setArr];
  return setArrToMap;
}

/**
 * Creates an n-dimensional array and fills it with zeros.
 *
 * @param {number} n - Depth of outter array (n > 0).
 * @param {number} size - Length of all arrays (size > 0).
 * @return {array} - The n-dimensional array filled with zeros.
 *
 * @example
 *    createNDimensionalArray(2, 3) => [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
 *    createNDimensionalArray(3, 2) => [[[0, 0], [0, 0]], [[0, 0], [0, 0]]]
 *    createNDimensionalArray(4, 2) => [[[[0, 0], [0, 0]], [[0, 0], [0, 0]]], [[[0, 0], [0, 0]], [[0, 0], [0, 0]]]]
 *    createNDimensionalArray(1, 1) => [0]
 */
// Не сами знаете кто, но поучительно, рекурсия кнч творит магию
function createNDimensionalArray(n, size) {
  let result;
  if (n === 1) {
    result = Array(size).fill(0);
  } else {
    result = Array(size).fill(createNDimensionalArray(n - 1, size));
  }
  return result;
}

/**
 * Flattens a nested array into a single-level array.
 *
 * @param {array} nestedArray - The nested array to be flattened.
 * @return {array} - A single-level array.
 *
 * @example
 *    flattenArray([1, [2, [3, 4], 5], 6]) => [1, 2, 3, 4, 5, 6]
 *    flattenArray(['a', ['b', ['c', 'd'], 'e'], 'f']) => ['a', 'b', 'c', 'd', 'e', 'f']
 *    flattenArray([1, 2, 3, 4]) => [1, 2, 3, 4]
 */
// надо разобратся с рекурсией, а то ппц важно //странно а в тесте првоерка на flat()
function flattenArray(nestedArray) {
  return nestedArray.reduce((acc, curr) => {
    if (Array.isArray(curr)) {
      return acc.concat(flattenArray(curr));
    }
    return acc.concat(curr);
  }, []);
}

/**
 * Projects each element of the specified array to a sequence
 * and flattens the resulting sequences into one array.
 *
 * @param {array} arr - The input array
 * @param {Function} childrenSelector - A transform function to apply to each element
 *                                     that returns an array of children
 * @return {array} - The flatted array
 *
 * @example
 *   selectMany([[1, 2], [3, 4], [5, 6]], (x) => x) =>   [ 1, 2, 3, 4, 5, 6 ]
 *   selectMany(['one','two','three'], (x) => x.split('')) =>   ['o','n','e','t','w','o','t','h','r','e','e']
 */
// flatMap сочетает flat() + map()
function selectMany(arr, childrenSelector) {
  return arr.flatMap(childrenSelector);
}

/**
 * Every month, you record your income and expenses.
 * Expenses may be greater than income.
 * You need to calculate the final balance.
 *
 * @param {array} arr - The input array [[income, expence], ...]
 * @return {number} - The final balance.
 *
 * @example
 *   calculateBalance([ [ 10, 8 ], [ 5, 1 ] ]) => (10 - 8) + (5 - 1) = 2 + 4 = 6
 *   calculateBalance([ [ 10, 8 ], [ 1, 5 ] ])  => (10 - 8) + (1 - 5) = 2 + -4 = -2
 *   calculateBalance([]) => 0
 */
// мое решение правильное, но не нравится, как-то по-другому можно
// function calculateBalance(arr) {
//   if (arr.length > 0) {
//     return (
//       arr.flatMap((el) => el).reduce((current, item) => item - current) * -1
//     );
//   }
//   return 0;
// }
// лучшее решение //мне не понятно как работает этот метод до конца
function calculateBalance(arr) {
  return arr.reduce((total, [income, expense]) => total + income - expense, 0);
}

/**
 * Breaks an array into chunks of the specified size.
 *
 * @param {array} arr - The array to be broken into chunks.
 * @param {number} chunkSize - The size of each chunk.
 * @return {array} - An array of chunks.
 *
 * @example
 *    createChunks([1, 2, 3, 4, 5, 6, 7], 3) => [[1, 2, 3], [4, 5, 6], [7]]
 *    createChunks(['a', 'b', 'c', 'd', 'e'], 2) => [['a', 'b'], ['c', 'd'], ['e']]
 *    createChunks([10, 20, 30, 40, 50], 1) => [[10], [20], [30], [40], [50]]
 */
// не понял, как же трудно понять reduce
function createChunks(arr, chunkSize) {
  return arr.reduce((chunks, _, index) => {
    if (index % chunkSize === 0) {
      chunks.push(arr.slice(index, index + chunkSize));
    }
    return chunks;
  }, []);
}

/**
 * Generates an array of odd numbers of the specified length.
 *
 * @param {number} len - The length of an array.
 * @return {array} - An array of odd numbers.
 *
 * @example
 *    generateOdds(0) => []
 *    generateOdds(1) => [ 1 ]
 *    generateOdds(2) => [ 1, 3 ]
 *    generateOdds(5) => [ 1, 3, 5, 7, 9 ]
 */
// гениально, но не сами знаете кто
function generateOdds(len) {
  return Array.from({ length: len }, (_, index) => index * 2 + 1);
}

/**
 * Returns an element from the multidimensional array by the specified indices.
 *
 * @param {array} arr - The input multidimensional array
 * @param {array} indices - The array of indices
 * @return {any} - An element from the array
 *
 * @example
 *   getElementByIndices([[1, 2], [3, 4], [5, 6]], [0,0]) => 1        (arr[0][0])
 *   getElementByIndices(['one','two','three'], [2]) => 'three'  (arr[2])
 *   getElementByIndices([[[ 1, 2, 3]]], [ 0, 0, 1 ]) => 2        (arr[0][0][1])
 */
// какой-то лютый ад когда вложенность и рекурсия
function getElementByIndices(arr, indices) {
  if (indices.length === 0) {
    return arr;
  }
  const index = indices[0];
  const subArr = arr[index];
  const remainingIndices = indices.slice(1);
  return getElementByIndices(subArr, remainingIndices);
}

/**
 * Returns the number of all falsy values in the specified array.
 *
 * @param {array} arr - The input array.
 * @return {number} - The number of all falsy values.
 *
 * @example
 *  getFalsyValuesCount([]) => 0
 *  getFalsyValuesCount([ 1, '', 3 ]) => 1
 *  getFalsyValuesCount([ -1, 'false', null, 0 ]) => 2
 *  getFalsyValuesCount([ null, undefined, NaN, false, 0, '' ]) => 6
 */
// САМОстоятельный
function getFalsyValuesCount(arr) {
  return arr.reduce(
    (acc, item) =>
      item === '' ||
      String(item).length === 0 ||
      item === false ||
      item === null ||
      item === undefined ||
      item === 0 ||
      Number.isNaN(item)
        ? acc + 1
        : acc,
    0
  );
}

/**
 * Creates an identity matrix of the specified size.
 *
 * @param {number} n - A size of the matrix.
 * @return {array} - An identity matrix.
 *
 * @example
 *     getIdentityMatrix(1)  => [[1]]
 *
 *     getIdentityMatrix(2) => [[1,0],
 *                             [0,1]]
 *
 *                              [[1,0,0,0,0],
 *                              [0,1,0,0,0],
 *     getIdentityMatrix(5) =>  [0,0,1,0,0],
 *                              [0,0,0,1,0],
 *                              [0,0,0,0,1]]
 */
// уже вижу что это МЕССИВО
function getIdentityMatrix(n) {
  return Array.from({ length: n }, (_, i) =>
    Array.from({ length: n }, (__, j) => (i === j ? 1 : 0))
  );
}

/**
 * Returns an array containing indices of odd elements in the input array.
 *
 * @param {array} numbers - The array of numbers.
 * @return {array} - An array containing indices of odd elements.
 *
 * @example
 *    getIndicesOfOddNumbers([1, 2, 3, 4, 5]) => [0, 2, 4]
 *    getIndicesOfOddNumbers([2, 4, 6, 8, 10]) => []
 *    getIndicesOfOddNumbers([11, 22, 33, 44, 55]) => [0, 2, 4]
 */
// ПОЧТИ, ну если бы чуть дольше посидел // небольшая паранойа, теперь везде хочется юзать reduce
function getIndicesOfOddNumbers(numbers) {
  if (numbers.length === 0) {
    return [];
  }
  return numbers.flatMap((item, index) => (item % 2 !== 0 ? [index] : []));
}

/**
 * Returns the array of RGB Hex strings from the specified array of numbers.
 *
 * @param {array} arr - The input array.
 * @return {array} - The array of RGB Hex strings.
 *
 * @example
 *    getHexRGBValues([ 0, 255, 16777215]) => [ '#000000', '#0000FF', '#FFFFFF' ]
 *    getHexRGBValues([]) => []
 */
// такое мы скипаем //лень было
function getHexRGBValues(arr) {
  return arr.map((num) => {
    const hex = num.toString(16).toUpperCase().padStart(6, '0');
    return `#${hex}`;
  });
}

/**
 * Returns the n largest values from the specified array
 *
 * @param {array} arr - The input array
 * @param {number} n - Number of maximum values.
 * @return {array} - n largest values.
 *
 * @example
 *   getMaxItems([], 5) => []
 *   getMaxItems([ 1, 2 ], 1) => [ 2]
 *   getMaxItems([ 2, 3, 1 ], 2) => [ 3, 2]
 *   getMaxItems([ 10, 2, 7, 5, 3, -5 ], 3) => [ 10, 7, 5 ]
 *   getMaxItems([ 10, 10, 10, 10 ], 3) => [ 10, 10, 10 ]
 */
// Крутое решение, лень было
function getMaxItems(arr, n) {
  if (arr.length === 0) {
    return [];
  }
  arr.sort((a, b) => b - a);
  return arr.slice(0, n);
}

/**
 * Finds and returns an array containing only the common elements found in two arrays.
 *
 * @param {array} arr1 - The first array.
 * @param {array} arr2 - The second array.
 * @return {array} - An array containing common elements.
 *
 * @example
 *    findCommonElements([1, 2, 3], [2, 3, 4]) => [ 2, 3 ]
 *    findCommonElements(['a', 'b', 'c'], ['b', 'c', 'd']) => [ 'b', 'c' ]
 *    findCommonElements([1, 2, 3], ['a', 'b', 'c']) => []
 */
// надо запомнить filter
function findCommonElements(arr1, arr2) {
  return arr1.filter((item) => arr2.includes(item));
}

/**
 * Finds the length of the longest increasing subsequence of a given array of integers.
 *
 * @param {array} nums - The array of integers.
 * @return {number} - The length of the longest increasing subsequence.
 *
 * @example
 *    findLongestIncreasingSubsequence([10, 22, 9, 33, 21, 50, 41, 60, 80]) => 3
 *    findLongestIncreasingSubsequence([3, 10, 2, 1, 20]) => 2
 *    findLongestIncreasingSubsequence([50, 3, 10, 7, 40, 80]) => 3
 */
// без идей как это решать // фак, какой же ебнй линтер //мега лупа
function findLongestIncreasingSubsequence(nums) {
  let count = 0;
  return nums
    .reduce((acc, elem, index) => {
      if (index === 0) count += 1;
      if (elem > nums[index - 1]) {
        count += 1;
      } else {
        acc.push(count);
        count = 1;
      }

      if (index === nums.length - 1) acc.push(count);
      return acc;
    }, [])
    .sort((a, b) => b - a)[0];
}

/**
 * Propagates every item in sequence its position times
 * Returns an array that consists of: one first item, two second items, three third items etc.
 *
 * @param {array} arr - The input array
 * @return {array}
 *
 * @example :
 *  propagateItemsByPositionIndex([]) => []
 *  propagateItemsByPositionIndex([ 1 ]) => [ 1 ]
 *  propagateItemsByPositionIndex([ 'a', 'b' ]) => [ 'a', 'b','b' ]
 *  propagateItemsByPositionIndex([ 'a', 'b', 'c', null ]) => [ 'a', 'b', 'b', 'c', 'c', 'c',  null, null, null, null ]
 *  propagateItemsByPositionIndex([ 1,2,3,4,5 ]) => [ 1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5 ]
 */
// не вникал я
function propagateItemsByPositionIndex(arr) {
  return arr.reduce(
    (result, item, index) => result.concat(Array(index + 1).fill(item)),
    []
  );
}

/**
 * Shifts an array by n positions. If n is negative, the array is shifted to the left;
 * if positive, it is shifted to the right.
 *
 * @param {array} arr - The array to be shifted.
 * @param {number} n - The number of positions to shift the array elements.
 * @return {array} - The shifted array.
 *
 * @example
 *    shiftArray([1, 2, 3, 4, 5], 2) => [4, 5, 1, 2, 3]
 *    shiftArray(['a', 'b', 'c', 'd'], -1) => ['b', 'c', 'd', 'a']
 *    shiftArray([10, 20, 30, 40, 50], -3) => [40, 50, 10, 20, 30]
 */
// ща попробую //не понял задания // не сами знаете кто
function shiftArray(arr, n) {
  if (n === 0) {
    return arr;
  }
  if (n > 0) {
    return arr.slice(-n).concat(arr.slice(0, -n));
  }
  return arr.slice(-n).concat(arr.slice(0, -n));
}

/**
 * Sorts digit names.
 *
 * @param {array} arr - The input array.
 * @return {array} - Sorted array.
 *
 * @example
 *   sortDigitNamesByNumericOrder([]) => []
 *   sortDigitNamesByNumericOrder([ 'nine','one' ]) => [ 'one', 'nine' ]
 *   sortDigitNamesByNumericOrder([ 'one','two','three' ]) => [ 'one','two', 'three' ]
 *   sortDigitNamesByNumericOrder([ 'nine','eight','nine','eight' ]) => [ 'eight','eight','nine','nine']
 *   sortDigitNamesByNumericOrder([ 'one','one','one','zero' ]) => [ 'zero','one','one','one' ]
 */
// надо запомнить, но не та дам знаете кто
function sortDigitNamesByNumericOrder(arr) {
  const sortOrder = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  return arr.sort((a, b) => sortOrder.indexOf(a) - sortOrder.indexOf(b));
}

/**
 * Swaps the head and tail of the specified array:
 * the head (first half) of array move to the end, the tail (last half) move to the start.
 * The middle element (if exists) leave on the same position. *
 *
 * @param {array} arr - The input array.
 * @return {array} - The swapped array.
 *
 * @example
 *   [ 1, 2, 3, 4, 5 ]   =>  [ 4, 5, 3, 1, 2 ]
 *    \----/   \----/
 *     head     tail
 *
 *   swapHeadAndTail([ 1, 2 ]) => [ 2, 1 ]
 *   swapHeadAndTail([ 1, 2, 3, 4, 5, 6, 7, 8 ]) =>  [ 5, 6, 7, 8, 1, 2, 3, 4 ]
 *   swapHeadAndTail([ 1 ]) => [ 1 ]
 *   swapHeadAndTail([]) => []
 *
 */
// моя нервная система погибла и сопротивляется думать
function swapHeadAndTail(arr) {
  const mid = Math.floor(arr.length / 2);
  if (arr.length % 2 === 0) {
    return [...arr.slice(mid), ...arr.slice(0, mid)];
  }
  return [...arr.slice(mid + 1), arr[mid], ...arr.slice(0, mid)];
}

module.exports = {
  getIntervalArray,
  sumArrays,
  findElement,
  findAllOccurrences,
  removeFalsyValues,
  getStringsLength,
  getAverage,
  isSameLength,
  isValueEqualsIndex,
  insertItem,
  getHead,
  getTail,
  doubleArray,
  toStringList,
  distinct,
  createNDimensionalArray,
  flattenArray,
  selectMany,
  calculateBalance,
  createChunks,
  generateOdds,
  getElementByIndices,
  getFalsyValuesCount,
  getIdentityMatrix,
  getIndicesOfOddNumbers,
  getHexRGBValues,
  getMaxItems,
  findCommonElements,
  findLongestIncreasingSubsequence,
  propagateItemsByPositionIndex,
  shiftArray,
  sortDigitNamesByNumericOrder,
  swapHeadAndTail,
};
