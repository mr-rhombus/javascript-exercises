const palindromes = function (string) {
  let cleanString = onlyAlphaNumeric(string);
  let cleanStringReversed = reversed(cleanString);
  let i = 0;
  while (i < cleanString.length) {
    // Letters don't match
    if ( !lettersAreEqual(cleanString[i], cleanStringReversed[i]) ) {
      return false;
    };
    i++;
  }
  return true;
}

const isLetter = function (el) {
  let letterRe = /[a-zA-Z]/;
  return letterRe.exec(el) == null ? false : true;
}

const isNumber = function (el) {
  let numberRe = /[0-9]/
  return numberRe.exec(el) == null ? false : true;
}

const lettersAreEqual = function (a, b) {
  return a.toLowerCase() == b.toLowerCase()
}

const onlyAlphaNumeric = function(a) {
  let ans = '';
  let i = 0;
  while (i < a.length) {
    if ( isLetter(a[i]) || isNumber(a[i] )) {
      ans += a[i];
    }
    i++;
  }
  return ans;
}

const reversed = function (string) {
  let i = 0;
  let ans = '';
  while (i < string.length) {
    ans += string[(string.length - 1) - i]
    i++;
  }
  return ans
}

// Do not edit below this line
module.exports = palindromes;
