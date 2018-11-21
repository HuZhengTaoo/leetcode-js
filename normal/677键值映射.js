/**
 * Initialize your data structure here.
 */
var MapSum = function() {
    this.list = [];
};

/** 
 * @param {string} key 
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function(key, val) {
    if(!this.list.some(el => {
        if(el.key === key){
            el.val = val;
            return true;
        }
        return false;
    })){
       this.list.push({
            key,
            val
       });
   }
};

/** 
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function(prefix) {
    return this.list.reduce((sum, ele) => {
        return sum + (ele.key.startsWith(prefix) ? ele.val : 0);
    }, 0);
};

/** 
 * Your MapSum object will be instantiated and called as such:
 * var obj = Object.create(MapSum).createNew()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */
