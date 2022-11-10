var pastaTypes = ["macaroni", 'spaghetti', 'linguine', 'penne', 'lasagna'];
var someNums = [900, 76, 4, 1, .01];
var someBooleans = [true, true, false, true, false];

//.pop() array method will remove the last element, in this case 'lasagna', and returns it. If you console.log it, you will get the array pastaTypes with 4 pastas only, lasagna won't be there.
pastaTypes.pop();

//.shift() method is like pop in that it removes an element, but it removes the first element. I guess it's called shift because it moves the elements over and changes their indexes. 
someBooleans.shift();

//.slice() was a tricky method to figure out. It takes two values, and these values correspond to index values of the elements in your array. It returns the values of the elements that in between the index values you passed in, not including the last one for some reason. It doesnt seem to change the array at all.
someNums.slice(0,3);

// this is a test
//console.log(someNums.slice(0,3));

//js arrays start counting themselves at 0. This makes the index slightly different from the length, which start counting at 1. 
//I will use the test above for the .slice() method to demonstrate index positions. 
//since I passed 0 first into the method, I can expect that the first value will be 900 since that is the number in the first place of someNums which is the 0 index. 
//since 3 is the second value I passed, I can expect to have 900, 76, and 4 be logged to the console. Even though the number '1' is someNums[3], it shouldn't show, since this method leaves it out. 
//If i were to console.log(someNums.slice(3,4)) I would expect '1' to be logged to the console. 