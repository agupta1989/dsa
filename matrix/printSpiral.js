class Solution {
  spiralOrder(matrix) {
    let top = 0;
    let bottom = matrix.length - 1;
    let left = 0;
    let right = matrix[0].length - 1;

    const answer = [];

    while (left <= right && top <= bottom) {
      // left to right - top is constant
      for (let i = left; i <= right; i++) {
        answer.push(matrix[top][i]);
      }
      // once its done we increase top by 1
      top++;

      // top to bottom - the right is constant because we want to cover right end portion of each array
      for (let i = top; i <= bottom; i++) {
        answer.push(matrix[i][right]);
      }
      // move right to left or decrease by 1 to go right to left
      right--;

      // right to left
      if (top <= bottom) {
        for (let i = right; i >= left; i--) {
          answer.push(matrix[bottom][i]);
        }
        bottom--;
      }

      // bottom to top
      if (left <= right) {
        for (let i = bottom; i >= top; i--) {
          answer.push(matrix[i][left]);
        }
        left++;
      }
    }
    return answer;
  }
}

// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];

const matrix = [
  [4],
  [2],
  [5],
  [6]
]

// const matrix = [
//   [4,2,5,7]
// ]

const solution = new Solution();
const answer = solution.spiralOrder(matrix);

console.log(answer);