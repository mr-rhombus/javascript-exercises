const reverseString = function(string) {
    let out = '';
    let i = 0;
    while (i < string.length) {
        out = string[i] + out;
        i++;
    }
    return out
};


// Do not edit below this line
module.exports = reverseString;
