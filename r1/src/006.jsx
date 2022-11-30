import './App.scss';
import Cat from './components/006/Cat';
import Dog from './components/006/Dog';

function App() {

    const mas = [
        {name:'Pilkis', color:'red', type: 'cat'},
        {name:'Pukis', color:'gray', type: 'cat'},
        {name:'Sarikas', color:'gray', type: 'dog'},
        {name:'Rainis', color:'black', type: 'cat'},
        {name:'Bobikas', color:'brown', type: 'dog'}
    ];

    return (
        <div className="App">
            <div className="App-header">
                {mas.map((a, i) => a.type ==='cat' ? <Cat key={i} cat={a}/> : <Dog key={i} dog={a}/>)}
            </div>

        </div>
    );
}

export default App;