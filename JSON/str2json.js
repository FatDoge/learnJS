const str = `奴隶社会,非洲,古埃及文明,金字塔
,亚洲,两河流域文明,汉谟拉比法典
,,古印度,种姓制度
,,,佛教的创立
,欧洲,希腊,希腊城邦
,,,雅典民主
,,罗马,城邦
,,,帝国的征服与扩展
,,希腊罗马古典文化,建筑艺术
,,,公历`

function str2json(str) {
  // 存放树的构建信息
  const treeInfo = []
  // 暂存最近父组件信息
  const parentNodeMap = {}
  // 存放根节点
  let rootNode = {}

  // 生成树的构建信息
  str.split('\n')
  .map( item => item.split(','))
  .map( ele => {
    const obj = new Map()
    ele.forEach((x, index) => {
      obj.set(index, x)
    });
    return obj
  })
  .forEach( map => {
    map.forEach( (mapItem, key) => {
      // 更新parentNodeMap
      if(mapItem) {
        parentNodeMap[key] = mapItem
        if (parentNodeMap[key - 1]) {
          treeInfo.push({
            currentNode: mapItem,
            parentNode: parentNodeMap[key - 1]
          })
        } else {
          rootNode = {
            currentNode: mapItem,
            parentNode: null
          }
        }
      }
    })
  })

  /**
 * 根据列表构建树
 * @param {*} list 列表
 * @param {*} rootNode 根节点
 */
  const buildTree = (list, rootNode) => {
    // 定义根节点
    findChild(rootNode, list);

    return rootNode;
  }

  /**
   * 递归查找子节点
   */
  const findChild = (node, list) => {
    const curNode = node;
    for (let i = 0; i < list.length; i += 1) {
      if (list[i].parentNode === curNode.currentNode) {
        // 判断是否存在children
        if (!Object.prototype.hasOwnProperty.call(curNode, 'children')) {
          curNode.children = [];
        }

        const newNode = { ...list[i] };
        curNode.children.push(newNode);
        findChild(newNode, list);
      }
    }
  };

  const treeTraversal = data => {
    let path = new Array();

    const func = data => {
      for (let node in data) {
        path.push(node);
        if (Object.prototype.toString.call(data.children) === '[object Array]' && data.children.length >= 1) {
          console.log(data.children)
          data.children.map( item => func(item))
        } else {
          // console.log(path.join(' '), data[node]);
        }
        path.pop();
      }
    }
    func(data)
  }

  const tree = buildTree(treeInfo, rootNode)
  return treeTraversal(tree)
}
console.log(str2json(str))