import { useState } from 'react';
import './App.scss';

function App() {

    const[color, setColor] = useState('crimson');

    const now = () => {
        console.log('now')
    }

    const change = () => {
        setColor('blue');
    }

    return (
        <div className="App">
            <div className="App-header">
                <h1 style={{color: color}}>Bebras</h1>
                <button onClick={change} >Bebras color change</button>
                <button onClick={now} >Press on 9:00PM</button>
            </div>

        </div>
    );
}

export default App;