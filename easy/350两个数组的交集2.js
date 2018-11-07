var intersect = function(nums1, nums2) {
    if(nums1.length === 0 || nums2.length === 0)
      return [];
    let map = {};
    let res = [];
  
    for(let i = 0;i < nums1.length;i++) {
        //如果是新的空间就为1
      if(map[nums1[i]] === void 0)
        map[nums1[i]] = 1;
      else
      //已经不是新的空间++就行了
        map[nums1[i]]++;
    }
  
    for(let i = 0;i < nums2.length;i++) {
      if(map[nums2[i]] !== void 0) {
        if(map[nums2[i]] > 0){
          res.push(nums2[i]);
          map[nums2[i]]--;
        }
      }
    }
  
    return res;
};

//[1,2,2,5],[1,2,2,4,6]
//map:{
// 1:1,
// 2:2,
// 5:1, 
//}
//再利用--，只有map里面key有值，并且大于1才能push到res里面去