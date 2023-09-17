function BuildTreeNode(name) {
  this.name = name.toLowerCase().trim();
  this.children = [];
}

const insertNodeOnTree = (root, parentName, name) => {
  if (root === null || root === undefined) return

  root.name === parentName.toLowerCase().trim()
    ? root.children.push(new BuildTreeNode(name.toLowerCase().trim()))
    : root.children.map((children) => {
      insertNodeOnTree(children, parentName.toLowerCase().trim(), name.toLowerCase().trim());
    })
}

const root = new BuildTreeNode("root");

insertNodeOnTree(root, "root", "maria");
insertNodeOnTree(root, "maria", "julia");
insertNodeOnTree(root, "julia", "rafael");
insertNodeOnTree(root, "rafael", "guilherme");
insertNodeOnTree(root, "rafael", "sabrina");

console.log(JSON.stringify(root, undefined, 2));


