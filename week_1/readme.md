# String and Array Transformations

This document describes various JavaScript functions designed to transform strings, arrays, and objects. Each function is explained with its purpose, functionality, and usage examples.

## 1. String Transformations

a. capitalize(str)
Description: Capitalizes the first letter of a string.
How it works: Capitalizes the first character of str and concatenates it with the rest of the string.

b. reverse(str)
Description: Reverses a string.
How it works: Splits the string into an array of characters, reverses the array, and joins it back into a string.

c. isPalindrome(str)
Description: Checks if a string is a palindrome (reads the same backward as forward).
How it works: Compares the original string str with its reversed version to determine if they are identical.

d. wordCount(str)
Description: Counts the number of words in a string.
How it works: Iterates through the characters of str to count words based on transitions between whitespace and non-whitespace characters.

## 2. Array Transformations

a. double(arr)
Description: Doubles every number in an array.
How it works: Uses map() to create a new array where each element is multiplied by 2.

b. filterEven(arr)
Description: Filters out even numbers from an array.
How it works: Uses filter() to create a new array with only odd numbers.

c. sum(arr)
Description: Calculates the sum of all numbers in an array.
How it works: Iterates through the array to accumulate the sum of all elements.

d. average(arr)
Description: Calculates the average of all numbers in an array.
How it works: Uses the sum() function to calculate the total sum and divides by the number of elements.

## 3. Object Transformations

a. fullName(person)
Description: Returns the full name of a person object (given properties firstName and lastName).
How it works: Concatenates person.firstName and person.lastName with a space.

b. isAdult(person)
Description: Checks if a person is 18 or older (given property age).
How it works: Compares person.age with 18 to determine adulthood.

c. filterByAge(people, minAge)
Description: Filters an array of person objects to keep only those at least minAge years old.
How it works: Uses filter() to create a new array with persons whose age is greater than or equal to minAge.

## 4. Function Composition

Function composition allows combining multiple functions to create more complex transformations.

a. compose(...fns)
Description: Creates a function that is the composition of the input functions.
How it works: Combines functions sequentially to process input through each function in reverse order.
