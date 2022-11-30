import { useState } from 'react';
import './App.scss';
import Sq from './components/006/Sq';
import rand from './functions/rand'
import randCol from './functions/randomColor';
//import Cat from './components/006/Cat';
//import Dog from './components/006/Dog';

function App() {

    //const mas = [
    //    {name:'Pilkis', color:'red', type: 'cat'},
    //    {name:'Pukis', color:'gray', type: 'cat'},
    //    {name:'Sarikas', color:'gray', type: 'dog'},
    //    {name:'Rainis', color:'black', type: 'cat'},
    //    {name:'Bobikas', color:'brown', type: 'dog'}
    //];

    const[sq, setSq] = useState([]);
    const[cat, setCat] = useState('');

    const add = () => {
        setSq(s => [...s, { id: rand(100000, 999999), color: randCol()}]);
    }

    const write = () => {
        localStorage.setItem('myCat', 'Big and Black')
    }
    const read = () => {
        setCat(localStorage.getItem('myCat'));
    }
    const remove = () => {
        localStorage.removeItem('myCat')
    }

    return (
        <div className="App">
            <div className="App-header">
                {/* mas.map((a, i) => a.type ==='cat' ? <Cat key={i} cat={a}/> : <Dog key={i} dog={a}/>) */}
                <div className="bin">
                    {
                        sq.map((square) => <Sq key={square.id} square={square} setSq={setSq}/>)
                    }
                </div>
                <h2>{cat}</h2>
                <button onClick={add}>ADD</button>
                <button onClick={write}>Write</button>
                <button onClick={read}>Read</button>
                <button onClick={remove}>Remove</button>
            </div>

        </div>
    );
}

export default App;