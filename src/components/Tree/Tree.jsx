//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link} from "react-router-dom"
const divStyle = {
    listStyleType: 'none'
  };
const Tree = ({ data = [] }) => {
  return (
    <div className="d-tree">
      <ul className="d-flex d-tree-container flex-column" style = {divStyle}>
        {data.map((tree, index) => (
          <TreeNode node={tree} key = {index}/>
        ))}
      </ul>
    </div>
  );
};

const TreeNode = ({ node }) => {
  const [childVisible, setChildVisiblity] = useState(false);

  const hasChild = node.children ? true : false;

  return (
    <li className="d-tree-node border-0">
      <div className="d-flex" onClick={(e) => setChildVisiblity((v) => !v)}>
        {hasChild && (
          <div
            className={`d-inline d-tree-toggler ${
              childVisible ? "active" : ""
            }`}
          >
          </div>
        )}

        <div className="col d-tree-head">

          <Link to={node.component}>{node.label} </Link>
        </div>
      </div>

      {hasChild && childVisible && (
        <div className="d-tree-content">
          <ul className="d-flex d-tree-container flex-column" style = {divStyle}>
            <Tree data={node.children} />
          </ul>
        </div>
      )}
    </li>
  );
};

export default Tree;