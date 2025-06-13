function addNumbers(a, b) {
  return a + b;
}

function multiplyNumbers(a, b) {
  return a * b;
}

console.log(addNumbers(5, 10)); // Output: 15
console.log(addNumbers(-3, 7)); // Output: 4

// Function to calculate the total cost of the pizza order
function calculateTotalCost(
  basePrice,
  toppingsPrice,
  selectedToppings,
  deliveryFee
) {
  let totalCost = basePrice + toppingsPrice * selectedToppings;
  if (deliveryFee) {
    totalCost += 5; // Add delivery fee if selected
  }
  return totalCost;
}

// Event listener for form submission
document
  .getElementById("pizza-order-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting normally

    // Base price and toppings price
    const basePrice = 10;
    const toppingsPrice = 2;

    // Get selected toppings
    const toppings = document.querySelectorAll('input[name="topping"]:checked');
    const selectedToppings = toppings.length;

    // Check if delivery is selected
    const deliveryCheckbox = document.getElementById("delivery");
    const deliveryFee = deliveryCheckbox.checked;

    // Calculate total cost
    const totalCost = calculateTotalCost(
      basePrice,
      toppingsPrice,
      selectedToppings,
      deliveryFee
    );

    // Update the total cost on the page
    const totalCostElement = document.getElementById("total");
    totalCostElement.textContent = `Total Cost: $${totalCost}`;
  });
