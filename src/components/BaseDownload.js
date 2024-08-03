import React from "react";
import { Button } from "react-bootstrap";

function Download() {
  return (
    <>
      <div id="download" class="download_btn btn">
        <div class="download"></div>
        <span>
          Download <span class="d-non">Carousel</span>
        </span>
      </div>
      <Button variant="primary">Hello World</Button>
    </>
  );
}

export default Download;
