/*
  Return the second largest number in the array.
  @param {Number[]} nums - An array of numbers.
  @return {Number} The second largest number in the array.
*/
function getSecondLargest(nums) {
    // Complete the function
    let largest=0,secondlargest=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]>largest)
        {
            secondlargest=largest;
            largest=nums[i]
        }
        else if(nums[i]>secondlargest&&nums[i]<largest)
                    secondlargest=nums[i]

    }
    return secondlargest
}
