// QUESTION 1
document.getElementById("checkAge").addEventListener("click", function () {
  const ageInput = document.getElementById("age");
  const age = Number(ageInput.value);
  const result = document.getElementById("ageResult");

  if (!ageInput.value.trim()) {
    result.textContent = "Please enter a value!";
    console.log("Enter value");
    result.style.color = "var(--accent-3)";
    return;
  }

  if (isNaN(age) || age < 0) {
    result.textContent = "Please enter a valid age!";
    console.log("Invalid age");
    result.style.color = "var(--accent-3)";
  } else if (age >= 18) {
    result.textContent = "You are eligible to vote!";
    console.log("Eligible");
    result.style.color = "var(--accent-2)";
  } else {
    result.textContent = "You are not eligible to vote!";
    console.log("Young");
    result.style.color = "var(--accent-4)";
  }
});

// QUESTION 2
let cart = [];

function addToCart(item, price) {
  if (!item || isNaN(price) || price <= 0) {
    return "Invalid item or price";
  }
  cart.push({ item, price });
  return "✅ Item added to cart";
}

function calculateTotal() {
  return cart.reduce((sum, item) => sum + item.price, 0);
}

function updateCartDisplay() {
  const cartList = document.getElementById("cartList");
  cartList.innerHTML = "";

  cart.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.item}: $${item.price.toFixed(2)}`;
    cartList.appendChild(li);
  });

  document.getElementById(
    "cartTotal"
  ).textContent = `Total: $${calculateTotal().toFixed(2)}`;
}

document.getElementById("addItem").addEventListener("click", function () {
  const name = document.getElementById("itemName").value.trim();
  const price = parseFloat(document.getElementById("itemPrice").value.trim());

  const message = addToCart(name, price);
  console.log(message);
  alert(message);
  updateCartDisplay();

  document.getElementById("itemName").value = "";
  document.getElementById("itemPrice").value = "";
});

// QUESTION 3
// 1. while loop
function generateCountdown() {
  const num = document.getElementById("countInput").valueAsNumber;
  const list = document.getElementById("countdownList");
  list.innerHTML = "";

  let i = num;
  while (i >= 0) {
    const li = document.createElement("li");
    li.textContent = i;
    list.appendChild(li);
    i--;
  }
}

// 2. for loop
function generateTable() {
  const num = document.getElementById("tableInput").valueAsNumber;
  const table = document.getElementById("tableOutput");
  table.innerHTML = "";

  if (isNaN(num) || num <= 0) {
    table.innerHTML = "<tr><td>Please enter a valid positive number.</td></tr>";
    return;
  }

  let header = "<tr><th>Expression</th><th>Result</th></tr>";
  table.innerHTML = header;

  for (let i = 1; i <= 6; i++) {
    let row = `<tr><td>${num} × ${i}</td><td>${num * i}</td></tr>`;
    table.innerHTML += row;
  }
}

// 3.  forEach
function showFruits() {
  const fruits = [
    "🍎 Apple",
    "🍌 Banana",
    "🍊 Orange",
    "🍇 Grapes",
    "🥭 Mango",
  ];

  const list = document.getElementById("fruitList");
  list.innerHTML = ""; 

  fruits.forEach((fruit, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}. ${fruit}`;
    li.classList.add("fruit-item");
    list.appendChild(li);
  });
}


// DOM
function changeText() {
  const text = document.getElementById("domText");
  text.textContent = "🎉 The text has been changed dynamically!";
}

function toggleHighlight() {
  const text = document.getElementById("domText");
  text.classList.toggle("highlight");
}

function addNewElement() {
  const container = document.getElementById("extraElements");
  const newPara = document.createElement("p");
  newPara.textContent = "✨ A new element has been added!";
  newPara.classList.add("new-item");
  container.appendChild(newPara);
}
