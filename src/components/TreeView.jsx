import React, { useState, useId } from 'react';

function Tree({ treeData, nestedLevel = 0 }) {
  return (
    <ul>
      {treeData.map((node) => (
        <TreeNode node={node} key={node.key} nestedLevel={nestedLevel} />
      ))}
    </ul>
  );
}

function TreeNode({ name, node, nestedLevel = 0 }) {
  const label = name;
  const children = node;

  const [showChildren, setShowChildren] = useState(false);

  const handleClick = () => {
    setShowChildren(!showChildren);
  };
  return (
    <>
      <div onClick={handleClick} style={{ marginBottom: '10px' }}>
        <span style={{ display: 'flex', gap: '5px' }}>
          <span>{showChildren ? '-' : '+'}</span>
          <span> {label}</span>
        </span>
      </div>
      <ul style={{ paddingLeft: nestedLevel * 10 + 'px', borderLeft: '1px solid black' }}>
        {showChildren && (
          <li>
            {Array.isArray(children) ? (
              <Tree treeData={children} nestedLevel={++nestedLevel} />
            ) : (
              children
            )}
          </li>
        )}
      </ul>
    </>
  );
}

// const TreeNode = ({ name, node, onToggle }) => {
//   const [isExpanded, setIsExpanded] = useState(false);

//   return (
//     <>
//       <div onClick={() => onToggle({ node, name })} style={{ cursor: 'pointer' }}>
//         {isExpanded ? '-' : '+'} {name}
//       </div>
//       {isExpanded &&
//         node.children.map((childNode, i) => (
//           <TreeNode key={i + useId()} name={i} node={childNode} onToggle={onToggle} />
//         ))}
//     </>
//   );
// };

const TreeView = ({ data }) => {
  const [expandedNodes, setExpandedNodes] = useState([]);

  const onToggle = ({ name, node }) => {
    console.log('🚀 ~ file: TreeView.jsx:21 ~ onToggle ~ node', {
      res: expandedNodes.find((n) => n.name),
      name,
      expandedNodes,
      node,
    });
    if (expandedNodes.find((n) => n.name)) {
      console.log('node removed');
      setExpandedNodes([expandedNodes].filter((n) => n !== n.name));
    } else {
      console.log('node set');
      setExpandedNodes([...expandedNodes, { name, node }]);
    }
  };

  return (
    <div>
      {Object.keys(data).map((key) => (
        <TreeNode key={key + useId()} name={key} node={data[key]} onToggle={onToggle} />
      ))}
    </div>
  );
};

export default TreeView;
