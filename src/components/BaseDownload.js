import React from "react";
import { Button } from "react-bootstrap";
import Icon from "../core/Icon";

function DownloadButton({ title, subtitle, icon, primary }) {
  return (
    <>
      <Button variant={primary} className=" d-flex align-items-center">
        <Icon icon={icon} w="0.846rem" h="0.846rem" className="me-1" />
        {title}&nbsp;<span class="d-non"> {subtitle}</span>
      </Button>
    </>
  );
}

export default DownloadButton;
