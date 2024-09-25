"use strict";

const inventory = ["mouse", "keyboard", "monitor", "laptop", "printer"];
const search = "mouse";
const index = inventory.indexOf(search);
if (index !== -1) {
  const [item] = inventory.splice(index, 1);
  inventory.push(item);
} else {
  inventory.push(search);
}
const newArr = [...inventory.slice(0, 3), ...inventory.slice(-2)];
const result = newArr.join(";");

console.log(result);
