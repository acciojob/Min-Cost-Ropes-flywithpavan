function mincost(arr) {
  if (arr.length <= 1) return { message: 0 }; // no cost if only 1 rope

  // Min heap using simple sort approach
  let heap = [...arr].sort((a, b) => a - b);
  let totalCost = 0;

  while (heap.length > 1) {
    // take two smallest
    let first = heap.shift();
    let second = heap.shift();

    let cost = first + second;
    totalCost += cost;

    // insert back and maintain sorted order
    heap.push(cost);
    heap.sort((a, b) => a - b);
  }

  return { message: totalCost };
}

module.exports = mincost;


console.log(mincost([4, 3, 2, 6])); // { message: 29 }
console.log(mincost([1, 2, 3, 4, 5])); // { message: 33 }
console.log(mincost([7, 8])); // { message: 15 }
console.log(mincost([1, 1, 1, 1])); // { message: 8 }

