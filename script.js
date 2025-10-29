// Function to calculate minimum cost to connect all ropes
function mincost(arr) {
  if (arr.length <= 1) return 0; // no cost if only 1 rope

  // Sort the array initially
  let heap = [...arr].sort((a, b) => a - b);
  let totalCost = 0;

  // Keep connecting ropes until one remains
  while (heap.length > 1) {
    // Take two smallest ropes
    let first = heap.shift();
    let second = heap.shift();

    // Calculate cost to connect them
    let cost = first + second;
    totalCost += cost;

    // Push new rope back and keep array sorted
    heap.push(cost);
    heap.sort((a, b) => a - b);
  }

  return totalCost;
}

// Function triggered when button is clicked
function handleCalculate() {
  const input = document.getElementById("ropeInput").value.trim();

  if (!input) {
    document.getElementById("result").textContent = "⚠️ Please enter rope lengths.";
    return;
  }

  // Convert input string to an array of numbers
  const arr = input.split(",").map(Number).filter(n => !isNaN(n) && n > 0);

  if (arr.length === 0) {
    document.getElementById("result").textContent = "⚠️ Invalid input. Enter positive numbers.";
    return;
  }

  const result = mincost(arr);
  document.getElementById("result").textContent = `✅ Minimum Cost: ${result}`;
}

// For console testing
console.log(mincost([4, 3, 2, 6])); // 29
console.log(mincost([1, 2, 3, 4, 5])); // 33
console.log(mincost([7, 8])); // 15
console.log(mincost([1, 1, 1, 1])); // 8
