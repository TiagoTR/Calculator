import './App.css';
import { Calculator, Container} from "./styles/app";
import ButtonRound from "./components/atoms/ButtonRound"

function App() {
  return (
    <Container>
      <Calculator >
        <div className="data">

        </div>
        <div className="special-buttons">
            
        </div>
        <hr/>
        <div className="pad">
            <div className="numbers">
              <ButtonRound />
            </div>
            <div className="operations"></div>
        </div>
      </Calculator>
    </Container>
  );
}

export default App;
