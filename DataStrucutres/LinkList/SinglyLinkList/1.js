class Node {
    constructor(val) {
        this.val = val;
        this.next = null
    }
}


class SinglyLinkList {

    constructor() {
        this.length = 0
        this.head = null
        this.tail = null
    }

    push(val) {
        //Null is a Falsy Value
        let newNode = new Node(val)
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this //Returns entire SinglyLinklist Class
    }
    pop() {
        if (!this.head) return undefined
        let current = this.head
        let newTail = current
        //newTail to point to second last element
        while (current.next) { //current next means next item after the current one 
            newTail = current
            current = current.next
        }
        this.tail = newTail
        this.tail.next = null;
        this.length--;
        if (this.length == 0) {
            this.head = null;
            this.tail = null;
        }
        return current.val

    }

    shift() {
        let currentHead = this.head;
        this.head = this.head.next;
        this.length--;
        return currentHead.val;
    }
    //Adds Value to the Starting of the Link List!
    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head

        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index) {
        if (index < 0 || index > this.length) return null;
        let counter = 0;
        let current = this.head
        while (index != counter) {
            current = current.next;
            counter++;
        }
        return current
    }

    set(index, val) {
        let foundNode = this.get(index);
        if (foundNode) {
            foundNode.val = val;
            return true;
        }
        return false;

    }

    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index == 0) return this.unshift(val)
        if (index == this.length) return this.push(val)

        let newNode = new Node(val);
        let prev = this.get(index - 1);
        let temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;

    }
    remove(index) {
        if (index < 0 || index > this.length) return undefined;
        if (index == 0) return this.shift();
        if (index == this.length - 1) return this.pop()

        let previousNode = this.get(index - 1)
        let removed = previousNode.next
        previousNode.next = removed.next;
        this.length--;
        return removed;
    }
    print() {
        let arr = []
        let current = this.head
        while (current) {
            arr.push(current.val)
            current = current.next;
        }
        console.log(arr)
    }
    reverse() {
        //Swaping Node and Tail
        let node = this.head;
        this.head = this.tail;
        this.tail = node;

        let next;
        let prev = null;
        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
}


list = new SinglyLinkList()
list.push('Vidit')
list.push('Shah')
list.push('ABC')
list.push('QWE')
list.push('YOLO')
list.push('CHECKER')
list.unshift('FIRST')
console.log(list.pop())
console.log(list.head.val)
list.shift()
console.log(list.head.val)
console.log(list.get(3))
list.set(3, 'VALUE CHANGED')
console.log(list.get(3).val)
list.insert(1, 'INSERTED')
console.log(list.get(1).val)
console.log(list.print())
console.log(list.reverse())
console.log(list.print())