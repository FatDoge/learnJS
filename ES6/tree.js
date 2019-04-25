let data = [
  { id: 3, val: '3', parentId: 1 },
  { id: 2, val: '2', parentId: 0 },
  { id: 5, val: '5', parentId: 2 },
  { id: 6, val: '6', parentId: 2 },
  { id: 4, val: '4', parentId: 1 },
  { id: 1, val: '1', parentId: 0 },
]

function convert(data) {
  const m = new Map();
  data.forEach(node => {
    m.set(node.id, node);
    node.children = [];
  });

  data.forEach(node => {
    const parent = m.get(node.parentId);
    if (parent) {
      parent.children.push(node);
    }
  });
}

// 用map保存节点和id，O(n)搞定



convert(data);
console.log(data)