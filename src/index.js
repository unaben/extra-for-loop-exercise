const store = {
  location: "London",
  products: [
    {
      name: "iPhone 6S",
      type: "mobile",
      stock: {
        incomingDelivery: false,
        quantity: 450,
      },
      price: 600,
    },
    {
      name: "iPhone 10",
      type: "mobile",
      stock: {
        incomingDelivery: false,
        quantity: 20,
      },
      price: 1000,
    },
    {
      name: "iPhone 12",
      type: "mobile",
      stock: {
        incomingDelivery: true,
        quantity: 0,
      },
      price: 1400,
    },
    {
      name: "iPad Pro",
      type: "tablet",
      stock: {
        incomingDelivery: true,
        quantity: 100,
      },
      price: 600,
    },
    {
      name: "iPad mini",
      type: "tablet",
      stock: {
        incomingDelivery: false,
        quantity: 300,
      },
      price: 600,
    },
    {
      name: "MacBook Pro",
      type: "computer",
      stock: {
        incomingDelivery: false,
        quantity: 80,
      },
      price: 2400,
    },
    {
      name: "MacBook Air",
      type: "computer",
      stock: {
        incomingDelivery: false,
        quantity: 200,
      },
      price: 1800,
    },
    {
      name: "iMac",
      type: "computer",
      stock: {
        incomingDelivery: true,
        quantity: 15,
      },
      price: 2300,
    },
  ],
};

console.log("STORE:", store.products[0]);
// Each section needs it's own for loop
// DO NOT change any of the code
//
// For sections with "A list of..." the output should be an array full of objects
// Output:
// => [{...}, {...}, {...}]
//
// For sections with "An object..." the output should be an object
// Output:
// => {...}

// ----- Section -----

// A list of products that cost more than £1000
const expensiveProducts = [];

// Write a for loop here...
for (let i = 0; i < store.products.length; i++) {
  const item = store.products[i];

  if (item.price > 1000) {
    expensiveProducts.push(item);
  }
}

console.log("expensiveProducts:", expensiveProducts);

// ----- Section -----

// A list of products that cost less than £1000
const cheapProducts = [];

// Write a for loop here...
for (let i = 0; i < store.products.length; i++) {
  const item = store.products[i];

  if (item.price < 1000) {
    cheapProducts.push(item);
  }
}

console.log("cheapProducts:", cheapProducts);

// ----- Section -----

// A list of products that have an incoming delivery
const productsThatNeedToBeReceived = [];

// ----- Section -----
for (let i = 0; i < store.products.length; i++) {
  const item = store.products[i];

  if (item.stock.incomingDelivery === true) {
    productsThatNeedToBeReceived.push(item);
  }
}

console.log("productsThatNeedToBeReceived:", productsThatNeedToBeReceived);

// A list of products that are out of stock
const outOfStockProducts = [];

for (let i = 0; i < store.products.length; i++) {
  const item = store.products[i];

  if (item.stock.quantity === 0) {
    outOfStockProducts.push(item);
  }
}

console.log("outOfStockProducts:", outOfStockProducts);

// ----- Section -----

// A list of products that have a quantity that is less than 100 and have no incoming delivery
const productsThatNeedToBeOrdered = [];

for (let i = 0; i < store.products.length; i++) {
  const item = store.products[i];

  if (item.stock.quantity < 100 && item.stock.incomingDelivery === false) {
    productsThatNeedToBeOrdered.push(item);
  }
}

console.log("productsThatNeedToBeOrdered:", productsThatNeedToBeOrdered);
// ----- Section -----

// A list of products of the type "tablet"
const tablets = [];

for (let i = 0; i < store.products.length; i++) {
  const item = store.products[i];

  if (item.type === "tablet") {
    tablets.push(item);
  }
}

console.log("tablets:", tablets);

// ----- Section -----

// A list of products of the type "computer"
const computers = [];

