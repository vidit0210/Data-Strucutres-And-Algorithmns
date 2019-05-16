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
    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode();
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