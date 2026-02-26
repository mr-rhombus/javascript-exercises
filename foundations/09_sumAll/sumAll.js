const sumAll = function(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b) || a < 0 || b < 0) {
        return 'ERROR'
    }
    let start = a <= b ? a : b;
    let end = b >= a ? b: a;
    let i = 0;
    let res = 0;
    while ((start + i) <= end) {
        res += (start + i);
        i++;
    }
    return res;
};

// Do not edit below this line
module.exports = sumAll;
