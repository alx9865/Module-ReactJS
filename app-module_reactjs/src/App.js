import "./App.css";
import { Button, Row, Col, Form } from "react-bootstrap";
import {} from "./components/jouer.jsx";
import { Link } from "react-router-dom";

function App() {
  return (
    <Form>
      <div className="App">
        <header className="App-header">
          <p>Jeu du pendu</p>
          <Row>
            <Link to="">
              <button variant="primary" as={Link} to="/components/jouer.jsx">
                Jouer
              </button>
            </Link>
            <button>Liste</button>
          </Row>
        </header>
      </div>
    </Form>
  );
}

export default App;
