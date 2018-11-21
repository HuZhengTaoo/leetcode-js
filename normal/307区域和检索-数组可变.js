/**
 * @param {number[]} nums
 */
var _num = []
var NumArray = function(nums) {
    for(var i=0;i<nums.length;i++){
        _num[i]=nums[i];
    }
    
};

/** 
 * @param {number} i 
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function(i, val) {
    _num[i] = val
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    var count=0;
    for(var t=i;t<=j;t++){
        count+=_num[t];
    }
    console.log(count)
    return count;
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = Object.create(NumArray).createNew(nums)
 * obj.update(i,val)
 * var param_2 = obj.sumRange(i,j)
 */
 var arr =new NumArray([1,3,5])
 console.log(arr)
 arr.sumRange(0,2)
 arr.update(1,2)
 arr.sumRange(0,2)