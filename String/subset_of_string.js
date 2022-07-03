var test = "abc";

a(bc) => a(bc, cb) => [abc, acb]
b(ac) => b(ac, ca) => [bac, bca]
c(ab) => c(ab, ba) => [cab, cba]
=================================
[abc, acb, bac, bca, cab, cba, a, b, c]

const findSubset = (string, set = [""]) => {
  let firstChar = string[0];
  for (let i = 0; i < set.length * 2; i++) {
    const newComb = firstChar + set[i];
    set.unshift(newComb);
    firstChar = null;
  }
};



