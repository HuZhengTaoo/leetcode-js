/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this._num=[];
    for(var i=0;i<nums.length;i++){
        this._num[i]=nums[i];
    }
   // this.count=0;
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    var count=0;
    for(var t=i;t<=j;t++){
        count+=this._num[t];
    }
    return count;
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = Object.create(NumArray).createNew(nums)
 * var param_1 = obj.sumRange(i,j)
 */