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



console.log(getNodeValue(a, 2));
console.log(getNodeValue(a, 3));
console.log(getNodeValue(a, 7));