class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    print() {
        let arr = [];
        let current = this.head;
        while (current) {
            arr.push(current.val);
            current = current.next;
        }
        return arr;
    }
    push(val) {
        let newNode = new Node(val);
        if (this.length == 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        if (!this.head) return undefined;
        let popedNode = this.tail;
        if (this.length == 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = popedNode.prev;
            this.tail.next = null;
            popedNode.prev = null;
        }
        return popedNode;
    }
    shift() {
        let oldHead = this.head;

        if (!this.head) return undefined;
        if (this.length == 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead
    }
    unhsift(val) {
        let newNode = new Node(val)
        if (this.length == 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            let temp = this.head;
            this.head = newNode;
            this.head.next = temp;
            this.head.prev = null;
        }
        this.length++;
    }

}
dl = new DoublyLinkList();
dl.push(3);
dl.push(5);
dl.push(6);
dl.push(7);
dl.push(8);
console.log(dl.print());
dl.pop();
console.log(dl.print());
dl.shift()
console.log(dl.print());
dl.unhsift(0)
console.log(dl.print());