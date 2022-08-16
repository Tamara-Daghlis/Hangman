
import './App.css';
import './componenets/Solution'
import { Solution } from './componenets/Solution';
import { Score } from './componenets/Score';
import { Letters } from './componenets/Letters';

function App() {
  return (
    <div>
      <Score />
      <Solution />
      <Letters />

    </div>
  );
}

export default App;
