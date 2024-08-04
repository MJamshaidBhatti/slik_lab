import React from "react";
import Figure from "react-bootstrap/Figure";

function IconBox({ icon, className = "", w, h }) {
  return (
    <Figure className="m-0">
      <Figure.Image
        style={{ width: `${w}`, height: `${h}` }}
        className={`m-0 ${className}`}
        alt="Icon"
        src={icon}
      />
    </Figure>
  );
}

export default IconBox;
