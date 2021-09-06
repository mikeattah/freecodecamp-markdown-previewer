import React from "react";
import marked from "marked";
import "./App.css";

// marked.setOptions({
//   renderer: new marked.Renderer(),
//   highlight: function (code, lang) {
//     const hljs = require("highlight.js");
//     const language = hljs.getLanguage(lang) ? lang : "plaintext";
//     return hljs.highlight(code, { language }).value;
//   },
//   langPrefix: "hljs language-js", // highlight.js css expects a top-level 'hljs' class.
//   pedantic: false,
//   gfm: true,
//   breaks: false,
//   sanitize: false,
//   smartLists: true,
//   smartypants: true,
//   xhtml: false,
// });

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "# Welcome to my React Markdown Previewer",
      editorDisplay: "flex",
      editorWidth: "48%",
      editorCloseIconDisplay: "inline-block",
      editorMinimizeIconDisplay: "none",
      previewDisplay: "flex",
      previewWidth: "48%",
      previewCloseIconDisplay: "inline-block",
      previewMinimizeIconDisplay: "none",
      hoverTitle: "close",
    };
    this.createMarkDown = this.createMarkDown.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleEditorClose = this.handleEditorClose.bind(this);
    this.handleEditorMinimize = this.handleEditorMinimize.bind(this);
    this.handlePreviewClose = this.handlePreviewClose.bind(this);
    this.handlePreviewMinimize = this.handlePreviewMinimize.bind(this);
  }

  componentWillMount() {
    const markdownText = "markdown-text.md";

    import(`./assets/${markdownText}`).then((res) => {
      fetch(res.default)
        .then((res) => res.text())
        .then((text) => this.setState({ value: text }));
    });
  }

  createMarkDown() {
    return { __html: marked(this.state.value) };
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleEditorClose() {
    this.setState({
      editorDisplay: "none",
      previewWidth: "60%",
      previewCloseIconDisplay: "none",
      previewMinimizeIconDisplay: "inline-block",
      hoverTitle: "minimize",
    });
  }

  handleEditorMinimize() {
    this.setState({
      previewDisplay: "flex",
      editorWidth: "48%",
      editorCloseIconDisplay: "inline-block",
      editorMinimizeIconDisplay: "none",
      hoverTitle: "close",
    });
  }

  handlePreviewClose() {
    this.setState({
      previewDisplay: "none",
      editorWidth: "60%",
      editorCloseIconDisplay: "none",
      editorMinimizeIconDisplay: "inline-block",
      hoverTitle: "minimize",
    });
  }

  handlePreviewMinimize() {
    this.setState({
      editorDisplay: "flex",
      previewWidth: "48%",
      previewCloseIconDisplay: "inline-block",
      previewMinimizeIconDisplay: "none",
      hoverTitle: "close",
    });
  }

  render() {
    return (
      <div className="App">
        <div
          className="editor"
          style={{
            display: this.state.editorDisplay,
            minWidth: this.state.editorWidth,
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
              value={this.state.value}
            />
          </div>
        </div>
        <div
          className="previewer"
          style={{
            display: this.state.previewDisplay,
            minWidth: this.state.previewWidth,
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
            <div
              id="preview"
              dangerouslySetInnerHTML={this.createMarkDown()}
            ></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
