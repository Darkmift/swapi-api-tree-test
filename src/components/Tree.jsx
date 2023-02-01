import React, { useState } from 'react';

const mapper = (data) => {
  if (Array.isArray(data))
    return data.map((entry, i) => (entry.name ? entry : { name: [`entry:${i}`], children: entry }));
  return Object.entries(data).map(([k, v]) => ({ name: k, children: v }));
};
const isUrl = (str) =>
  /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/.test(str);

function Tree({ treeData, nestedLevel = 1 }) {
  const mappedData = mapper(treeData);

  return (
    <div style={{ marginLeft: nestedLevel * 10 + 'px' }}>
      {mappedData.map((node, i) => (
        <TreeNode node={node} key={i + nestedLevel} nestedLevel={nestedLevel} />
      ))}
    </div>
  );
}

function TreeNode({ node, nestedLevel = 1 }) {
  const { name: label, children } = node;
  const [showChildren, setShowChildren] = useState(false);

  const handleClick = () => {
    setShowChildren(!showChildren);
  };

  const showOption = Array.isArray(children) ? (
    <Tree treeData={children} nestedLevel={nestedLevel + 2} />
  ) : isUrl(children) ? (
    <a href={children} target="_blank">
      {children}
    </a>
  ) : (
    children
  );

  return (
    <>
      <div onClick={handleClick} style={{ marginBottom: '10px' }}>
        <span style={{ display: 'flex', gap: '5px' }}>
          <span>{showChildren ? '-' : '+'}</span>
          <span> {label}</span>
        </span>
      </div>
      {showChildren && (
        <div style={{ marginLeft: nestedLevel * 10 + 'px', marginBottom: '10px' }}>
          {showOption}
        </div>
      )}
    </>
  );
}

export default Tree;
