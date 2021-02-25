module.exports = function reverse (n) {
    n = Math.abs(n);
    n = toString(n);
    n = n.split('').reverse();
    return +n;
}
