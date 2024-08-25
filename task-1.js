function isEnoughCapacity(products, containerSize) {
  let totalQuantity = 0;

  for (const quantity of Object.values(products)) {
    totalQuantity += quantity;
  }

  return totalQuantity <= containerSize;
}

console.log(isEnoughCapacity({ apples: 2, grapes: 4 }, 6)); // true
console.log(isEnoughCapacity({ apples: 2, grapes: 4 }, 5)); // false
console.log(isEnoughCapacity({ apples: 1, bananas: 2, oranges: 3 }, 10)); // true
console.log(isEnoughCapacity({ apples: 5, bananas: 7 }, 10)); // false


