//Symbols
let article = {
  title: "Whiteface Mountain",
  [Symbol.for("Article")]: "My Article"
};

let value = article[Symbol.for("Article")];
console.log(value);  //My Article


