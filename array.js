var t = new Array("paper", "marker", "eraser", "folder");
console.log(t);
console.log(t[2]);
t[0] = "glue";
console.log(t);
console.log("Length of an array: ", t.length);
t.pop();
console.log(t);

t.unshift("stapler");
console.log(t);
t.shift();
console.log(t);
console.log(t.indexOf("eraser"));
console.log(t.indexOf(45));

console.log(Array.from("eraser"));
