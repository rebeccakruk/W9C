let itemNames = ["Milk", "Eggs", "Bread"];
let itemPrices = ["$4.99", "$3.79", "$2.49"];
let inStock = [true, false, true]

console.log(`First item name: ${itemNames[0]}`);
console.log(`First item price: ${itemPrices[0]}`);


itemNames.push("Mango");
itemPrices.push("2.29");
inStock.push(true);

// the 0 represents the first item on the list
// console.log(`First item name: ${itemNames[0]}`);
// console.log(`First item price: ${itemPrices[0]}`);

// the 3 represents the fourth item on the list (the item added with push)
console.log(`Last item name: ${itemNames[3]}`);
console.log(`Last item price: ${itemPrices[3]}`);

console.log(`remove item:`);
let item = itemNames.pop();
console.log(item);
let price = itemPrices.pop();
console.log(price);
let stock = inStock.pop();
// console.log(stock);
if (inStock = true) {
    console.log("in stock");
}


