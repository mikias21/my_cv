// Components
import ColumnOne from "./components/ColumnOne/ColumnOne";
import ColumnTwo from "./components/ColumnTwo/ColumnTwo";
import DownloadButton from "./components/DownloadButton/DownloadButton";

// Main css
import "./App.css";

function App() {
  return (
    <>
      <DownloadButton />
      <div className="app" id="app">
        <ColumnOne className="col1_app" />
        <ColumnTwo className="col2_app" />
      </div>
    </>
  );
}

export default App;
