function hasTargetSum(array, target) {
    // Write your algorithm here
    // iterating thriough the array
    for (let n = 0; n < array.length; n++) {
        // defining the solution 
        const soln = target - array[n]
            // iteratinh in the other parts of the arry
        for (let p = n + 1; p < array.length; p++) {
            // checking if other parts of the array amtch the solution
            if (array[p] === soln) {
                return true;

            }
        }
    }
    return false
}

/* 
  Write the Big O time complexity of your function here
  The O comlexity of this is  O(n^2) since we had to iterate twice trough the arrays.
*/

/* 
  Add your pseudocode here
  1. Iterate through each array,
   2. from the target, subtract each number and look for a number corresponding in the array (target-value = soln)
   3. Check if the solution is in the array, if so return true, if not return false

*/

/*
  Add written explanation of your solution here
  make a function that checks if two numbers from the array add up to the same target.
  for each nummber in the array in need to check if there is another nummber in the array that adds up to the target.
  should return true if there are at leats two numbers that add up to the target anf false if there are no two pairs
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
    // add your own custom tests in here
    console.log("Expecting: true");
    console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

    console.log("");

    console.log("Expecting: true");
    console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

    console.log("");

    console.log("Expecting: false");
    console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;