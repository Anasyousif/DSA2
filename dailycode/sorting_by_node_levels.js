function treeByLevels (rootNode) {
    const queue = [rootNode];
    const values = [];
    
    while (queue.length) {
      let node = queue.shift()
      
      if (node) {
        values.push(node.value)
        queue.push(node.left)
        queue.push(node.right)
      }
    }
      return values;
  }