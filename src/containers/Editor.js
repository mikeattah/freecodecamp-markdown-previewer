import React from "react";
import "./Editor.css";

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    // store.setState({ value: this.refs.editor.value });
  }

  render() {
    return (
      <div className="editor-comp">
        <div className="heading-div">
          <h2>Editor</h2>
          <i class="fa fa-arrows-alt" aria-hidden="true"></i>
        </div>
        <div className="editor-div">
          <textarea id="editor" onChange={this.handleChange}></textarea>
        </div>
      </div>
    );
  }
}

export default Editor;
