/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
 var mergeKLists = function(lists) {

    if (lists.length === 0 || lists === null)
        return null;
    else if (lists.length == 1)
        return lists[0];

    const merge2Lists = (l1, l2) => {
        let list = new ListNode();
        let head  = list;
        while (l1 !== null || l2 !== null) {
            if (l1 === null) {
                list.next = l2;
                l2 = l2.next;
            } else if (l2 === null) {
                list.next = l1;
                l1 = l1.next;
            } else if (l1.val < l2.val) {
                list.next = l1;
                l1 = l1.next;
            } else {
                list.next = l2;
                l2 = l2.next;
            }
            list = list.next;
        }
        return head.next;
    }
    
    let list = lists[0];
    for (let i = 1; i < lists.length; i++) {
        list = merge2Lists(list, lists[i]);
    }
    return list;
};