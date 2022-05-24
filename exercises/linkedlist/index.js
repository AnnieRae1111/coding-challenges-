// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next=null){
    this.data = data; 
    this.next = next;
    //if a node is passed without a next node, the default property is null
    
  }
}

class LinkedList {
  constructor(){
    this.head = null
  }

  insertFirst(data){
    const newNode = new Node(data, this.head)
    //passing in this.head as the next node property 
    this.head = newNode
  }

  size(integer){
    let counter = 0
    let node = this.head 
    while(node){
      counter ++ 
      node = node.next
    }
    return counter
    //will use this many times with methods inside of this class 
  }

  getFirst(Node){
    return this.head
  }

  getLast(Node){
    if(!this.head){
      return null
    }

    let node = this.head
    while(node){
      if(!node.next){
        //if there is no next property, that is the last node 
        return node
      }

      node = node.next
      //otherwise update the node to the next one in the chain and go through while loop again 
    }
  }

  clear(){
    this.head = null  
    //there is no head , so there is no linked list 
  }

  removeFirst(){
    if(!this.head){
      return
    }else {
      return this.head = this.head.next 
      //even if there is only one node, it will still work because then this.head = null, which is the default anyway
    }
  }

  removeLast(){
    if(!this.head){
      return
    }

    if(!this.head.next){
      //if there is not a second node 
      return this.head = null
    }

    let previous = this.head 
    let node = this.head.next

    while(node.next){
      //while there is a second node, on the node variable we delcared
      previous = node
      node = node.next
    }
    
    //after the while loop we are the end of the list, we set previous.next = null 
    previous.next = null

  }

  insertLast(data){
    const last = this.getLast()

    if(last){
      last.next = new Node(data)
    } else {
      this.head = new Node(data)
    }

  }

}

module.exports = { Node, LinkedList };
