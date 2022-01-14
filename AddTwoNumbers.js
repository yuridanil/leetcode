/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let o1 = l1;
    let o2 = l2;
    let r = 0;
    let list = new ListNode();
    let head = list;
    do {
        v1 = o1 === null ? 0 : o1.val;
        v2 = o2 === null ? 0 : o2.val;
        list.val = (v1 + v2 + r) % 10;
        o1 = o1 === null ? null : o1.next;
        o2 = o2 === null ? null : o2.next;
        r = Math.floor((v1 + v2 + r) / 10);
        if (!(o1 === null && o2 === null) || r != 0) {
            list.next = new ListNode();
            list = list.next;
        }
    } while (!(o1 === null && o2 === null));
    if (r !== 0) list.val = r;
    return head;
};