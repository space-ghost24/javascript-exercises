const removeFromArray = function(arr, ...args) {
    let filtered = arr.filter(item => !args.includes(item));
    return filtered;
};

// Do not edit below this line
module.exports = removeFromArray;
