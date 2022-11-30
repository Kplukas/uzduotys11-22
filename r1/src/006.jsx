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

    const add = () => {
        setSq(s => [...s, { id: rand(100000, 999999), color: randCol()}]);
    }

    return (
        <div className="App">
            <div className="App-header">
                {/* mas.map((a, i) => a.type ==='cat' ? <Cat key={i} cat={a}/> : <Dog key={i} dog={a}/>) */}
                <div className="bin">
                    {
                        sq.map((sq) => <Sq key={sq.id} sq={sq} />)
                    }
                </div>
                <button onClick={add}>ADD</button>
            </div>

        </div>
    );
}

export default App;