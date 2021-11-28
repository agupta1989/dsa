const LinkedList = function(value) {
  this.head = {
    value: value,
    next: null,
  };

  this.tail = this.head;

  this.length = 1;

  this.append = (value) => {
    const node = {
      value: value,
      next: null,
    };
    // Step 1 1st time, the head is tail, hence next (of head) will point to new object
    this.tail.next = node;
    // Step 2 then we assign the new object as tail
    this.tail = node;
    // remember the order is important here, else we will change the head node itself!
    // head.next -> new object
    // tail -> new object
    // after 1st time, all the subsequent append will deal with the tail node
    // 
    this.length++;
    return this;
  };

  this.prepend = (value) => {
    const node = {
      value,
      next: this.head,
    };
    this.head = node;
    this.length++;
    return this;
  };

  this.print = () => {
    const arr = [];
    let node = this.head;
    while(node !== null) {
      arr.push(node.value);
      node = node.next;
    }
    console.log('Elements :', arr);
    return this;
  }

  this.insert = (index, value) => {
    if (index >= this.length) {
      return this.append(value);
    }
    const node = {
      value,
      next: null,
    };
    let leader = this.findNode(index - 1);
    // Bring next element of startNode
    const holdingPointer = leader.next;
    leader.next = node;
    node.next = holdingPointer;
    this.length++;
    return this;
  };

  this.findNode = (index) => {
    let counter = 0;
    let currentNode = this.head;
    while(index !== counter) {
      if (currentNode.next) {
        currentNode = currentNode.next;
      }
      counter++;
    }
    return currentNode;
  }

  this.remove = (index) => {
    // if (index > this.length) {
    //   let currentNode = this.head;
    //   while (currentNode.value !== this.tail.value) {
    //     currentNode = currentNode.next;
    //   }
    // }
    if (index === 0) {
      const node = this.head.next;
      delete this.head;
      this.head = node;
      this.length--;
    }
    if (index > 0) {
      let currentNode = this.findNode(index - 1);
      if (currentNode.next === null) {
        currentNode = this.findNode(index - 2);
      }
      const child = currentNode.next;
      const grandChild = child.next;
      currentNode.next = grandChild;
      this.length--;      
    }
    return this;
  };

  this.reverse = function() {
    let prev = null;
    let currentNode = this.head;
    let next;
    while (currentNode) {
      next = currentNode.next;
      currentNode.next = prev;
      prev = currentNode;
      currentNode = next;
    }
    this.head = prev;
    return this;
  }
};

const linkedList = new LinkedList(12);

linkedList
  .append(5)
  .print()
  .append(6)
  .print()
  .prepend(7)
  .print();


linkedList.insert(2, 99).print();
// linkedList.remove(9).print();
linkedList.reverse().print();
console.log(linkedList.length)