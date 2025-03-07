const fibonacci = function(n) {
    let a = 1, b = 1
    if (Number(n) < 0) return 'OOPS';
    if (Number(n) === 0) return 0;
    for (let i = 2; i < Number(n); i++) {
        next = a + b;
        a = b;
        b = next;
      }
    return b;
};

// Do not edit below this line
module.exports = fibonacci;
