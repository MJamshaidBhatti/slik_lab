import React from "react";
import Figure from "react-bootstrap/Figure";

function IconBox({ icon, className, w, h }) {
  return (
    <Figure>
      <Figure.Image
        style={{ width: `${w}px`, height: `${h}px` }}
        className={className}
        alt="Icon"
        src={icon}
      />
    </Figure>
  );
}

export default IconBox;