for (let i = 0; i < store.products.length; i++) {
  const item = store.products[i];

  if (item.type === "computer") {
    computers.push(item);
  }
}

console.log("computers:", computers);

// ----- Section -----

// An object that represents an "iMac"
let iMac = null;

for (let i = 0; i < store.products.length; i++) {
  const item = store.products[i];

  if (item.name === "iMac") {
    iMac = item;
  }
}
console.log("iMac: ", iMac);

// ----- Section -----

// An object that represents an "iPhone 12"
let iPhone12 = null;

for (let i = 0; i < store.products.length; i++) {
  const item = store.products[i];

  if (item.name === "iPhone 12") {
    iPhone12 = item;
  }
}
console.log("iPhone 12: ", iPhone12);

// ----- Section -----

// An object that represents an "iPad Mini"
let iPadMini = null;

for (let i = 0; i < store.products.length; i++) {
  const item = store.products[i];

  if (item.name === "iPad mini") {
    iPadMini = item;
  }
}
console.log("iPad Mini: ", iPadMini);

// ----- Section -----

// An numbers that represents the total quantity of stocked products
let totalQuantityOfStock = 0;

for (let i = 0; i < store.products.length; i++) {
  const item = store.products[i];

  totalQuantityOfStock += item.stock.quantity;
}

console.log("totalQuantityOfStock:", totalQuantityOfStock);

// ----- CHALLENGE -----

// A list of unique product types
const productTypes = [];

for (let i = 0; i < store.products.length; i++) {
  const item = store.products[i];
  const type = item.type;
  productTypes.push(type);
  // if (item.type) {
  //   productTypes.push(item)
  // }
}
console.log("productTypes: ", productTypes);

// Output:
// => ["mobile", "computer", "tablet"]

// An object that represents the most expensive product
let theMostExpensiveProduct = null;

let expensivePriceTracker = 0;

for (let i = 0; i < store.products.length; i++) {
  const item = store.products[i];
  const price = item.price;
  if (expensivePriceTracker < price) {
    theMostExpensiveProduct = item;
    expensivePriceTracker = price;
    console.log("PriceTracker: ",expensivePriceTracker);
  }
}
console.log("TheMostExpensiveProduct: ", theMostExpensiveProduct);


// An object that represents the least expensive product
let theLeastExpensiveProduct = null;

let cheapestItemPriceTracker = 0;

for (let i = 0; i < store.products.length; i++) {
  const item = store.products[i];
  const price = item.price;
  if (cheapestItemPriceTracker > price) {
    theLeastExpensiveProduct = item;
    cheapestItemPriceTracker = price;
    console.log("PriceTracker: ", priceTracker);
  }
}
console.log("TheLeastExpensiveProduct: ", theLeastExpensiveProduct);

// An object that represents the most expensive product
let theMostStockedProduct = null;

let highestStockTracker = 0;

for (let i = 0; i < store.products.length; i++) {
  const item = store.products[i];
  const quantity = item.stock.quantity;
  console.log("Quantity: ", quantity);
  if (highestStockTracker < quantity) {
    theMostStockedProduct = item;
    highestStockTracker = quantity;
    console.log("highestStockTracker : ", highestStockTracker );
  }
}
console.log("theMostStockedProduct: ", theMostStockedProduct);
// An object that represents the least expensive product
let theLeastStockedProduct = null;

let leastStockTracker = 0;

for (let i = 0; i < store.products.length; i++) {
  const item = store.products[i];
  const quantity = item.stock.quantity;
  console.log("Quantity: ", quantity);
  if (leastStockTracker >= quantity) {
    theLeastStockedProduct = item;
    leastStockTracker = quantity;
    console.log("leastStockTracker : ", leastStockTracker );
  }
}
console.log("theLeastStockedProduct: ", theLeastStockedProduct);

// Use the "stores" array in the challenge.js file
// And do the above again, collecting data from all stores.
