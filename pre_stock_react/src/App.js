import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import ListPage from './Page/ListPage';
import {
  Routes, Route
}from "react-router-dom";
function App() {
  return (
    
    <div className="App">
      <Header />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Routes>
        <Route path="/" element={<ListPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
