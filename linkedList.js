class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const a = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");

a.next = b;
b.next = c;
c.next = d;

const printLinkedList = (head) => {
    let listVals = [];
    let current = head;
    while (current !== null) {
        listVals.push(current.val);
        current = current.next;
    }
    console.log(listVals);
};

// Recuuursion!
const linkedListValues = (head) => {
    const values = [];
    _linkedListValues(head, values);
    return values;
};

const _linkedListValues = (head, values) => {
    if (head === null) return;
    values.push(head.val);
    _linkedListValues(head.next, values);
};
// const printLinkedList = (head) => {
//     if (head === null) return;
//     console.log(head.val);
//     printLinkedList(head.next);
// }
printLinkedList(a);

