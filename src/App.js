import './App.css';
import Weather from "./components/Weather/Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">       
        <h1>The weather channel</h1>
      </header>
      <main>
        <Weather/>
      </main>
      <footer>
      &copy; Kronans Apotek AB {new Date().getFullYear()}
      </footer>
    </div>
  );
}

export default App;
