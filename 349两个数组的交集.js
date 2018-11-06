/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    var list =[]
    nums1 =  Array.from(new Set(nums1))
    nums2 =  Array.from(new Set(nums2))
    for(var i=0;i<nums1.length;i++){
        // if(nums2.indexOf(nums1[i])!=-1){
        //     list.push(nums1[i])
        // }
        if(nums2.includes(nums1[i])){
            list.push(nums1[i])
        }
    }
    list = Array.from(new Set(list))
    return list
};