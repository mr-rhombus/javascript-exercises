const repeatString = function(string, num) {
    if (num < 0) {
        return 'ERROR'
    }

    let counter = 0;
    let out = '';
    while (counter < num) {
        out += string;
        counter++;
    }
    return out
};

// Do not edit below this line
module.exports = repeatString;
