class MinHeap {
  constructor() { 
    this.heap = []
  }
  insert(val) {
    this.heap.push(val)
    this.shiftUp(this.heap.length-1)
  }
  pop() {
    this.heap[0] = this.heap.pop()
    this.shiftDown(0)
  }
  findParentIdx(idx) {
    return Math.floor((idx-1)/2)
  }
  findLeftIdx(idx) {
    return idx*2 +1
  }
  findRightIdx(idx) {
    return idx*2 +2
  }
  shiftUp(index) {
    if(index===0) return
    const parentIndex = this.getParentIndex(index)
    if (this.heap[parentIndex] > this.heap[index]) {
      this.swap(parentIndex, index)
      this.shiftUp(parentIndex)
    }
  }
  shiftDown(index) {
    const leftIndex = this.findLeftIdx(idx)
    const rightIndex = this.findRightIdx(idx)
    if (this.heap[index] > this.heap[leftIndex]) {
      this.swap(index, leftIndex)
      this.shiftDown(leftIndex)
    }
    if (this.heap[index] > this.heap[rightIndex]) {
      this.swap(index, rightIndex)
      this.shiftDown(rightIndex)
    }
  }
  swap(i1,i2) {
    const temp = this.heap[i1]
    this.heap[i1] = this.heap[i2]
    this.heap[i2] = temp
  }
}