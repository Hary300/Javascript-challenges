export const findMax = (nums) => {
  if (nums.length === 0) return null;

  let maxNumber = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > maxNumber) {
      maxNumber = nums[i];
    }
  }
  return maxNumber;
};
