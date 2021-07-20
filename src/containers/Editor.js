import React from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import "./Editor.css";

// const initialState = {
//   value: 0
// }
class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.initialValue = "Welcome to my React Markdown Previewer!";
    this.initialDisplay = "flex";
    this.editorHeight = "30vh";
    this.previewHeight = "75vh";
    this.state = {
      value: this.initialValue,
      boot: this.initialValue,
      editorDisplay: this.initialDisplay,
      editorHeight: this.editorHeight,
      previewDisplay: this.initialDisplay,
      previewHeight: this.previewHeight,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleEditorDisplay = this.handleEditorDisplay.bind(this);
    this.handlePreviewDisplay = this.handlePreviewDisplay.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleEditorDisplay() {
    this.setState({
      editorDisplay: "flex" ? "none" : "flex",
      previewDisplay: "120vh",
    });
  }

  handlePreviewDisplay() {
    this.setState({
      previewDisplay: "flex" ? "none" : "flex",
      editorHeight: "120vh",
    });
  }

  render() {
    return (
      <div className="editor-page">
        <div
          className="editor"
          style={{
            display: this.state.editorDisplay,
            minHeight: this.state.editorHeight,
          }}
        >
          <div className="e-heading-div">
            <div className="e-title-div">
              <i className="fa fa-free-code-camp" aria-hidden="true"></i>
              <h5>Editor</h5>
            </div>
            <div className="e-close-div">
              <i
                className="fa fa-arrows-alt"
                ariaHidden="true"
                title="maximize"
                onClick={this.handleEditorDisplay}
              ></i>
            </div>
          </div>
          <div className="editor-div">
            <textarea
              id="editor"
              placeholder={this.state.boot}
              onChange={this.handleChange}
            ></textarea>
          </div>
        </div>
        <div
          className="previewer"
          style={{
            display: this.state.previewDisplay,
            minHeight: this.state.previewHeight,
          }}
        >
          <div className="p-heading-div">
            <div className="p-title-div">
              <i className="fa fa-free-code-camp" aria-hidden="true"></i>
              <h5>Previewer</h5>
            </div>
            <div className="p-close-div">
              <i
                className="fa fa-arrows-alt"
                ariaHidden="true"
                title="maximize"
                onClick={this.handlePreviewDisplay}
              ></i>
              {/* <i class="fa fa-compress" aria-hidden="true"></i> */}
            </div>
          </div>
          <div className="previewer-div">
            <div id="preview">
              <ReactMarkdown
                remarkPlugins={[gfm]}
                children={this.state.value}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Editor;
// remarkPlugins={[gfm]}
