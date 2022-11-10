var pastaTypes = ["macaroni", 'spaghetti', 'linguine', 'penne', 'lasagna'];
var someNums = [900, 76, 4, 1, .01];
var someBooleans = [true, true, false, true, false];

//.pop() array method will remove the last element, in this case 'lasagna', and returns it. If you console.log it, you will get the array pastaTypes with 4 pastas only, lasagna won't be there.
pastaTypes.pop();

//.shift() method is like pop in that it removes an element, but it removes the first element. I guess it's called shift because it moves the elements over and changes their indexes. 
someBooleans.shift();

//.slice() was a tricky method to figure out. It takes two values, and these values correspond to index values of the elements in your array. It returns the values of the elements that in between the index values you passed in, not including the last one for some reason. 
someNums.slice(0,3);

// this is a test
//console.log(someNums.slice(0,3));