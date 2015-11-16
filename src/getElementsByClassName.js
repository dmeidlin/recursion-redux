// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function (className, node) {
    // your code here
    'use strict';
    // set node to a default value if no node is supplied.
    node = node || document.body;
  
    var nodes = [],
        childResults = [],
        parts = node.className.split(' '),
        i;
    //Check if the class name is used in the current node
    if (parts.indexOf(className) >= 0) {
      //if it is, push the element to the nodes array
        nodes.push(node);
    }
    //Iterate over any child nodes.
    for (i = 0; i < node.children.length; i++) {
        childResults = getElementsByClassName(className, node.children[i]);
        nodes = nodes.concat(childResults);
      }
  
    return nodes;
};
