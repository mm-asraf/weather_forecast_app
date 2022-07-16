import "./App.css";
import Weather from "./components/Weather";
import { Container } from "react-bootstrap";
import City from "./components/City";
function App() {
  return (
    <div className="App">
      {/* dt is in unix-seconds but javascript uses milliseconds, multiply with 1000 */}
      <Container className="App">
        <City />
      </Container>
    </div>
  );
}

export default App;
