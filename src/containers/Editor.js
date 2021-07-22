import React from "react";
// import ReactMarkdown from "react-markdown";
// import gfm from "remark-gfm";
import "./Editor.css";
import marked from "marked";
// import { markdownText } from "./assets/markdown-text.txt";

// const initialState = {
//   value: 0
// }
class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.initialValue = "Welcome to my React Markdown Previewer!"; // change to markdown text
    this.initialDisplay = "flex";
    this.editorHeight = "30vh";
    this.previewHeight = "75vh";
    this.hoverTitle = "close";
    this.state = {
      value: this.initialValue,
      editorDisplay: this.initialDisplay,
      editorHeight: this.editorHeight,
      editorCloseIconDisplay: "inline-block",
      editorMinimizeIconDisplay: "none",
      previewDisplay: this.initialDisplay,
      previewHeight: this.previewHeight,
      previewCloseIconDisplay: "inline-block",
      previewMinimizeIconDisplay: "none",
      hoverTitle: this.hoverTitle,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleEditorClose = this.handleEditorClose.bind(this);
    this.handleEditorMinimize = this.handleEditorMinimize.bind(this);
    this.handlePreviewClose = this.handlePreviewClose.bind(this);
    this.handlePreviewMinimize = this.handlePreviewMinimize.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleEditorClose() {
    this.setState({
      editorDisplay: "none",
      previewHeight: "120vh",
      previewCloseIconDisplay: "none",
      previewMinimizeIconDisplay: "inline-block",
      hoverTitle: "minimize",
    });
  }

  handleEditorMinimize() {
    this.setState({
      previewDisplay: "flex",
      editorHeight: "30vh",
      editorCloseIconDisplay: "inline-block",
      editorMinimizeIconDisplay: "none",
      hoverTitle: "close",
    });
  }

  handlePreviewClose() {
    this.setState({
      previewDisplay: "none",
      editorHeight: "120vh",
      editorCloseIconDisplay: "none",
      editorMinimizeIconDisplay: "inline-block",
      hoverTitle: "minimize",
    });
  }

  handlePreviewMinimize() {
    this.setState({
      editorDisplay: "flex",
      previewHeight: "75vh",
      previewCloseIconDisplay: "inline-block",
      previewMinimizeIconDisplay: "none",
      hoverTitle: "close",
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
                title={this.state.hoverTitle}
                onClick={this.handleEditorClose}
                style={{ display: this.state.editorCloseIconDisplay }}
              ></i>
              <i
                className="fa fa-compress"
                ariaHidden="true"
                title={this.state.hoverTitle}
                onClick={this.handleEditorMinimize}
                style={{ display: this.state.editorMinimizeIconDisplay }}
              ></i>
            </div>
          </div>
          <div className="editor-div">
            <textarea
              id="editor"
              placeholder="Enter markdown text..."
              onChange={this.handleChange}
              style={{ minHeight: this.state.editorHeight }}
            >
              {this.state.value}
            </textarea>
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
                title={this.state.hoverTitle}
                onClick={this.handlePreviewClose}
                style={{ display: this.state.previewCloseIconDisplay }}
              ></i>
              <i
                className="fa fa-compress"
                ariaHidden="true"
                title={this.state.hoverTitle}
                onClick={this.handlePreviewMinimize}
                style={{ display: this.state.previewMinimizeIconDisplay }}
              ></i>
            </div>
          </div>
          <div className="previewer-div">
            <div id="preview">{marked(this.state.value)}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Editor;
// remarkPlugins={[gfm]}
