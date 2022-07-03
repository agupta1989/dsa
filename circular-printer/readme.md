Given a circular container consisting of lowercase alphabets from ‘a’ to ‘z’, a pointer pointing initially at alphabet ‘a’, and a string str, the task is to find the minimum time required to print the given string str from the circular container, based on following operations that can be performed on every character:

- Move the pointer one character anti-clockwise or clockwise in one unit time
- Print the character in one unit time, and then move the pointer to the next index of the string

Example:

```
Input: str = “zcd”
Output: 8
Explanation: The steps are as follows:

- Move the pointer anti-clockwise to ‘z’ in 1 second
- Type the character ‘z’ in 1 second
- Move the pointer clockwise to ‘c’ in 3 seconds
- Type the character ‘c’ in 1 second
- Move the pointer clockwise to ‘d’ in 1 seconds
- Type the character ‘d’ in 1 second.

Input: str =”zjpc”
Output: 34
Explanation: The steps are as follows:

Move the pointer anti-clockwise to ‘z’ in 1 second
Type the character ‘z’ in 1 second
Move the pointer clockwise to ‘j’ in 10 seconds
Type the character ‘j’ in 1 second
Move the pointer clockwise to ‘p’ in 6 seconds
Type the character ‘p’ in 1 second
Move the pointer anti-clockwise to ‘c’ in 13 seconds.
```

Approach: Below steps can be followed to solve the given problem:

Calculate time required to reach character index from current pointer index in both directions:
clockwise time is calculated by taking absolute difference of both indices
anti-clockwise time is calculated by subtracting clockwise time from 26
Minimum of both times obtained in the previous step is added to the answer
Then to print the character, one unit time is also added to the answer
Finally print the answer obtained as the minimum time required.