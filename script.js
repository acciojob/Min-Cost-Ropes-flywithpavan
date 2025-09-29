function mincost(arr)
{ 
	class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(val) {
    this.heap.push(val);
    this._heapifyUp();
  }

  extractMin() {
    if (this.heap.length === 1) return this.heap.pop();
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this._heapifyDown();
    return min;
  }

  size() {
    return this.heap.length;
  }

  _heapifyUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let parent = Math.floor((index - 1) / 2);
      if (this.heap[parent] <= this.heap[index]) break;
      [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];
      index = parent;
    }
  }

  _heapifyDown() {
    let index = 0;
    const length = this.heap.length;

    while (true) {
      let smallest = index;
      let left = 2 * index + 1;
      let right = 2 * index + 2;

      if (left < length && this.heap[left] < this.heap[smallest]) {
        smallest = left;
      }

      if (right < length && this.heap[right] < this.heap[smallest]) {
        smallest = right;
      }

      if (smallest === index) break;

      [this.heap[smallest], this.heap[index]] = [this.heap[index], this.heap[smallest]];
      index = smallest;
    }
  }
}

function mincost(arr) {
  const heap = new MinHeap();
  arr.forEach(num => heap.insert(num));
  let totalCost = 0;

  while (heap.size() > 1) {
    const first = heap.extractMin();
    const second = heap.extractMin();
    const cost = first + second;
    totalCost += cost;
    heap.insert(cost);
  }

  return totalCost;
}

//write your code here
// return the min cost
  
}

module.exports=mincost;
