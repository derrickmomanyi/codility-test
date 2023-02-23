## Challenge 1: No ifs no buts(Toy Problem)

# Write a function that accepts two numbers a and b and returns whether a is smaller than, bigger than, or equal to b, as a string.

e.g 

(5, 4)   ---> "5 is greater than 4"

(-4, -7) ---> "-4 is greater than -7"

(2, 2)   ---> "2 is equal to 2"

There is only one problem...

You cannot use if statements, and you cannot use the ternary operator ? 

In fact, the word if and the character ? are not allowed in your code.

## PseudoCode:
-created a switch statement that has a case which checks if the values in the parameters entered is equal to any of the statements
-if the statement is true it returns the values which are interpolated
-used an implicit return for the solution since puts always returns nil


## Code
The code is available in noifs.rb



## Challenge2: Ordered Count of Characters(Toy Problem)

# Count the number of occurrences of each character and return it as a (list of arrays) in order of appearance. For empty output return (an empty list).

Example:

"abracadabra" ---->  [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]

"Code Wars -----> [['C', 1], ['o', 1], ['d', 1], ['e', 1], [' ', 1], ['W', 1], ['a', 1], ['r', 1], ['s', 1]]

"233312", ------> [['2', 2], ['3', 3], ['1', 1 ]]


## PseudoCode:
-created an empty object
-iterated through the string entered to get each character separately
-the key is the character, the value is the count and the code returns them as an object
-if the key value pair is undefined, return the object as 0, if it is defined increment each character displaying the character and count to the last character
