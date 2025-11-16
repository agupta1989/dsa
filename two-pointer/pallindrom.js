
// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing
// all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.

var isPalindrome = function(s) {
    let pointer1 = 0;
    let pointer2 = s.length - 1;
    let result = true;

    while (pointer1 <= pointer2) {
        const char1 = s[pointer1].toLowerCase();
        const char2 = s[pointer2].toLowerCase();

        // check if they are different
        if (char1.charCodeAt(0) < 97 || char1.charCodeAt(0) > 122) {
            pointer1++;
            continue;
        }
        if (char2.charCodeAt(0) < 97 || char2.charCodeAt(0) > 122) {
            pointer2--;
            continue;
        }

        if (char1 !== char2) {
            result = false;
            break;
        }

        if (char1 === char2) {
            pointer1++;
            pointer2--;
            continue;
        }
    }
    return result;
};

var string = "A man, a plan, a canal: Panama";

var result = isPalindrome(string);

console.log('result', result);