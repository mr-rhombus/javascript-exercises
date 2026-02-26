const removeFromArray = function(arr) {
    let i = 0;
    while (i < arguments.length - 1) {
        let found = true;
        let toRemove = arguments[i+1]  // Skip over arr
        while (found) {
            // Handle duplicate array elements that need removing
            let firstMatchIx = arr.indexOf(toRemove)
            // Element not found in array
            if (firstMatchIx == -1) {
                found = false;
            } else {
                arr.splice(firstMatchIx, 1)
            }
        }
        i++;
    }
    return arr
};

// Do not edit below this line
module.exports = removeFromArray;
