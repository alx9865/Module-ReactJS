import "./App.css";
import { Button, Row, Col } from "react-bootstrap";
import {} from "./components/jouer.jsx";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Jeu du pendu</p>
        <Row>
          <button variant="dark" type="submit" to="/components/jouer.jsx">
            Jouer
          </button>
          <button>Liste</button>
        </Row>
      </header>
    </div>
  );
}

export default App;
