
function binarySerach(list, item) {
  low = 0;
  hight = list.length - 1;
  
  while (low <= hight){
    let mid = (Math.floor((low + hight) / 2));
    let guess = list[mid];
    if (guess == item) {
      return mid;
    }
    if (guess > item) {
      hight = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return null;
}

