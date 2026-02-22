class Solution {
    // Function to merge two sorted halves of the array
    merge(arr, low, mid, high) {
        // Temporary array to store merged elements
        let temp = [];
        let left = low;
        let right = mid + 1;

        // Loop until subarrays are exhausted
        while (left <= mid && right <= high) {
            // Compare left and right elements
            if (arr[left] <= arr[right]) {
                // Add left element to temp
                temp.push(arr[left]);
                // Move left pointer
                left++;
            } else {
                // Add right element to temp
                temp.push(arr[right]);
                // Move right pointer
                right++;
            }
        }

        // Adding the remaining elements of left half
        while (left <= mid) {
            temp.push(arr[left]);
            left++;
        }

        // Adding the remaining elements of right half
        while (right <= high) {
            temp.push(arr[right]);
            right++;
        }

        // Transferring the sorted elements to arr
        for (let i = low; i <= high; i++) {
            arr[i] = temp[i - low];
        }
    }

    // Helper function to perform merge sort from low to high
    mergeSortHelper(arr, low, high) {
        // Base case: if the array has only one element
        if (low >= high)
            return;

        // Find the middle index
        let mid = Math.floor((low + high) / 2);
        // Recursively sort the left half
        this.mergeSortHelper(arr, low, mid);
        // Recursively sort the right half
        this.mergeSortHelper(arr, mid + 1, high);
        // Merge the sorted halves
        this.merge(arr, low, mid, high);
    }

    // Function to perform merge sort on the given array
    mergeSort(nums) {
        let n = nums.length; // Size of array
        
        // Perform Merge sort on the whole array
        this.mergeSortHelper(nums, 0, n - 1);
        
        // Return the sorted array
        return nums;
    }
}

const arr = [5, 4, 4, 1, 1];

var a = new Solution();
const result = a.mergeSort(arr);

console.log(result);

