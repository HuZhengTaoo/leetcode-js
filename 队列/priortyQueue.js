function PriortyQueue() {
  let items = [];
  function QueueElement(element, priorty) {
    this.element = element
    this.priorty = priorty
  }

  this.enqueue = function (element, priorty) {
    let queueElement = new QueueElement(element, priorty)
    let added = false
    for (let i = 0; i < items.length; i++) {
      if (queueElement.priorty < items.priorty) {
        items.splice(i, 0, queueElement)
        added = true
      }
    }
    if (!added) {
      items.push(queueElement)
    }
  }
}