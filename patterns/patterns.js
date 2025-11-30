
/**
 * * * * *
 * * * * *
 * * * * * 
 * * * * *
 * * * * *
 */

const printPattern1 = (rows, cols) => {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      process.stdout.write('* ');
    }
    console.log('\n');
  }
}

/**
 * *
 * * *
 * * * *
 * * * * *
 * * * * * *
 */

const printPattern2 = (rows) => {

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j <= i; j++) {
      process.stdout.write("* ");
    }
    console.log();
  }
}

/**
 * 1 
 * 1 2
 * 1 2 3
 * 1 2 3 4
 * 1 2 3 4 5
 * 
 * @param {*} rows 
 */
const printPattern3 = (rows) => {

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j <= i; j++) {
      process.stdout.write(`${j + 1} `);
    }
    console.log();
  }
}

/**
 * 
 * 1 
 * 2 2
 * 3 3 3
 * 4 4 4 4
 * @param {*} rows 
 */
const printPattern4 = (rows) => {

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j <= i; j++) {
      process.stdout.write(`${i + 1} `);
    }
    console.log();
  }
}

/**
 * 
 * * * * * *
 * * * * *
 * * * *
 * * *
 * *
 * @param {*} rows 
 */
const printPattern5 = (rows) => {

  for (let i = rows; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      process.stdout.write('* ');
    }
    console.log();
  }
}

/**
 * 
 * 1 2 3 4 5
 * 1 2 3 4
 * 1 2 3
 * 1 2
 * 1
 * @param {*} rows 
 */
const printPattern6 = (rows) => {

  for (let i = rows; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      process.stdout.write(`${j + 1} `);
    }
    console.log();
  }
}

//     *      
//    ***
//   *****
//  *******
// *********
const printPattern7 = (rows) => {

  for (let i = 0; i < rows; i++) {
    // spaces
    for (let j = rows - i - 1; j > 0; j--) {
      process.stdout.write(' ');
    }

    // numbers
    for (let j = 0; j < 2 * i + 1; j++) {
      process.stdout.write("*");
    }
    
    // spaces
    for (let j = rows - i - 1; j > 0; j--) {
      process.stdout.write(' ');
    }
    console.log();
  }
}
     


// *********
//  *******
//   *****
//    ***
//     *

// rows = 5
// columns = 9
// so for each row
// [0, 9, 0] - 0 spaces, 9 stars, 0 spaces
// [1, 7, 1] - 1 space, 7 stars, 1 space
// [2, 5, 2] - 2 spaces, 5 stars, 2 spaces
// [3, 3, 3] - 3 spaces, 3 stars, 3 spaces
// [4, 1, 4] - 4 spaces, 1 star, 4 spaces
const printPattern8 = (rows) => {

  for (let i = rows; i > 0; i--) {
    // spaces
    for (let j = rows - i; j > 0; j--) {
      process.stdout.write(' ');
    }

    // numbers
    for (let j = 0; j < 2 * i - 1; j++) {
      process.stdout.write("*");
    }
    
    // spaces
    for (let j = rows - i; j > 0; j--) {
      process.stdout.write(' ');
    }
    console.log();
  }
}

//     *    
//    ***
//   *****
//  *******
// *********
// *********
//  *******
//   *****
//    ***
//     *
const printPattern9 = (rows) => {
  printPattern7(rows);
  printPattern8(rows);
}

// 1 * 
// 2 * *
// 3 * * *
// 4 * * * *
// 5 * * * * *
// 6 * * * *
// 7 * * *
// 8 * *
// 9 *
const printPattern10 = (rows) => {
  // printPattern2(rows);
  // printPattern5(rows - 1);

  //  another way where we get only number of max starts N = 5 where N is not rows
  // total number of rows is 9. For given N = 5, outer loop (number of rows) need to run 
  // 9 times i.e. from 0 to 2 * N - 1 = 9

  for (let i = 0; i < 2 * rows - 1; i++) {
    let stars = i;
    if (i >= rows) {
      stars = 2 * rows - i - 2;
    }
    for (let j = 0; j <= stars; j++) {
      process.stdout.write("*");
    }
    console.log();
  }
}

// 1
// 01
// 101
// 0101
// 10101
// 010101
const printPattern11 = (rows) => {
  for (let i = 1; i <= rows;i++) {
    let start = 1;
    if (i % 2 === 0) {
      start = 0;
    }
    for (let j = 0; j < i; j++) {
      process.stdout.write(start.toString());
      // clever way to toggle between 0 and 1
      start = 1-start;
    }
    console.log();
  }
}

// 1        1
// 12      21
// 123    321
// 1234  4321
// 1234554321
const printPattern12 = (rows) => {
  for (let i = 1; i <= rows;i++) {
    // numbers
    for (let j = 1; j <= i; j++) {
      process.stdout.write(j.toString());
    }
    // spaces ()
    for (let j = 0; j < 2 * rows - 2 * i; j++) {
      process.stdout.write(' ');
    }

    // numbers
    for (let j = i; j > 0; j--) {
      process.stdout.write(j.toString());
    }

    console.log();
  }
}

