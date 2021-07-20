import "./App.css";
import Editor from "./containers/Editor.js";
// import Previewer from "./components/Previewer.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-div">
          <Editor />
        </div>
      </header>
    </div>
  );
}

export default App;
