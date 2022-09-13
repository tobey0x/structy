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
const e = new Node("e");

a.next = b;
b.next = c;
c.next = d;
d.next = e;

const linkedListFind = (head, target) => {
    let current = head
    while (current !== null) {
        if (current.val === target) return true;
        current = current.next;
    }
    return false;
}

// Recuuursion
const reLinkedListFind = (head, target) => {
    let current = head;
    if (current === null) return false;
    if (current.val === target) {
        return true;
    };
    return reLinkedListFind(current.next, target)
}

console.log(reLinkedListFind(a, "c"))
console.log(reLinkedListFind(a, "f"))