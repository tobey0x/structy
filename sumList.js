class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const a = new Node(2);
const b = new Node(8);
const c = new Node(3);
const d = new Node(-1);
const e = new Node(7);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

function sumList(head) {
    let current = head;
    let sum = 0;
    while (current !== null) {
        sum += current.val
        current = current.next
    }
    return sum
}

// Recuuursion
function reSum(head) {
    if (head === null) return 0;
    return head.val + reSum(head.next)
}

console.log(reSum(a));