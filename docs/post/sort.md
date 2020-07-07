## 四种排序

测试过程中发现，数组长度大于 10000 之后，快速排序的时间无明显波动，但超过 1000000 之后会爆栈

```javascript
/**
 * 生成 n 个随机数
 */
function getRandomArr(n) {
  return Array(n)
    .fill(1)
    .map(() => Math.floor(Math.random() * 100));
  // return [6, 5, 4, 3, 2, 1]
}

/**
 * 交换值
 */
function swap(arr, indexA, indexB) {
  let c = arr[indexA];
  arr[indexA] = arr[indexB];
  arr[indexB] = c;
}

/**
 * 冒泡排序
 */
function buddleSort(arr) {
  let length = arr.length;
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      if (arr[j] < arr[i]) {
        swap(arr, i, j);
      }
    }
  }
  return arr;
}

/**
 * 选择排序
 */
function selectionSort(arr) {
  let length = arr.length;
  for (let i = 0; i < length; i++) {
    let k = i;
    for (let j = i + 1; j < length; j++) {
      if (arr[j] < arr[k]) {
        k = j;
      }
    }
    if (k !== i) {
      swap(arr, i, k);
    }
  }
  return arr;
}

/**
 * 插入排序
 */
function insertionSort(arr) {
  let length = arr.length;
  for (let i = 1; i < length; i++) {
    for (let j = i; j >= 0; j--) {
      if (j === 0 || arr[i] > arr[j - 1]) {
        if (j !== i) {
          let temp = arr[i];
          arr.splice(i, 1);
          arr.splice(j, 0, temp);
        }
        break;
      }
    }
  }
  return arr;
}

/**
 * 快速排序
 */
function quickSort(arr) {
  let length = arr.length;
  if (length < 2) {
    return arr;
  } else if (length === 2) {
    if (arr[0] > arr[1]) {
      swap(arr, 0, 1);
    }
    return arr;
  } else {
    let middleIndex = Math.floor(length / 2);
    let leftArr = [];
    let rightArr = [];
    for (let i = 0; i < length; i++) {
      if (i === middleIndex) {
        continue;
      }
      let temp = arr[i];
      if (temp <= arr[middleIndex]) {
        leftArr.push(temp);
      } else {
        rightArr.push(temp);
      }
    }
    return [...quickSort(leftArr), arr[middleIndex], ...quickSort(rightArr)];
  }
}

function getSortTime(sortFunc, length = 20000, number = 1) {
  let time = Date.now();
  for (let i = 0; i < number; i++) {
    sortFunc(getRandomArr(length));
  }
  console.log("时间：" + (Date.now() - time) / 1000);
}

console.log("------- 四种排序结果：-------");
console.log("冒泡：" + buddleSort(getRandomArr(20)).join(","));
console.log("选择：" + selectionSort(getRandomArr(20)).join(","));
console.log("插入：" + insertionSort(getRandomArr(20)).join(","));
console.log("选择：" + quickSort(getRandomArr(20)).join(","));
console.log("------- 四种排序结果：-------");
console.log();
console.log();
console.log();

console.log("------- 排序时间对比：-------");
console.log("冒泡：");
getSortTime(buddleSort);
console.log("选择：");
getSortTime(selectionSort);
console.log("插入：");
getSortTime(insertionSort);
console.log("快速：");
getSortTime(quickSort);
console.log("------- 排序时间对比：-------");
```
