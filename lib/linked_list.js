// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
    constructor(val) {
        this.value = val
        this.next = null

    }

}

// TODO: Implement a Singly Linked List class here
class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0

    }

    // TODO: Implement the addToTail method here
    addToTail(val) {
        const newNodes = new Node(val)

        if (!this.head) {
            this.head = newNodes
        } else {
            this.tail.next = newNodes
        }

        this.tail = newNodes
        this.length++
        return this
    }

    // TODO: Implement the removeTail method here
    removeTail() {
        if (!this.head) return undefined
        let current = this.head
        let newTails = current
        while (current.next) {
            newTails = current
            current = current.next
        }
        this.tail = newTails
        this.tail.next = null
        this.length--
        if (this.length === 0) {
            this.head = null
            this.tail = null
        }
        return current
    }

    // TODO: Implement the addToHead method here
    addToHead(val) {
        let newNodes = new Node(val)
        if (!this.head) {
            this.head = newNodes
            this.tail = newNodes
        } else {
            newNodes.next = this.head
            this.head = newNodes
        }
        this.length++
       return this
    }

    // TODO: Implement the removeHead method here
    removeHead() {

    }

    // TODO: Implement the contains method here
    contains(target) {

    }

    // TODO: Implement the get method here
    get(index) {

    }

    // TODO: Implement the set method here
    set(index, val) {

    }

    // TODO: Implement the insert method here
    insert(index, val) {

    }

    // TODO: Implement the remove method here
    remove(index) {

    }

    // TODO: Implement the size method here
    size() {

    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
