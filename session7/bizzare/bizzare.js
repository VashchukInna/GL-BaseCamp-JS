/*You need to find all values of attribute named "base64" in bizzare.html.
 After that make one long string and decode it. Mind the name of attribute. Follow instructions.
 */
var valuesOfAttributeBase64 = document.querySelectorAll('[base64]');

var getLine = '';
for (var i = 0; i < valuesOfAttributeBase64.length; i++) {
    getLine += valuesOfAttributeBase64[i].getAttribute('base64');
}
console.log(getLine);
//Q3JlYXRlIGFuZCBleGVjdXRlIGZ1bmN0aW9uIGxpa2U6IEZ1bmN0aW9uKHN0cmluZyksIHdoZXJlIHN0cmluZyBpcyBjb25jYXRlbmF0ZWQgdmFsdWUgb2YgYWxsIENvbW1lbnQgbm9kZXMgZnJvbSB0aGlzIGRvY3VtZW50

console.log(window.atob(getLine));
//Create and execute function like: Function(string), where string is concatenated value of all Comment nodes from this document

function getAllComments() {
    var comments = [],
        node,
        iterator = document.createNodeIterator(
            document,
            NodeFilter.SHOW_COMMENT,
            function (node) {
                return node.nodeName === '#comment' ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
            }
        );
    while (node = iterator.nextNode()) {
        comments += node.nodeValue;
    }
    return comments;
}
var showComments = new Function(getAllComments());
showComments();