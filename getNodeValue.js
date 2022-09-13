class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");


a.next = b;
b.next = c;
c.next = d;

const getNodeValue = (head, index) => {
    let current = head;
    for (let i = 0; i <= index; i++) {
        if (current === null) return null;
        if (i === index) {
            return current.val
        }
        current = current.next
    }
}

// Recuuursion
const reGetNodeValue = (head, index) => {
    let count = index;
    if (head === null) return null;
    if (index === 0) return head.val;
    count--;
    return reGetNodeValue(head.next, count)
}

const node1 = new Node("banana");
const node2 = new Node("mango");

node1.next = node2;

// banana -> mango

console.log(reGetNodeValue(node1, 0));


console.log(reGetNodeValue(a, 2));
console.log(reGetNodeValue(a, 3));
console.log(reGetNodeValue(a, 7));