// 1 
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15
const printPattern13 = (rows) => {
  let n = 1;
  for (let i = 0; i < rows;i++) {
    for (let j = 0; j < i + 1; j++) {
      process.stdout.write((n).toString() + " ");
      n += 1;
    }
    console.log();
  }
}

// A 
// B C
// D E F
// G H I J
// K L M N O
const printPattern14 = (rows) => {
  let n = 65; // ASCII value of A
  for (let i = 0; i < rows;i++) {
    for (let j = 0; j < i + 1; j++) {
      process.stdout.write(String.fromCharCode(n) + " ");
      n += 1;
    }
    console.log();
  }
}

// A 
// A B
// A B C
// A B C D
// A B C D E
const printPattern15 = (rows) => {
  for (let i = 0; i < rows;i++) {
    for (let j = 65; j < 65 + i + 1; j++) {
      process.stdout.write(String.fromCharCode(j) + " ");
    }
    console.log();
  }
}

// A-B-C-D-E-
// A-B-C-D-
// A-B-C-
// A-B-
// A-
const printPattern16 = (rows) => {
  for (let i = 0; i < rows; i++) {
    for (let j = 65; j < 65 + rows - i; j++) {
      process.stdout.write(String.fromCharCode(j) + "-");
    }
    console.log();
  }
}

// A-
// B-B-
// C-C-C-
// D-D-D-D-
// E-E-E-E-E-
const printPattern17 = (rows) => {
  for (let i = 0; i < rows; i++) {
    let charCode = 65 + i;
    for (let j = 0; j <=i; j++) {
      process.stdout.write(String.fromCharCode(charCode) + "-");
    }
    console.log();
  }
}

//     A    
//    ABA
//   ABCBA
//  ABCDCBA
// ABCDEDCBA
const printPattern18 = (rows) => {
  for (let i = 0; i < rows; i++) {
    // spaces
    for (let j = rows - i - 1; j > 0; j--) {
      process.stdout.write(' ');
    }

    // characters
    let charCode = 65;
    // breakpoint is to decide from which point I need to decrement the char code.
    let breakpoint = Math.floor((2 * i + 1) / 2);
    for (let j = 0; j < 2 * i + 1; j++) {
      process.stdout.write(String.fromCodePoint(charCode));
      if (j >= breakpoint) {
        charCode -= 1;
      } else {
        charCode += 1;
      }
    }
    
    // spaces
    for (let j = rows - i - 1; j > 0; j--) {
      process.stdout.write(' ');
    }
    console.log();
  }
}

// E
// DE
// CDE
// BCDE
// ABCDE
const printPattern19 = (rows) => {
  // rows
  for (let i = 0; i < rows; i++) {
    let charCode = 65 + rows - i - 1;
    // columns
    for (let j = 0; j <= i; j++) {
      process.stdout.write(String.fromCodePoint(charCode));
      charCode += 1;
    }

    console.log();
  }
}

// **********
// ****--****
// ***----***
// **------**
// *--------*
// *--------*
// **------**
// ***----***
// ****--****
// **********
const printPattern20 = (rows) => {
  for (let i = 0; i < rows; i++) {
    // decreasing order
    // stars
    for (let j = 0; j < rows - i; j++) {
      process.stdout.write("*");
    }

    // space
    for (let j = 0; j < i * 2; j++) {
      process.stdout.write("-");
    }

    for (let j = 0; j < rows - i; j++) {
      process.stdout.write("*");
    }
    console.log();
  }

  for (let i = 0; i < rows; i++) {
    // increasing order
    // stars
    for (let j = 0; j <= i; j++) {
      process.stdout.write("*");
    }

    // space
    const space = 2 * rows - 2 * (i + 1);
    for (let j = 0; j < space; j++) {
      process.stdout.write("-");
    }

    // stars
    for (let j = 0; j <= i; j++) {
      process.stdout.write("*");
    }
    console.log();
  }
}

// *--------*
// **------**
// ***----***
// ****--****
// **********
// ****--****
// ***----***
// **------**
// *--------*
const printPattern21 = (n) => {
  let space = 2 * n;
  for (let i = 0; i < 2*n-1; i++) {
    let stars = i + 1;
    if (i > 4) {
      stars = 2 * n - i - 1;
    }
    for (let j = 0; j < stars; j++) {
      process.stdout.write("*");
    }
    if (i > 4) {
      space += 2;
    } else {
      space -= 2;
    }
    for (let j = 0; j < space; j++) {
      process.stdout.write("-");
    }
    for (let j = 0; j < stars; j++) {
      process.stdout.write("*");
    }
    console.log();
  }
}

process.stdout.write('Enter number of rows and columns: \n');
let rows = 0;
let cols = 0;
process.stdin.on('data', (data) => {
  const input = data.toString().trim().split(' ');
  rows = parseInt(input[0], 10);
  cols = parseInt(input[1], 10);
  // printPattern1(rows, cols);
  // printPattern2(rows);
  // printPattern3(rows);
  printPattern21(rows);

  process.exit() ;
});
