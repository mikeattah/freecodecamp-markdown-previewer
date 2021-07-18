import React from "react";
import "./Previewer.css";

function Previewer() {
  return (
    <div className="preview-comp">
      <div className="heading-div">
        <h2>Preview</h2>
        <i class="fa fa-arrows-alt" aria-hidden="true"></i>
      </div>
      <div className="preview-div">
        <div id="preview"></div>
      </div>
    </div>
  );
}

export default Previewer;
