import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import gfm from "remark-gfm";
import "./Editor.css";

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      editorDisplay: "flex",
      editorHeight: "30vh",
      editorCloseIconDisplay: "inline-block",
      editorMinimizeIconDisplay: "none",
      previewDisplay: "flex",
      previewHeight: "75vh",
      previewCloseIconDisplay: "inline-block",
      previewMinimizeIconDisplay: "none",
      hoverTitle: "close",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleEditorClose = this.handleEditorClose.bind(this);
    this.handleEditorMinimize = this.handleEditorMinimize.bind(this);
    this.handlePreviewClose = this.handlePreviewClose.bind(this);
    this.handlePreviewMinimize = this.handlePreviewMinimize.bind(this);
  }

  componentWillMount() {
    const markdownText = "markdown-text.md";

    import(`../assets/${markdownText}`).then((res) => {
      fetch(res.default)
        .then((res) => res.text())
        .then((text) => this.setState({ value: text }));
    });
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
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
              value={this.state.value}
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
            <div id="preview">
              <ReactMarkdown
                rehypePlugins={[rehypeHighlight]}
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
