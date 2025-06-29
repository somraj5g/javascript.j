var f = (value) => {
    if (value % 2 == 0) {
        return true;
    }
    return false;
}
console.log(f(18));
const res = [18, 22, 26, 28].every(f);
console.log(res);
var a = [10, 12, 14, 16].every((t) => {
    return t % 2 == 0;
});
console.log(a);

var w = [32, 34, 36, 38].every((e) => (e % 2 == 0));
console.log(w);
