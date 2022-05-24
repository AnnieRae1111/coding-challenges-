// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
  constructor(){
    this.data = []
    //data can be anyword 
  }
  add(record){
    this.data.unshift(record)
    //adds an element/record to beginning of array and returns the new length of the array
  }
  remove(){
    return this.data.pop()
    //removes the last element in an array
  }

}

module.exports = Queue;
