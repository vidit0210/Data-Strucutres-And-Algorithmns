//Practicing creating a Single Link List
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SingleLinkList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = null;
    }
    print() {
        let arr = []
        let current = this.head;
        while (current) {
            arr.push(current.val);
            current = current.next;
        }
        return arr;
    }
    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode
        }
        this.length++;

    }

    pop() {
        let current = this.head;
        let newtail = current;
        while (current.next) {
            newtail = current;
            current = current.next;
        }
        this.tail = newtail;
        this.tail.next = null;
        this.length--;
    }

    shift() {
        let current = this.head;
        this.head = this.head.next;
        this.length--;
        return current.val;
    }
    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.head.next = this.head;
            this.head = newNode;
        }
        this.length++;

    }
    get(index) {
        let counter = 0;
        let current = this.head;
        while (index !== counter) {
            current = current.next;
            counter++;
        }
        return current;
    }
    set(index, val) {
        let found_node = this.get(index)
        if (found_node) {
            found_node.val = val;
            return true;
        }
        return false;
    }
    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index == 0) return unshift(val)
        if (index == this.length) return push(val)
        let newNode = new Node(val);
        let prevNode = this.get(index - 1);
        let temp = prevNode.next;
        prevNode.next = newNode;
        newNode.next = temp;
        this.length++;
    }
    remove(index) {

        if (index < 0 || index > this.length) return false;
        if (index == 0) return this.shift()
        if (index == this.length) return this.pop();
        let previousNode = this.get(index - 1);
        let removed = previousNode.next;
        previousNode.next = removed.next;
        this.length--;



    }



}
let sl = new SingleLinkList()

sl.push(3)
sl.push(8)
sl.push(9)
sl.push(3)
sl.push(4)
sl.push(5)
console.log(sl.print())
sl.pop()
console.log(sl.print())
sl.shift()
console.log(sl.print())
console.log(sl.get(1).val)
sl.set(1, 10)
console.log(sl.print())
sl.insert(1, 11)
console.log(sl.print())
sl.remove(1)
console.log(sl.print())