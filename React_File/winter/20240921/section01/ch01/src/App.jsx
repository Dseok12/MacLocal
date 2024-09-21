import "./App.css";
import Editor from "./components/Editor.jsx";
import Header from "./components/Header.jsx";
import List from "./components/List.jsx";
import "./css/reset.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Editor />
      <List />
    </div>
  );
}

export default App;
