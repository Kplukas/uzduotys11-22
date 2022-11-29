import './App.css';
import Valio from './components/004/Valio';
import rand from './functions/rand';

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{
        color: rand(0,1) ? 'red' : 'blue',
        }}>
        <Valio spalva="gray" paddingas="20px" bg="pink" cross="yellow" />
        <Valio spalva="white" paddingas="30px" bg="white" cross="orange" />
      </header>
    </div>
  );
}

export default App;
