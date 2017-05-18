function hello (name) {
  if (name === " ") {
    return ('Hello World');
  } else {
    return `Hello ${name}`;
  }
}

console.log(hello(" "));
console.log(hello("Marina"));
